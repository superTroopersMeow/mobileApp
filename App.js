import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableOpacity, Image, SafeAreaView, Alert, Button } from 'react-native';


export default function App() {

return (
    <SafeAreaView style={styles.container}>
      <Text> Hello React Native World </Text>
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
      <Image source={{
        width:200,
        height:300,
        uri:"https://picsum.photos/200/300"}}/>

      </TouchableOpacity>
      <Button title="Learn More" 
      onPress={() =>
        Alert.prompt("My Title","My Message", text => console.log(text))
       }
       />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

