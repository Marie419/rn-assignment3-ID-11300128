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
        
        <Text style={styles.cat}>Categories</Text>

        <View style={styles.horizontalList}>
            <View style={styles.cnt}>
              <Text style={styles.txt}>Exercise <Text style={styles.ex}>12 Tasks</Text></Text>
              <Image
              style={styles.guySitting} 
              source={require("./assets/images/guy sitting.png")}/>
            </View>

            <View style={styles.cnt}>
              <Text style={styles.txt}>Study    <Text style={styles.ex}>12 Tasks</Text></Text>
              <Image
              style={styles.guySitting} 
              source={require("./assets/images/learning.png")}/>
            </View>
        </View>

        <View style={styles.verticalList}>
          
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
  },
  cat: {
    fontSize: 30,
    top: 40,
    left: 10,
    fontWeight: "bold"
  },
  horizontalList: {
   left: 10,
    top: 60,
    flexDirection: "row",
    gap: 20
  },
  cnt: {
    backgroundColor: "white",
    width: 186,
    height: 200,
    borderRadius: 20,
    paddingLeft: 10
  },
  ex: {
    fontSize: 11,
    fontWeight: "450"
  },
  txt: {
    width: 62,
    height: 40,
    top: 10,
    fontSize: 18,
    fontWeight: "bold" 
  },
  guySitting:{
    width: 151,
    height: 156,
  },
});


