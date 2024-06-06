import { useEffect, useState } from "react"
import { Box} from "@chakra-ui/react"


import lightBackgroundImage from './assets/bg-desktop-light.jpg'
import darkBackgroundImage from './assets/bg-desktop-dark.jpg'
import Header from "./components/Header"
import InputButton from "./components/InputButton"
import { v4 } from "uuid"
import { addJson, fetchTodo } from "./actions"
import { TodoList } from "./components/TodoList"


export function Todo() {
    //const { colorMode, toggleColorMode } = useColorMode()
    const [ colorMode,  setColorMode ] = useState(true)
    
    const [todo, setTodo] = useState([])
    
    //Funcion para agregar a la lista
    const hendleAddTodo = (e) => {
        if (e.keyCode === 13){
            const newTodo = {
                id: v4(),
                title: todo,
                isCompleted: false,
            };

            setTodo(...todo, newTodo);
            localStorage.setItem("todo", JSON.stringify(...todo, newTodo));
            addJson(newTodo);
        }
    };

    useEffect(() => {
        fetchTodo().then((data) => setTodo (data));
    }, []);

    //Alternar Modo Claro/Oscuro
    const toggleColorMode = () => {
        setColorMode(!colorMode)
    }
    return (
        <>
            <Box 
                backgroundImage={
                    colorMode   ? 
                    lightBackgroundImage
                    :   darkBackgroundImage
                }
                backgroundSize={"cover"}
                h={"40vh"}
            >
                <Box w="40%" p="4em 0" m="auto">
                    <Header colorMode={colorMode} 
                    toggleColorMode={toggleColorMode} 
                    
                    />
                    <InputButton colorMode={colorMode}
                    todo={todo} 
                    setTodo={setTodo} 
                    addTodo={hendleAddTodo}
                    />
                    
                </Box>
            </Box>
            <Box h={"60vh"}
            backgroundSize={"cover"}
            background={'#242424'}
            position={"relative"}
            >
                <Box w={"0%"}
                position={"absolute"}
                top={"-10"}
                left={{ lg: "28em", md: "15.2em", base: "11.2em"}}                
                borderRadius={"5px"}
                background={colorMode?
                    "white" : "ffff"}
                >
                    <TodoList todo={todo} colorMode={colorMode} />
                    
                </Box>
            </Box>
        </>
    );
}

export default Todo;