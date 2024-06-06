import { Button, Flex, Heading, Image } from '@chakra-ui/react'
import moonIcon from '../assets/icon-moon.svg'
import sunIcon from '../assets/icon-sun.svg'



export const Header = (colorMode, toggleColorMode) => {
  return (
    <Flex justifyContent={"space-between"}>
        <Heading as="h2" size="xl" color= "white" letterSpacing={".5em"}>TODO</Heading>
        <Button variant={"ghost"} 
        onClick={toggleColorMode} 
        _hover="none" 
        _active="none">
            <Image h={10} src={colorMode  ?
                sunIcon : moonIcon } />
        </Button>
    </Flex>
  )
}


export default Header