import { Box, Circle, Flex, Text } from "@chakra-ui/react"
import { useState } from 'react';



export const TodoItem = ( colorMode, todo ) => {

    const [isCompleted, setIsCompleted] = useState(false)
    

    return <Flex p="1.1em" h="4.4em" borderBottom="1px solid grey">
            <Flex alignItems={"center"} minW={"100%"}>
                <Box cursor={"pointer"} onClick={() => setIsCompleted(!isCompleted)}>
                    {isCompleted? (
                    <Flex w="24px" 
                    h="24px" 
                    borderRadius={"50%"} 
                    alignItems={"center"} 
                    justifyContent={"center"} 
                    background={"linear-gradient(90deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"}>
                    
                    </Flex>): (<Circle width={"22px"} height={"22px"}/>)} 
                </Box>
                <Flex ml="1em" 
                justifyContent={"space-between"} 
                w="100%">
                    <Text fontWeight={"700"} 
                    fontSize={"1.2rem"} 
                    textDecoration={isCompleted ? "line-through" : "none"} 
                    color={isCompleted? "grey" : colorMode? 'black' : 'white'}>
                        {todo.title}
                    </Text>
                </Flex>
            </Flex>
        </Flex>;
};

export default TodoItem;

//<Image src={checkIcon}/>