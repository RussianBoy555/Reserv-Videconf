import { Box } from '@chakra-ui/react'



const Circle = (width, height) => {
  return (
    <Box w={width} h={height} borderRadius={"50%"} style={{ border: '1px solid black' }}></Box>
  )
}

export default Circle