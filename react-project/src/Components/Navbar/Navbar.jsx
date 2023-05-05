import { Flex, Spacer, Text, Box, Grid, HStack, Heading, Stack, Avatar, Icon, Image, Tooltip } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import NavDropdown from './NavDropdown'
import NavMenu from './Menu'
import { Link } from 'react-router-dom'


function Navbar() {

    // const navigate = useNavigate()


    // const routeChange = () => {
    //     console.log("sign in here");
    //     <Link to="/login"></Link>
    // }

    return (<>
        <Flex>

            <Box>
                <NavMenu />
            </Box>

            <Spacer />

            <Box >
                <Image
                    src={require('../../Images/Skinnetic.png')}
                    alt="Skinnetic logo"
                    h="50px"
                    w="200px"
                    m="10px"
                    objectFit="contain"
                />
            </Box>

            <Spacer />

            <Box >
                <Flex>
                    <Tooltip label='Log-in' fontSize='md' >
                        {/* <Link to="/login" > */}
                        < Image
                            // onClick={() => navigate("/login")}
                            m="10px"
                            boxSize="30px"
                            objectFit='cover'
                            src={require('../../Images/profile.png')}
                            alt='Skinnetic'
                        />
                        {/* </Link> */}
                    </Tooltip>
                    <Tooltip label='cart' fontSize='md'  >
                        {/* <Link to="/cart" > */}
                        <Image
                            m="10px"
                            boxSize="30px"
                            objectFit='cover'
                            src={require('../../Images/bag.png')}
                            alt='Skinnetic'
                        />
                        {/* </Link> */}
                    </Tooltip>
                </Flex>
            </Box >

        </Flex >
        <NavDropdown />
    </>
    )
}

export default Navbar
