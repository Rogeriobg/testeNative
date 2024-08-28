import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function App() {

  const [number, setNumber] = useState(0);

function increment() {
  return setNumber(number + 1);
}

  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>Olá mundão 22</Text>
      <StatusBar style="dark" />

      <TouchableOpacity onPress={increment} style={styles.button} >
      <Text style={styles.text}>add +</Text>
      </TouchableOpacity>

 <Text style={styles.text}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: { color: "black", fontSize:20, margin: 20 },
  button:{
    backgroundColor:"red",
    padding: 20,

  }

});
