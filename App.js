import { useState } from "react";
import { Text , TouchableOpacity} from "react-native";
import {VStack, HStack, Flex} from "react-native-flex-layout"


function Box ({ value, onPress,disabled, highlighted }){
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
        <Flex w={74} h={74} center style={{backgroundColor:highlighted ? "lightgreen":"lightgray"}} >
          <Text style={{ fontSize: 56}}>{value}</Text>
        </Flex>
    </TouchableOpacity>
  )
}


function App(){
  
  const[currentPlayer, setCurrentPlayer] = useState("X");

  const[board, setBoard] = useState(Array(9).fill(null));

  const[highlighted, setHighlighted] = useState([]);

  const[winner, setWinner] = useState (null);

  const handlePress = (index) => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer((prev) => (prev === "X" ? "0" : "X" ));

  };

  const getBox = (index) => (
    <Box 
    value={board[index]}
    onPress={() => handlePress(index)}
    highlighted={highlighted.includes(index)}
    disabled={winner || board[index]}
  />
  
  )

  return (
    <VStack fill center spacing={2}>
      <Text style={{ fontSize:36}}>{currentPlayer} to Play </Text>
      <HStack spacing={2} shouldWrapChildren>
       
      </HStack>   
      <HStack spacing={2} shouldWrapChildren>
      
      </HStack>   
      <HStack spacing={2} shouldWrapChildren>
      
      </HStack>

    </VStack>
  )
}
export default App;