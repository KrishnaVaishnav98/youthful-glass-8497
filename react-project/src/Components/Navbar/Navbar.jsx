import { Flex, Spacer, Text, Box, Grid, HStack, Heading, Stack, Avatar, Icon, Image, Tooltip } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'

function Navbar() {
    return (<>
        <Flex>

            <Box>
                <Image
                    src={require('../../Images/menu.png')}
                    alt="Skinnetic logo"
                    m="10px"
                    boxSize="25px"
                    objectFit="contain"
                />
            </Box>


            <Spacer />
            <Box>
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

            <Box>
                <Flex>
                    <Tooltip label='Log-in' fontSize='md'>
                        <Image
                            m="10px"
                            boxSize="30px"
                            objectFit='cover'
                            src={require('../../Images/profile.png')}
                            alt='Skinnetic'
                        />

                    </Tooltip>
                    <Tooltip label='cart' fontSize='md' >
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
        <Center >
            <Tabs size='md' variant='enclosed'>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Center>
    </>
    )
}

export default Navbar
