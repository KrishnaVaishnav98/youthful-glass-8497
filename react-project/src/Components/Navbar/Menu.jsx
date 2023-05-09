import { Menu, MenuButton, MenuList, MenuItem, Box, IconButton, Image } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';

function NavMenu() {

    return (
        <Menu >
            <Box>
                <MenuButton m="10px"
                    as={IconButton}
                    aria-label='Options'
                    variant='outline'
                    icon={<HamburgerIcon />}
                />

            </Box>
            <MenuList>
                <MenuItem >
                    ABOUT US AND OUR PURPOSE
                </MenuItem>
                <MenuItem >
                    STOCKLIST
                </MenuItem>
                <MenuItem >
                    JOURNAL
                </MenuItem>
                <MenuItem >
                    FAQ
                </MenuItem>
                <MenuItem >
                    CONTACT
                </MenuItem>
                <MenuItem >
                    FOR BUSINESS
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default NavMenu;