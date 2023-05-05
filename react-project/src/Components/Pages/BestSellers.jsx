import { Image, Flex, Box, Text, Heading, Button, Grid, GridItem } from '@chakra-ui/react'
import Products from './Products';
import ProductCard from './ProductCard';
import axios from "axios"
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';


function BestSellers() {

    const [data, setData] = useState([])

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
            <Navbar />
            <Flex w="full" >
                <Box  >
                    <Image w="750px" h="500px" src="https://cdn.shopify.com/s/files/1/0511/9066/1293/files/Pack_completo_2.png?v=1666192082">
                    </Image>
                </Box>
                <Box w="900px" h="500px" bg="#E8F5E9" >
                    <Heading mt="150px" color="#546E7A" fontFamily="revert">Design meets Sustainability</Heading>
                    <Text mt="30px" color="#546E7A">Refill and Reuse. Save up to 89% plastic by refilling your favorite products</Text>
                    <Button mt="30px" colorScheme='teal' variant='outline'>
                        Shop Now
                    </Button>
                </Box>
            </Flex>
            <Grid templateColumns='repeat(4, 1fr)' gap="50px">

                {
                    data.map((el) => (
                        <ProductCard name={el.name} avatar={el.avatar} price={el.price} />
                    ))
                }

            </Grid>
        </>
    )
}

export default BestSellers;