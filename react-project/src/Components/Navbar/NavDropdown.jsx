import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import BestSellers from '../Pages/BestSellers';
import Combo from "../Pages/Combo"
import HandCream from "../Pages/HandCream"
import HandSanitizer from "../Pages/HandSanitizer"
import HandSoap from "../Pages/HandSoap"
import OralCare from "../Pages/OralCare"
import Refills from "../Pages/Refills"
import SkinCare from "../Pages/SkinCare"

function NavDropdown() {
    return (
        <Tabs size='md' variant='enclosed'>
            <TabList >
                <Tab ml="180px" mr="20px">Best Sellers </Tab>
                <Tab ml="20px" mr="20px">Hand Sanitizer</Tab>
                <Tab ml="20px" mr="20px">Hand Cream</Tab>
                <Tab ml="20px" mr="20px" >Refills </Tab>
                <Tab ml="20px" mr="20px" >Skin Care </Tab>
                <Tab ml="20px" mr="20px" >Oral Care </Tab>
                <Tab ml="20px" mr="20px" >Hand Soap</Tab>
                <Tab ml="20px" mr="20px" >Combos </Tab>
            </TabList>
            <TabPanels>

                <TabPanel>
                    <BestSellers />
                </TabPanel>

                <TabPanel>
                    <HandSanitizer />
                </TabPanel>

                <TabPanel>
                    <HandCream />
                </TabPanel>

                <TabPanel>
                    <Refills />
                </TabPanel>

                <TabPanel>
                    <SkinCare />
                </TabPanel>

                <TabPanel>
                    <OralCare />
                </TabPanel>

                <TabPanel>
                    <HandSoap />
                </TabPanel>

                <TabPanel>
                    <Combo />
                </TabPanel>
            </TabPanels>
        </Tabs>


    )
}

export default NavDropdown;