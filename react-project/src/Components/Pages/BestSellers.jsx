import { Image, Flex, Box, Text, Heading, Button, ButtonGroup, Grid, GridItem, background } from '@chakra-ui/react'
import { Card, CardBody, Stack, CardFooter, Center } from '@chakra-ui/react'
import Footer from '../Footer/Footer';
import axios from "axios"
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function BestSellers() {


    const [data, setData] = useState([])
    const [cartData, setCartData] = useState([])
    const navigate = useNavigate()


    function Products() {
        axios.get(`${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    function MycartData() {
        axios.get(`${process.env.REACT_APP_JSON_SERVER_PORT}/cart`)
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
                    axios.post(`${process.env.REACT_APP_JSON_SERVER_PORT}/cart`, {
                        ...el,
                        quantity: 1
                    })
                        .then((res) => {
                            alert("Product added to Cart")
                            MycartData()
                        })
                        .catch((err) => {
                            console.log("Not working", err)
                        })
                }

            });
        } else {
            axios.post(`${process.env.REACT_APP_JSON_SERVER_PORT}/cart`, {
                ...el,
                quantity: 1
            })
                .then((res) => {
                    alert("Product added to Cart")
                    MycartData()
                })
                .catch((err) => {
                    console.log("Not working", err)
                })
        }
    }


    useEffect(() => {
        Products()
        MycartData()
    }, [])



    return (
        <>

            <Box w="full" >
                <Box borderRadius="10px" h="500px" backgroundImage="url('https://dy6g3i6a1660s.cloudfront.net/wMsXNGunCnVl6ICOTkCsgAeoBLA/orig.jpg')" backgroundPosition="center">
                    <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert">Design meets Sustainability</Heading>
                    <Button mr="40px" mt="300px" colorScheme='white' color="white" variant='outline' >
                        Shop Now
                    </Button>
                </Box>

            </Box>

            <Heading mt="30px" mb="30px">Our Best Sellers</Heading>

            <Grid templateColumns='repeat(4, 1fr)' gap="50px">

                {

                    data.map((el) => (

                        < Box key={el.id} >
                            <Card maxW='sm'>
                                <CardBody>
                                    <Image

                                        src={el.avatar}
                                        alt={el.name}
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Text color='#263238' fontWeight="bold" fontSize='lg' fontFamily="arial" size='md'>{el.name}</Text>

                                        <Text color='#455A64' fontSize='xl'>
                                            {el.price} €
                                        </Text>
                                    </Stack>
                                </CardBody>
                                {/* <Divider /> */}
                                <Center>
                                    <CardFooter justifyContent={'space-evenly'}>
                                        <ButtonGroup spacing='2'>
                                            <Button variant='ghost' colorScheme='green' bg="#E8F5E9" onClick={() => (handleCart(el))} >
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
            <Footer />
        </>
    )
}

export default BestSellers;