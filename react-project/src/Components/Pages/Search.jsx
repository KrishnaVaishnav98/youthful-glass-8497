import { Search2Icon } from '@chakra-ui/icons'
import { Flex, Input, Box, InputGroup, InputLeftElement, Select, Center } from '@chakra-ui/react'

function SearchBar() {
    return (
        <>
            <Center>
                <Flex gap={"50px"} w="1000px">
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Search2Icon color='#263238' />}
                        />
                        <Input type='text' placeholder='Search' />
                    </InputGroup>
                    <Select placeholder='Filter By Price'>
                        <option value='UT10'>Up to 10€</option>
                        <option value='UT25'>Up to 25€</option>
                        <option value='UT40'>Up to 40€</option>
                        <option value='MT40'>More Than 40€</option>
                    </Select>
                </Flex>
            </Center>
        </>
    )
}
export default SearchBar