import React, { useEffect, useState } from "react";
import { View, Text,ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { getModule } from "../app/Services/moduleStore";
import { getModuleWithLessons } from "../app/Services/modulesApi";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { setLesson } from "../app/Services/lessonStore";


export default function ModuleScreen() {
  const module = getModule();
  console.log(module);
  const [lessons, setLessons] = useState<any[]>([]);

  useEffect(() => {
  fetchLessons();
}, []);

const fetchLessons = async () => {
  try {
    console.log("MODULE:", module);
    console.log("MODULE ID:", module?._id);

    if (!module?._id) {
      return;
    }

    const response = await getModuleWithLessons(
      module._id
    );
setLessons(response.data.moduleLessons);
   console.log(
  "MODULE LESSONS:",
  JSON.stringify(
    response.data.moduleLessons,
    null,
    2
  )
);
  } catch (error) {
    console.log(error);
  }
};
console.log("LESSONS:", lessons)
 return (

  <>
    <Stack.Screen options={{ headerShown: false }} />

    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={24} />
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

        {/* Banner */}
        <View>

          <View style={styles.playOverlay}>
            <Ionicons
              name="play"
              size={40}
              color="#3366FF"
            />
          </View>
        </View>

        {/* Module Details */}
        <Text style={styles.courseTitle}>
          {module?.title}
        </Text>

        <Text style={styles.author}>
          {module?.description}
        </Text>

        <View style={styles.stats}>
          <Text>⭐ 4.9</Text>
          <Text>👥 12,480</Text>
          <Text>⏱ {module?.duration || 0} mins</Text>
        </View>

        {/* Progress */}
        <View style={styles.progressCard}>
          <View style={styles.row}>
            <Text>Your Progress</Text>

            <Text>
              {lessons.length}/{lessons.length} lessons
            </Text>
          </View>

          <View style={styles.progressBg}>
            <View
              style={[
                styles.progressFill,
                { width: "100%" },
              ]}
            />
          </View>
        </View>

        {/* Course Content */}
        <View style={styles.lessonContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <Text style={styles.sectionTitle}>
              Course Content
            </Text>

            <Text
              style={{
                color: "#6B7280",
              }}
            >
              {lessons.length} lessons
            </Text>
          </View>

          {lessons.map((lesson, index) => (
            <TouchableOpacity
              key={lesson._id}
              style={styles.lessonCard}
              onPress={() => {
              setLesson(
                lesson,
                lessons,
                index
              );

              router.push("/moduleplayer");
            }}
            >
              <Ionicons
                name="checkmark-circle"
                size={32}
                color="#18C29C"
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.lessonTitle}>
                  {lesson.title}
                </Text>

                <Text style={styles.duration}>
                  {lesson.duration} min
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Continue Learning */}
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

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => router.push("/Home")}
          style={styles.navItem}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color="#9CA3AF"
          />
          <Text style={styles.navText}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/library")}
          style={styles.navItem}
        >
          <Ionicons
            name="book-outline"
            size={24}
            color="#2563EB"
          />
          <Text style={styles.activeNavText}>
            Library
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/awards")}
          style={styles.navItem}
        >
          <Ionicons
            name="trophy-outline"
            size={24}
            color="#9CA3AF"
          />
          <Text style={styles.navText}>
            Awards
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/profile")}
          style={styles.navItem}
        >
          <Ionicons
            name="person-outline"
            size={24}
            color="#9CA3AF"
          />
          <Text style={styles.navText}>
            Profile
          </Text>
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
  playOverlay: {
  position: "absolute",
  top: "40%",
  left: "45%",
  backgroundColor: "rgba(255,255,255,0.9)",
  width: 70,
  height: 70,
  borderRadius: 35,
  justifyContent: "center",
  alignItems: "center",
},

button: {
  backgroundColor: "#3366FF",
  margin: 20,
  padding: 16,
  borderRadius: 16,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
},

buttonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "600",
},
})