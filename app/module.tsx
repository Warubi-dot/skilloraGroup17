import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, router, Stack } from "expo-router";

export default function Module() {
  return (
       <>
<Stack.Screen
    options={{headerShown: false}}/>

    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn}>
            <Link href={("/(tabs)/library")}>
            <Ionicons name="chevron-back" size={24} />
            </Link>
          </TouchableOpacity>

          <Text style={styles.title}>
            In Progress
          </Text>

          <TouchableOpacity>
            <Ionicons
              name="ellipsis-horizontal"
              size={24}
            />
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1558655146-d09347e92766",
          }}
          style={styles.banner}
        />

        <Text style={styles.courseTitle}>
          Effective Communication II
        </Text>

        <Text style={styles.author}>
          By Alex Parker · Lead Strategist
        </Text>

        <View style={styles.stats}>
          <Text>⭐ 4.9</Text>
          <Text>👥 12,480</Text>
          <Text>⏱ 18 lessons</Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.row}>
            <Text>Your Progress</Text>
            <Text>8 / 12 lessons</Text>
          </View>

          <View style={styles.progressBg}>
            <View
              style={[
                styles.progressFill,
                { width: "70%" },
              ]}
            />
          </View>
        </View>

        <View style={styles.lessonContainer}>
          <Text style={styles.sectionTitle}>
            Course Content
          </Text>

          <View style={styles.lessonCard}>
            <Ionicons
              name="checkmark-circle"
              size={28}
              color="#18C29C"
            />

            <View>
              <Text style={styles.lessonTitle}>
                Intro to Communication
              </Text>

              <Text style={styles.duration}>
                10 min
              </Text>
            </View>
          </View>

          <View style={styles.lessonCard}>
            <Ionicons
              name="checkmark-circle"
              size={28}
              color="#18C29C"
            />

            <View>
              <Text style={styles.lessonTitle}>
                How to Speak
              </Text>

              <Text style={styles.duration}>
                10 min
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.push("/moduleplayer")
          }
        >
          <Text style={styles.buttonText}>
            Continue Learning
          </Text>
        </TouchableOpacity>

      </ScrollView>
       {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
              <TouchableOpacity
              onPress={()=>{router.push("/Home")}} style={styles.navItem}>
                <Ionicons name="home-outline" size={24} color="#9CA3AF" />
                <Text style={styles.navText}>Home</Text>
              </TouchableOpacity>
      
              <TouchableOpacity
              onPress={()=>{router.push("/library")}} style={styles.navItem}>
                <Ionicons name="book-outline" size={24} color="#2563EB" />
                <Text style={styles.activeNavText}>Library</Text>
              </TouchableOpacity>
      
              <TouchableOpacity
              onPress={()=>{router.push("/awards")}} style={styles.navItem}>
                <Ionicons name="trophy-outline" size={24} color="#9CA3AF" />
                <Text style={styles.navText}>Awards</Text>
              </TouchableOpacity>
      
              <TouchableOpacity
              onPress={()=>{router.push("/profile")}} style={styles.navItem}>
                <Ionicons name="person-outline" size={24} color="#9CA3AF" />
                <Text style={styles.navText}>Profile</Text>
              </TouchableOpacity>
            </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"#fff", width:"90%", alignSelf:"center"},
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10,
    marginTop:40,
    
  },
  title:{fontSize:18,fontWeight:"700"},
  iconBtn:{
    width:45,
    height:45,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#eee"
  },
  banner:{
    width:"90%",
    height:150,
    alignSelf:"center",
    borderRadius:20
  },
  courseTitle:{
    fontSize:16,
    fontWeight:"700",
    marginTop:15,
    marginHorizontal:20
  },
  author:{
    marginHorizontal:20,
    color:"#777",
    marginTop:8,
    fontSize:12,
  },
  stats:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginVertical:20
  },
  progressCard:{
    margin:20,
    padding:10,
    borderRadius:20,
    backgroundColor:"#fff",
    elevation:3,
    marginTop:0
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  progressBg:{
    height:7,
    backgroundColor:"#eee",
    borderRadius:10,
    marginTop:15
  },
  progressFill:{
    height:7,
    backgroundColor:"#18C29C",
    borderRadius:10
  },
  lessonContainer:{
    marginHorizontal:20
  },
  sectionTitle:{
    fontSize:18,
    fontWeight:"500",
    marginBottom:4
  },
  lessonCard:{
    flexDirection:"row",
    gap:15,
    padding:15,
    borderWidth:1,
    borderColor:"#eee",
    borderRadius: 10,
  },
  lessonTitle:{
    fontSize:16,
    fontWeight:"600"
  },
  duration:{
    color:"#777"
  },
  button:{
    backgroundColor:"#3366FF",
    margin:20,
    padding:15,
    borderRadius:15
  },
  buttonText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"500",
    fontSize:18
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 18,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    marginTop: 4,
    color: "#9CA3AF",
    fontSize: 12,
  },

  activeNavText: {
    marginTop: 4,
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "600",
  },
});