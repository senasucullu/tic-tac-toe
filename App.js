import { useState } from "react";
import { Text , TouchableOpacity} from "react-native";
import {VStack, HStack, Flex} from "react-native-flex-layout"


function Box ({ value, onPress, highlighted }){
  return (
    <TouchableOpacity onPress={onPress}>
        <Flex w={74} h={74} center style={{backgroundColor:highlighted ? "lightgreen":"lightgray"}} >
          <Text style={{ fontSize: 56}}>{value}</Text>
        </Flex>
    </TouchableOpacity>
  )
}


function App(){
  
  const[currentPlayer, setCurrentPlayer] = useState("X");

  const[board, setBoard] = useState(Array(9).fill(null));

  return (
    <VStack fill center spacing={2}>
      <HStack spacing={2} shouldWrapChildren>
        <Box value="x" highlighted/>
        <Box />
        <Box />
      </HStack>   
      <HStack spacing={2} shouldWrapChildren>
      <Box />
      <Box />
      <Box />
      </HStack>   
      <HStack spacing={2} shouldWrapChildren>
      <Box />
      <Box />
      <Box />
      </HStack>

    </VStack>
  )
}
export default App;