import { Image, Flex, Box, Text, Heading, Button, ButtonGroup, Grid, GridItem, background } from '@chakra-ui/react'
import { Card, CardBody, Stack, CardFooter, Center } from '@chakra-ui/react'


import Products from './Products';
import ProductCard from './ProductCard';
import axios from "axios"
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { color } from 'framer-motion';
import SingleProduct from './SingleProduct';


function BestSellers() {


    const [data, setData] = useState([])
    const navigate = useNavigate()

    function Products() {
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
            .then((res) => {
                console.log(res.data)
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


    return (
        <>
            {/* <Navbar /> */}
            {/* <Flex w="full" > */}
            <Box w="full" >
                <Box borderRadius="10px" h="500px" backgroundImage="url('https://dy6g3i6a1660s.cloudfront.net/wMsXNGunCnVl6ICOTkCsgAeoBLA/orig.jpg')" backgroundPosition="center">
                    <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert">Design meets Sustainability</Heading>
                    <Button mr="40px" mt="300px" colorScheme='white' color="white" variant='outline' >
                        Shop Now
                    </Button>
                </Box>

            </Box>
            {/* <Box w="900px" h="500px" bg="#E8F5E9" borderRadius="10px">
                    <Heading mt="150px" fontFamily="revert">Design meets Sustainability</Heading>
                    <Text mt="30px" color="#546E7A">Refill and Reuse. Save up to 89% plastic by refilling your favorite products</Text>
                    <Button mt="30px" colorScheme='teal' variant='outline'>
                        Shop Now
                    </Button>
                </Box> */}
            {/* </Flex > */}
            <Grid templateColumns='repeat(4, 1fr)' gap="50px">

                {
                    data.map((el) => (

                        // <ProductCard key={el.id} name={el.name} avatar={el.avatar} price={el.price} />
                        < Box key={el.id} >
                            <Card maxW='sm' mt="50px">
                                <CardBody>
                                    <Image

                                        src={el.avatar}
                                        alt={el.name}
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Text color='#263238' fontWeight="bold" fontSize='lg' fontFamily="arial" size='md'>{el.name}</Text>

                                        <Text color='#455A64' fontSize='xl'>
                                            {el.price}
                                        </Text>
                                    </Stack>
                                </CardBody>
                                {/* <Divider /> */}
                                <Center>
                                    <CardFooter justifyContent={'space-evenly'}>
                                        <ButtonGroup spacing='2'>
                                            <Button variant='ghost' colorScheme='green' bg="#E8F5E9" >
                                                Add to cart
                                            </Button>
                                            <Button variant='outline' colorScheme='green'  >
                                                <Link to={`/products/${el.id}`} >
                                                    More Details
                                                </Link>
                                            </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Center>
                            </Card >
                        </Box >
                    ))
                }

            </Grid >
        </>
    )
}

export default BestSellers;