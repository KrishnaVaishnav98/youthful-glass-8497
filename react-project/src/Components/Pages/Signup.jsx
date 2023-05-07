import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Center, Button, Heading, ButtonGroup
} from '@chakra-ui/react'
import Logo from "../Navbar/Logo";
import axios from 'axios';
import { useState } from 'react';

import React from 'react';

let initState = {
    name: "",
    email: "",
    password: "",
    cPassword: ""
}


function SignUp() {


    const [name, setName] = useState(initState.name)
    const [email, setEmail] = useState(initState.email)
    const [password, setPassword] = useState(initState.password)
    const [cPassword, setcPassword] = useState(initState.cPassword)

    function handleSubmit() {

    }

    return (<>

        <Logo />
        <Center>

            <Box mt="60px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} p="50px">
                <Heading mb="20px" >Sign Up</Heading>
                <FormControl w="400px" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type='text' value={name} onChange={(e) => (setName(e.target.value))} />

                    <FormLabel>Email address</FormLabel>
                    <Input type='email' value={email} onChange={(e) => (setEmail(e.target.email))} />

                    <FormLabel>Password</FormLabel>
                    <Input type='password' value={password} onChange={(e) => (setPassword(e.target.value))} />

                    <FormLabel>Confirm Password</FormLabel>
                    <Input type='password' value={cPassword} onChange={(e) => (setcPassword(e.target.value))} />

                    <Button mt="30px" variant='solid' colorScheme='green' onClick={handleSubmit}>Submit</Button>

                </FormControl>
            </Box>
        </Center>
    </>)
}



export default SignUp;