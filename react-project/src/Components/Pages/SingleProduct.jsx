import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Box, Text, Button, Flex, Spacer } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'


function SingleProduct(props) {

    const { id } = useParams()
    const [data, setData] = useState([])


    // console.log("data=========", howToUse)

    function Products() {
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    console.log("====", data)

    useEffect(() => {
        Products()
    }, [])


    function BasicUsage(name, ingredients) {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
            <>
                <Button onClick={onOpen}>{name}</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box  >

                                {ingredients && ingredients.split("\n").map((line, index) => (
                                    <Text key={index} py='2'>{line}</Text>
                                ))}
                            </Box>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='green' mr={3} onClick={onClose}>
                                Close
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }

    return (
        <>

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '550px' }}
                    src={data.avatar}
                    alt={data.name}
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{data.name}</Heading>
                        <Text py='2'>
                            {data.about}
                        </Text>
                        <Flex justifyContent="space-evenly">

                            <Box  >
                                {/* {data.howToUse && data.howToUse.split("\n").map((line, index) => (
                                <Text key={index} py='2'>{line}</Text>
                            ))} */}
                                {BasicUsage("Ingredients", data.ingredients)}
                            </Box>
                            {/* <Spacer /> */}
                            <Box   >
                                {BasicUsage("How To Use", data.howToUse)}
                                {/* {data.ingredients && data.ingredients.split("\n").map((line, index) => (
                                <Text key={index} py='2'>{line}</Text>
                            ))} */}
                            </Box>

                        </Flex>
                        <Heading size='md'>{data.price}</Heading>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Add to Cart
                        </Button>
                        <Button variant='solid' colorScheme='blue'>
                            Back
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>

    )

}

export default SingleProduct;