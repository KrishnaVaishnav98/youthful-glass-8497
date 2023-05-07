import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Center, Button, Heading, ButtonGroup
} from '@chakra-ui/react'
import Logo from "../Navbar/Logo";
import { useNavigate } from 'react-router-dom';

function LogIn() {

    const navigate = useNavigate()

    return (<>

        <Logo />
        <Center>

            <Box mt="60px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} p="50px">
                <Heading mb="20px" >Log In</Heading>
                <FormControl w="400px" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' />
                    <ButtonGroup mt="30px">
                        <Button variant='solid' colorScheme='green'>Submit</Button>
                        <Button variant='outline' colorScheme='green' onClick={() => (navigate("/signup"))}>Not signed up yet?</Button>
                    </ButtonGroup>
                </FormControl>
            </Box>
        </Center>
    </>)
}

export default LogIn;