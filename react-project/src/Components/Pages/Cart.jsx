
import { Stack, Card, CardBody, Heading, Text, Image, CardFooter, Button, Flex, Box, ButtonGroup, Center, Input, FormControl, FormLabel } from "@chakra-ui/react";
import Logo from "../Navbar/Logo";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';

function Cart() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        cardName: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
    });

    const [checkout, setCheckout] = useState(false)
    const [cartData, setCartData] = useState([])
    const [placeOrder, setPlaceOrder] = useState(false)
    const navigate = useNavigate()

    function MycartData() {
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`)
            .then((res) => {
                setCartData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        MycartData()
    }, [])

    function handleQuantity(val, id, quantity, el) {
        if (val === "+") {
            axios.put(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart/${id}`, {
                ...el,
                quantity: quantity + 1,
            })
                .then((res) => {
                    console.log(res.data);
                    MycartData();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (val === "-" && quantity > 1) {
            axios.put(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart/${id}`, {
                ...el,
                quantity: quantity - 1,
            })
                .then((res) => {
                    console.log(res.data);
                    MycartData();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    function deleteCartItem(id) {
        axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart/${id}`)
            .then((res) => {
                console.log(res.data);
                MycartData();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    let total = 0;
    cartData.forEach((el) => (
        total += ((el.price) * (el.quantity))

    ))

    function handlePlaceOreder(event) {
        event.preventDefault();

        setCartData([])
        navigate("/")
        cartData.map((el) => (
            axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart/${el.id}`)
                .then((res) => {
                    console.log(res.data);
                    MycartData()
                })
                .catch((err) => {
                    console.log(err);
                })
        ))

        setPlaceOrder(true)

    }





    return (<>



        <Logo />

        <Flex>
            {checkout ?
                <Box p="50px">
                    <Heading mb="40px">CHECKOUT</Heading>

                    <Stack spacing={4}>
                        <form onSubmit={handlePlaceOreder} required>
                            <FormControl isRequired>
                                <FormLabel>Full Name</FormLabel>
                                <Input name="fullName" value={formData.fullName} onChange={(e) => (setFormData(e.target.value))} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input name="email" type="email" value={formData.email} onChange={(e) => (setFormData(e.target.value))} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Address</FormLabel>
                                <Input name="address" value={formData.address} onChange={(e) => (setFormData(e.target.value))} />
                            </FormControl >
                            <FormControl isRequired>
                                <FormLabel>City</FormLabel>
                                <Input name="city" value={formData.city} onChange={(e) => (setFormData(e.target.value))} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Country</FormLabel>
                                <Input name="country" value={formData.country} onChange={(e) => (setFormData(e.target.value))} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Card Holder Name</FormLabel>
                                <Input name="cardName" value={formData.cardName} onChange={(e) => (setFormData(e.target.value))} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Card Number</FormLabel>
                                <Input name="cardNumber" value={formData.cardNumber} onChange={(e) => (setFormData(e.target.value))} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Expiration Date</FormLabel>
                                <Stack direction="row">
                                    <Input name="expiryMonth" placeholder="MM" value={formData.expiryMonth} onChange={(e) => (setFormData(e.target.value))} />
                                    <Input name="expiryYear" placeholder="YYYY" value={formData.expiryYear} onChange={(e) => (setFormData(e.target.value))} />
                                </Stack>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>CVV</FormLabel>
                                <Input name="cvv" value={formData.cvv} onChange={(e) => (setFormData(e.target.value))} />
                            </FormControl>
                            <Button type="submit" colorScheme="blue" mt="20px">
                                Place Order
                            </Button>
                        </form>
                    </Stack>

                </Box>

                :

                <Box>
                    <></>
                </Box>}



            <Box>
                <Stack p="50px">
                    <Heading mb="40px">CART</Heading>
                    {
                        cartData.length > 0 ?


                            cartData.map((el) => (
                                <Center>

                                    <Card
                                        key={el.id}
                                        w="750px"

                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        variant='outline' >
                                        <Image
                                            objectFit='cover'
                                            maxW={{ base: '100%', sm: '200px' }}
                                            src={el.avatar}
                                            alt={el.name} />

                                        <Stack w="550px">
                                            <CardBody>
                                                <Heading size='md'>{el.name}</Heading>

                                                <Text py='2' fontSize="xl">
                                                    {el.price} €
                                                </Text>

                                                <ButtonGroup justifyContent={"space-between"}>

                                                    <Button variant='outline' value="+" colorScheme='green' onClick={() => (handleQuantity("+", el.id, el.quantity, el))}>
                                                        +
                                                    </Button>
                                                    <Button variant='solid' colorScheme='green'>
                                                        {el.quantity}
                                                    </Button>
                                                    <Button variant='outline' value="-" onClick={() => (handleQuantity("-", el.id, el.quantity, el))} colorScheme='green'>
                                                        -
                                                    </Button>
                                                    <Button variant='outline' colorScheme='red' onClick={() => (deleteCartItem(el.id))}>
                                                        Remove
                                                    </Button>


                                                </ButtonGroup>

                                            </CardBody>

                                        </Stack>
                                    </Card>
                                </Center>
                            ))
                            :

                            <Box boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} p="20px" borderRadius={"5px"} w="full">
                                <Center>
                                    <Heading m="80px" color={"#43A047"} fontStyle={"oblique"}> Your Cart is Empty.</ Heading>
                                </Center>
                            </Box>

                    }
                    {

                        cartData.length ?
                            <Box boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} p="20px" borderRadius={"5px"}>
                                <Flex justifyContent={"space-evenly"}>
                                    <Text fontWeight={"bold"} fontSize={"2xl"} mr="30px">
                                        Total :  {total.toFixed(2)} €
                                    </Text>
                                    <Button variant={checkout ? 'outline' : 'solid'} colorScheme='blue' onClick={() => (setCheckout(!checkout))}>Checkout</Button>
                                </Flex>
                            </Box>
                            : ""
                    }
                </Stack>
            </Box >


        </Flex >
        <Footer />

    </>)
}

export default Cart;