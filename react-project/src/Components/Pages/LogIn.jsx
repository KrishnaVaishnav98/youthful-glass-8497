import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Center, Button, Heading, ButtonGroup, Flex, Image, Stack
} from '@chakra-ui/react'
import Logo from "../Navbar/Logo";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from "react";

let initState = {
    email: "",
    password: "",
}

function LogIn() {

    const [email, setEmail] = useState(initState.email)
    const [password, setPassword] = useState(initState.password)
    const [userData, setUserData] = useState([])
    const Auth = useContext(AuthContext)


    const navigate = useNavigate()

    function UserData() {
        axios.get(`${process.env.REACT_APP_JSON_SERVER_PORT}/users`)
            .then((res) => {
                setUserData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await UserData()
        let foundUser = false;
        userData.forEach((user) => {
            if (user.email === email && user.password === password) {
                foundUser = true
                Auth.loginUser()
            }
        });
        if (foundUser) {
            navigate("/")
        } else {
            alert("User does not exist or password is incorrect");
        }
    }

    // useEffect(() => {
    //     UserData()
    // }, [])



    return (<>

        <Logo />
        <Center>
            <Flex >

                <Box w="630px" h="550px" mt="50px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} p="50px"  >


                    <Heading mb="20px" >Log In</Heading>

                    <FormControl w="550px" isRequired>
                        <FormLabel >Email address</FormLabel>
                        <Input type='email' value={email} onChange={(e) => (setEmail(e.target.value))} bg="white" />
                        <FormLabel>Password</FormLabel>
                        <Input type='password' value={password} onChange={(e) => (setPassword(e.target.value))} />

                        <ButtonGroup mt="60px">
                            <Button variant='solid' colorScheme='green' onClick={handleSubmit}>Submit</Button>
                            <Button variant='outline' colorScheme='green' onClick={() => (navigate("/signup"))}>Not signed up yet?</Button>
                        </ButtonGroup>
                    </FormControl>

                </Box>

                <Box w="800px" mt="50px" >
                    <Image w="800px" h="550px" borderRadius={"10px"} src="https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80" />
                </Box>

            </Flex >
        </Center >
        <Footer />
    </>)
}

export default LogIn;