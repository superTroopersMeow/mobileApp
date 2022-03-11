import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';


export default function App() {

return (
    <SafeAreaView style={styles.container}>
      <Text> Hello React Native World </Text>
      <Image source={require("./assets/favicon.png")}/>
      <Image source={{
        width:200,
        height:300,
        uri:"https://picsum.photos/200/300"}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

