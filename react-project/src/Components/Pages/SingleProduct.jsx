import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, Center, CardBody, CardFooter, Stack, Image, Heading, Box, Text, Button, Flex, Spacer } from '@chakra-ui/react'
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
import Logo from "../Navbar/Logo";
import { PageContext } from "../../Context/pageContext";
import { useContext } from "react";
import Footer from '../Footer/Footer';

function SingleProduct(props) {

    const { id } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate();
    let category = useContext(PageContext)
    const [cartData, setCartData] = useState([])

    category = data.category
    console.log("data.id==========", data.id)
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
        MycartData()
    }, [])

    function handleBuyNow(data) {
        handleCart(data)

    }

    function MycartData() {
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`)
            .then((res) => {
                setCartData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleCart(el) {
        console.log("entered")
        if (cartData.length > 0) {

            cartData.forEach((product) => {
                if (product.id === el.id) {
                    alert("Already in Cart")
                }
                else {
                    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`, {
                        ...el,
                        quantity: 1
                    })
                        .then((res) => {
                            setCartData(res.data)
                        })
                        .catch((err) => {
                            console.log("Not working", err)
                        })
                }

            });
        } else {
            axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`, {
                ...el,
                quantity: 1
            })
                .then((res) => {
                    setCartData(res.data)
                    navigate("/cart")
                })
                .catch((err) => {
                    console.log("Not working", err)
                })
        }
    }

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
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
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
            <Logo />
            <Center>
                <Card
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                    m="40px"
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    w="1100px"
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '550px' }}
                        src={data.avatar}
                        alt={data.name}
                    />
                    <Center >
                        <Stack w="550px">
                            <CardBody >
                                <Heading size='lg' mb="30px" > {data.name}</Heading>


                                <Text py='2' color={"#263238"}>
                                    {data.about}
                                </Text>

                                <Heading m="50px" color={"#263238"} size='md'>Price: {data.price}€</Heading>
                                <Stack color={"#004D40"}  >

                                    <Box  >
                                        {BasicUsage("Ingredients", data.ingredients)}
                                    </Box>
                                    <Spacer />
                                    <Box >
                                        {BasicUsage("How To Use", data.howToUse)}
                                    </Box>

                                </Stack>

                            </CardBody>
                            <Center >
                                <CardFooter gap="40px">
                                    <Button variant='solid' colorScheme='green' w="200px" onClick={() => (handleBuyNow(data))}>
                                        Buy Now
                                    </Button>
                                    <Button variant='outline' colorScheme='green' w="200px" onClick={() => navigate(`/`)} >
                                        Back
                                    </Button>
                                </CardFooter>
                            </Center>
                        </Stack>
                    </Center>
                </Card>
            </Center >
            <Footer />
        </>

    )

}

export default SingleProduct;