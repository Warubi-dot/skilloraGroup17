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
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"#fff"},
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:20
  },
  title:{fontSize:20,fontWeight:"700"},
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
    height:180,
    alignSelf:"center",
    borderRadius:20
  },
  courseTitle:{
    fontSize:22,
    fontWeight:"700",
    marginTop:20,
    marginHorizontal:20
  },
  author:{
    marginHorizontal:20,
    color:"#777",
    marginTop:8
  },
  stats:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginVertical:20
  },
  progressCard:{
    margin:20,
    padding:20,
    borderRadius:20,
    backgroundColor:"#fff",
    elevation:2
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  progressBg:{
    height:10,
    backgroundColor:"#eee",
    borderRadius:10,
    marginTop:15
  },
  progressFill:{
    height:10,
    backgroundColor:"#18C29C",
    borderRadius:10
  },
  lessonContainer:{
    marginHorizontal:20
  },
  sectionTitle:{
    fontSize:22,
    fontWeight:"700",
    marginBottom:15
  },
  lessonCard:{
    flexDirection:"row",
    gap:15,
    padding:20,
    borderWidth:1,
    borderColor:"#eee"
  },
  lessonTitle:{
    fontSize:18,
    fontWeight:"600"
  },
  duration:{
    color:"#777"
  },
  button:{
    backgroundColor:"#3366FF",
    margin:20,
    padding:18,
    borderRadius:15
  },
  buttonText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"700",
    fontSize:18
  }
});