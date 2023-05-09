import { Flex, Spacer, Text, Box, Grid, HStack, Heading, Stack, Avatar, Icon, Image, Tooltip } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import NavMenu from './Menu'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

function Logo() {

    const navigate = useNavigate()
    const Auth = useContext(AuthContext)

    return (<>

        <Flex boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} alignItems={"center"}>

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
                    onClick={() => (navigate("/"))}
                />
            </Box>

            <Spacer />

            <Box >
                <Flex>
                    {
                        Auth.isAuth ?
                            <Box onClick={() => Auth.logoutUser()} >
                                <Tooltip label='Log-out' fontSize='md' >
                                    < Image
                                        m="10px"
                                        boxSize="30px"
                                        objectFit='cover'
                                        src={require('../../Images/profile.png')}
                                        alt='Skinnetic'
                                    />
                                </Tooltip>
                            </Box >

                            :
                            <Box onClick={() => navigate("/login")} >
                                <Tooltip label='Log-in' fontSize='md' >
                                    < Image
                                        m="10px"
                                        boxSize="30px"
                                        objectFit='cover'
                                        src={require('../../Images/profile.png')}
                                        alt='Skinnetic'
                                    />
                                </Tooltip>
                            </Box >
                    }
                    <Box onClick={() => navigate("/cart")}>
                        <Tooltip label='cart' fontSize='md'  >
                            <Image
                                m="10px"
                                boxSize="30px"
                                objectFit='cover'
                                src={require('../../Images/bag.png')}
                                alt='Skinnetic'
                            />
                        </Tooltip>
                    </Box >

                </Flex>

            </Box >

        </Flex >

    </>
    )
}

export default Logo;
