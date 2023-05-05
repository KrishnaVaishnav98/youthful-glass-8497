import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter, Center } from '@chakra-ui/react'


function ProductCard({ name, avatar, price }) {

    return (
        <Card maxW='sm' mt="50px">
            <CardBody>
                <Image
                    src={avatar}
                    alt={name}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Text color='#263238' fontWeight="bold" fontSize='lg' fontFamily="arial" size='md'>{name}</Text>

                    <Text color='#455A64' fontSize='xl'>
                        {price}
                    </Text>
                </Stack>
            </CardBody>
            {/* <Divider /> */}
            <Center>
                <CardFooter>
                    <Button variant='ghost' colorScheme='green' bg="#E8F5E9">
                        Add to cart
                    </Button>
                </CardFooter>
            </Center>
        </Card >
    )
}

export default ProductCard