/* eslint-disable react/prop-types */
import { Circle, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

const InputButton = ({ colorMode, todo, setTodo, addTodo }) => {
  return (
    <Flex m="2.5em 0" background={colorMode  ? 
    "white" : "#ffff"} 
    p="2"
    borderRadius={"0.5em"}
        
    >
        <InputGroup>
            <InputLeftElement pointerEvents={"none"} 
            display={"flex"} 
            justifyContent={"center"}
            alignItems={"center"}
            h={"100%"}
            >
                <Circle width={"22px"} height={"22px"}/>
            </InputLeftElement>
            <Input fontWeight={"700"} 
            fontSize={"1.2em"} 
            type="text" h="3em" 
            variant={"unstyled"} 
            placeholder="Escribe algo..." 
            ml={".5em"} 
            value={todo}
            onChange={(e => setTodo(e.target.value))}
            onKeyDown={addTodo}
            
            />
        </InputGroup>
    </Flex>
  )
}


export default InputButton
