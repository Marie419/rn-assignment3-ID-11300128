import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
    <ScrollView>
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
        <ScrollView horizontal Style={styles.categoryScrollBox}showsHorizontalScrollIndicator={false}>
            <View style={styles.cnt}>
              <Text style={styles.txt}>Exercise <Text style={styles.ex}>12 Tasks</Text></Text>
              <Image
              style={styles.guySitting} 
              source={require("./assets/images/guy sitting.png")}/>
            </View>

            <View style={styles.cnt}>
              <Text style={styles.txt}>Study    <Text style={styles.ex}> 12 Tasks</Text></Text>
              <Image
              style={styles.guySitting} 
              source={require("./assets/images/learning.png")}/>
            </View>

            <View style={styles.cnt}>
              <Text style={styles.txt}>Coding  <Text style={styles.ex}>  5 Project</Text></Text>
              <Image
              style={styles.guySitting} 
              source={require("./assets/images/coding.jpg")}/>
            </View>

            <View style={styles.cnt}>
              <Text style={styles.txt}>Sleep!!!!!<Text style={styles.ex}>6 hours</Text></Text>
              <Image
              style={styles.guySitting} 
              source={require("./assets/images/sleep.jpg")}/>
            </View>

            <View style={styles.cnt}>
              <Text style={styles.txt}>Visiting  <Text style={styles.ex}> 4 hours</Text></Text>
              <Image
              style={styles.guySitting} 
              source={require("./assets/images/visiting.jpg")}/>
            </View>

            <View style={styles.cnt}>
              <Text style={styles.txt}>Gaming <Text style={styles.ex}>  5 Matches</Text></Text>
              <Image
              style={styles.guySitting} 
              source={require("./assets/images/gaming.jpg")}/>
            </View>

            <View style={styles.cnt}>
              <Text style={styles.txt}>Reading<Text style={styles.ex}>  2 books</Text></Text>
              <Image
              style={styles.guySitting} 
              source={require("./assets/images/reading.jpg")}/>
            </View>

            <View style={styles.cnt}>
              <Text style={styles.txt}>Shopping<Text style={styles.ex}>3 hours</Text></Text>
              <Image
              style={styles.guySitting} 
              source={require("./assets/images/shoping.jpg")}/> 
            </View>
            </ScrollView>
        </View>

        <Text style={styles.ot}>Ongoing Task</Text>
        
        <View style={styles.verticalList}>
            <View style={styles.activity}><Text style={styles.mad}>Mobile App Development</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Web Development</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Database Management System</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Frontend Development</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Machine Learning</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>AI Development</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Data Analyses</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Cloud Computing</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Systems Administration</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Backend Development</Text></View>
            <View style={styles.activity}><Text style={styles.mad}> SQL Manipulation</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Project Management</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>DevOps</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Network Security</Text></View>
            <View style={styles.activity}><Text style={styles.mad}>Graphic Designing</Text></View>
        </View>

      </View>
      <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F0E8",
    width: 415,
    height: 2820,
    padding: 5
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
    paddingLeft: 10,
    marginHorizontal: 10,
  },
  ex: {
    fontSize: 11,
    fontWeight: "450"
  },
  txt: {
    width: 70,
    height: 40,
    top: 10,
    fontSize: 18,
    fontWeight: "bold" 
  },
  guySitting:{
    width: 145,
    height: 150,
    borderRadius: 15,
    top: 10
  },
  ot: {
    fontSize: 30,
    top: 90,
    left: 10,
    fontWeight: "bold"
  },
  verticalList: {
    width: 415,
    top: 110,
    padding: 15,
    gap: 10,
  },
  activity: {
    width: 375,
    height: 140,
    backgroundColor: "#fff",
    borderRadius: 30,
    borderWidth: 1,
    borderColor:  "#E8D1BA",
    padding: 10,
    justifyContent: "center",
  },
  mad: {
    fontSize: 22,
    fontWeight: "bold",
  }
});


