import { Box, Text, Stack, Link, IconButton, Icon, Input, Button, Center } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <Box as="footer" backgroundColor="#F1F8E9" py="12" mt="80px">
            <Stack direction={{ base: "column", md: "row" }} spacing="4" align={{ base: "flex-start", md: "center" }}>


                <Box flex="1">

                    <Stack direction={{ base: "row", md: "column" }} spacing="4">
                        <Text fontWeight="bold" fontSize="lg" mb="4">Quick Links</Text>
                        <Link href="#">Home</Link>
                        <Link href="#">Shop</Link>
                        <Link href="#">About Us</Link>
                        <Link href="#">Contact Us</Link>
                    </Stack>
                </Box>

                <Box flex="1">

                    <Stack direction="column" spacing="4">
                        <Text fontWeight="bold" fontSize="lg" mb="4">Follow Us</Text>
                        <IconButton bg="#F1F8E9" aria-label="Facebook" icon={<Icon as={FaFacebook} />} />
                        <IconButton bg="#F1F8E9" aria-label="Twitter" icon={<Icon as={FaTwitter} />} />
                        <IconButton bg="#F1F8E9" aria-label="Instagram" icon={<Icon as={FaInstagram} />} />
                    </Stack>
                </Box>

                <Box flex="1">

                    <form>
                        <Stack direction={{ base: "row", md: "column" }} spacing="4" >

                            <Text fontWeight="bold" fontSize="lg" mb="4" mr="100px" >Subscribe to our Newsletter</Text>
                            <Input type="email" placeholder="Enter your email address" bg="white" required w="400px" />
                            <Button type="submit" colorScheme="green" w="100px" >Subscribe</Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>

            <Box borderTop="1px solid gray" mt="8" pt="4">
                <Text textAlign="center" fontSize="sm">
                    &copy; {new Date().getFullYear()} My Skin Product Company. All rights reserved.
                </Text>
            </Box>
        </Box>
    );
}

export default Footer;
