import { Image, Flex, Box, Text, Heading, Button, Grid, GridItem } from '@chakra-ui/react'

function BestSellers() {
    return (
        <>
            <Flex w="full">
                <Box  >
                    <Image w="750px" h="500px" src="https://cdn.shopify.com/s/files/1/0511/9066/1293/files/Pack_completo_2.png?v=1666192082">
                    </Image>
                </Box>
                <Box w="900px" h="500px" bg="#E8F5E9">
                    <Heading mt="150px" color="#546E7A" fontFamily="revert">Design meets Sustainability</Heading>
                    <Text mt="30px" color="#546E7A">Refill and Reuse. Save up to 89% plastic by refilling your favorite products</Text>
                    <Button mt="30px" colorScheme='teal' variant='outline'>
                        Shop Now
                    </Button>
                </Box>
            </Flex>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
            </Grid>
        </>
    )
}

export default BestSellers;