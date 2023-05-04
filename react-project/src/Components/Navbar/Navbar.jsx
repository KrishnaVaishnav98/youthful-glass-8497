import { Flex, Spacer, Text, Box, Grid, HStack, Heading, Stack, Avatar, Icon, Image, Tooltip } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import NavDropdown from './NavDropdown'
import NavMenu from './Menu'

function Navbar() {
    return (<>
        <Flex>

            <Box>
                {/* <Image
                    src={require('../../Images/menu.png')}
                    alt="Menu"
                    m="10px"
                    boxSize="25px"
                    objectFit="contain"
                /> */}
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
                        <Image
                            m="10px"
                            boxSize="30px"
                            objectFit='cover'
                            src={require('../../Images/profile.png')}
                            alt='Skinnetic'
                        />

                    </Tooltip>
                    <Tooltip label='cart' fontSize='md'  >
                        <Image
                            m="10px"
                            boxSize="30px"
                            objectFit='cover'
                            src={require('../../Images/bag.png')}
                            alt='Skinnetic'
                        />
                    </Tooltip>
                </Flex>
            </Box>

        </Flex>
        <NavDropdown />
    </>
    )
}

export default Navbar
