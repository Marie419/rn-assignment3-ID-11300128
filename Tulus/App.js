import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.header}>
            <Text style={styles.text}>Hello, Devs</Text>
            <Image
              style={styles.profilePic}
              source={require("./assets/images/profile.png")}
            />
          </View>
          <View style={styles.smallText}>
            <Text>14 tasks today</Text>
          </View>
        </View>
        <View style={styles.searchFilter}>
          <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require("./assets/images/searchicon.png")}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#808080"
            onChangeText={(text) => {
              
            }}
          />
        </View>
        <View style={styles.filter}>
          <TouchableOpacity style={styles.filterButton} onPress={() => {}}>
          <Image
            style={styles.filterIcon}
            source={require("./assets/images/filter.png")}
          />
        </TouchableOpacity></View>
        </View>
        

      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F0E8",
    width: 415,
    height: 852,
  },
  headerRow: {
    flexDirection: "column",
    left: 10,
  },
  header: {
    flexDirection: "row",
    top: 20,
    gap: 170,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "times new roman",
  },
  profilePic: {
    height: 45,
    width: 50,
    borderRadius: 20,
    backgroundColor: "#FFF",
  },
  smallText: {
    top: 15,
    fontSize: 14,
    left: 5,
  },
  searchFilter:{
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    gap: 20
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingHorizontal: 12,
    height: 55,
    width: 300
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  filterIcon: {
    width: 64,
    height: 55,
    borderRadius: 24
  }
});


