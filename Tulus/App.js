import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Hello, Devs</Text>
          <Image 
          style={styles.profilePic}
          source={require('./assets/images/profile.png')} />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F0E8",
    width: 400,
    height: 852,
  },
  text: {
    fontSize: 32,
  },
  profilePic: {
    
  }
});
