import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, router, Stack } from "expo-router";

export default function ModulePlayer() {
 
  const [activeTab, setActiveTab] =
    useState("Overview");

  return (
       <>
<Stack.Screen
    options={{headerShown: false}}/>

    <SafeAreaView style={styles.container}>
        <ScrollView>

      <View style={styles.header}>
        <TouchableOpacity style={styles.circle}>
             <Link href={("/module")}>
          <Ionicons
            name="chevron-back"
            size={24}
          />
          </Link>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Library
        </Text>

        <TouchableOpacity style={styles.circle}>
          <Ionicons
            name="bookmark-outline"
            size={22}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.videoSection}>
        <Text style={styles.lessonCount}>
          LESSON 8 OF 12
        </Text>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1558655146-d09347e92766",
          }}
          style={styles.video}
        />

        <TouchableOpacity
          style={styles.playBtn}
        >
          <Ionicons
            name="play"
            size={35}
            color="#3366FF"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <Text style={styles.courseTitle}>
          Effective Communication II
        </Text>

        <TouchableOpacity 
        onPress={()=>{router.push("/modulecompleted")}}
        style={styles.doneBtn}>
        <Text
            style={{
              color: "#18C29C",
              fontWeight: "700",
            }}
          >
            ✓ Mark done
          </Text>
      
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        {["Overview", "Notes", "Resources"].map(
          (tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() =>
                setActiveTab(tab)
              }
            >
              <Text
                style={{
                  color:
                    activeTab === tab
                      ? "#3366FF"
                      : "#999",
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <Text style={styles.description}>
        Learn how to listen actively,
        speak clearly, resolve conflicts
        easily and be an excellent
        communicator.
      </Text>

      <View style={styles.progressCard}>
        <Text>Lesson Progress                   8 of 12</Text>

        <View style={styles.progressBg}>
          <View
            style={[
              styles.progressFill,
              { width: "70%" },
            ]}
          />
        </View>
      </View>

      <View style={styles.bottomBtns}>
        <TouchableOpacity
          style={styles.prevBtn}
        >
          <Text>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{router.push("/modulecompleted")}}
          style={styles.nextBtn}
        >
          <Text style={{ color: "#fff" }}>
            Next Lesson
          </Text>
        </TouchableOpacity>
      </View>
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
  container:{flex:1,backgroundColor:"#fff", width:"95%", alignSelf:"center"},
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:20,
    borderRadius:20,
    marginTop:30,
  },
  circle:{
    width:30,
    height:30,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#eee",
  },
  headerTitle:{
    fontSize:18,
    fontWeight:"700",
  },
  videoSection:{
    backgroundColor:"#0f49f4",
    padding:10,
    borderRadius: 0,
    width: "95%",
    height: 260,
    alignSelf:"center",
  },
  lessonCount:{
    color:"#fff",
    marginBottom:15,
    alignSelf:"center"
  },
  video:{
    width:"100%",
    height:200,
    borderRadius:20,
  },
  playBtn:{
    position:"absolute",
    alignSelf:"center",
    top:"45%",
    backgroundColor:"#fff",
    width:50,
    height:50,
    borderRadius:40,
    justifyContent:"center",
    alignItems:"center",
  },
  info:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,
  },
  courseTitle:{
    fontSize:18,
    fontWeight:"500",
    width:"50%",
  },
  doneBtn:{
    backgroundColor:"#E8FFF7",
    padding:10,
    borderRadius:20,
  },
  tabs:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginVertical:20,
    marginTop:10,
  },
  description:{
    paddingHorizontal:20,
    color:"#666",
    lineHeight:24,
  },
  progressCard:{
    margin:10,
    padding:10,
    borderRadius:15,
    backgroundColor:"#fff",
    elevation:2,
  },
  progressBg:{
    height:7,
    backgroundColor:"#eee",
    borderRadius:10,
    marginTop:10,
  },
  progressFill:{
    height:7,
    backgroundColor:"#18C29C",
    borderRadius:10,
  },
  bottomBtns:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:20,
    marginTop:10,
  },
  prevBtn:{
    backgroundColor:"#F1F3F8",
    width:"45%",
    padding:18,
    borderRadius:15,
    alignItems:"center",
  },
  nextBtn:{
    backgroundColor:"#3366FF",
    width:"45%",
    padding:18,
    borderRadius:15,
    alignItems:"center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
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