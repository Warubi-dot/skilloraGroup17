import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import * as ImagePicker from "expo-image-picker";

interface Course {
  id: string;
  title: string;
  author: string;
  rating: string;
  image: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "Time Management",
    author: "Daniel Reyes",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
  },
  {
    id: "2",
    title: "Workplace Etiquette",
    author: "Daniel Reyes",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
  },
  {
    id: "3",
    title: "Leadership",
    author: "Sofia Li",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
  },
];

export default function HomeScreen() {
  const [profileImage, setProfileImage] = useState( "https://randomuser.me/api/portraits/women/44.jpg");
 const changeProfilePicture = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.canceled) {
  const uri = result.assets[0].uri;

  setProfileImage(uri);

}
};
 

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>Skillora</Text>
          <Text style={styles.greeting}>Hello, GenesisWorlld</Text>
          <TouchableOpacity>
            <Link href={("/(tabs)/library")}>
          <Text style={styles.subtitle}>
            Continue your learning journey
          </Text>
          </Link>
          </TouchableOpacity>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.bell}>
            <Ionicons name="notifications-outline" size={22} />
          </TouchableOpacity>
       <TouchableOpacity onPress={changeProfilePicture}>
        <Image
          source={{ 
              uri: profileImage
            }}
          style={styles.avatar}
        />
      </TouchableOpacity>
        </View>
      </View>

      <View style={styles.learningCard}>
        <TouchableOpacity>
           <Link href={("/module")}>
        <Text style={styles.cardSmallText}>
          CONTINUE LEARNING
        </Text>
        </Link>
        </TouchableOpacity>

        <Text style={styles.courseTitle}>
          Effective Communication
        </Text>

        <Text style={styles.courseInfo}>
          4 lessons left • Alex Parker
        </Text>

        <View style={styles.progressRow}>
          <Text style={styles.progressText}>
            Progress
          </Text>
          <Text style={styles.progressText}>68%</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>

        <TouchableOpacity style={styles.continueBtn}>
          <Ionicons
            name="play"
            size={20}
            color="#4F46E5"
          />
          <TouchableOpacity>
            <Link href={("/module")}>
          <Text style={styles.continueText}>
            Continue Learning
          </Text>
          </Link>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      

      <Text style={styles.learningTitle}>
        Your Learning
      </Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Feather
            name="check"
            size={22}
            color="#10B981"
          />
          <Text style={styles.statLabel}>
            Completed
          </Text>
          <Text style={styles.statValue}>12 Courses</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons
            name="flame-outline"
            size={22}
            color="#F59E0B"
          />
          <Text style={styles.statLabel}>
            Streak
          </Text>
          <Text style={styles.statValue}>12 Courses</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons
            name="triangle-outline"
            size={22}
            color="#EF4444"
          />
          <Text style={styles.statLabel}>
            Points
          </Text>
          <Text style={styles.statValue}>120 this month</Text>
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Recommended for you
        </Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
<View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <Image
              source={{ uri: course.image }}
              style={styles.courseImage}
            />

            <View style={{ padding: 10 }}>
              <Text style={styles.courseName}>
                {course.title}
              </Text>

              <Text style={styles.author}>
                {course.author}
              </Text>

              <View style={styles.ratingRow}>
                <Ionicons
                  name="star"
                  size={14}
                  color="#FBBF24"
                />
                <Text style={styles.rating}>
                  {course.rating}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    width:"95%",
    height:200,
    alignSelf: "center"
    
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0
  },

  logo: {
    fontSize: 24,
    fontWeight: "500",
  },

  greeting: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
  },

  subtitle: {
    color: "#6B7280",
    marginTop: 10,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  bell: {
    padding: 6,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 20,
    marginTop:-40,
    height: 35,
    width:35,
    
    
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 22.5,
    marginTop:-40,
  },

  learningCard: {
    marginTop: 15,
    backgroundColor: "#1E40AF",
    borderRadius: 25,
    padding: 13,
  },

  cardSmallText: {
    color: "#D1D5DB",
    letterSpacing: 1,
  },

  courseTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 5,
  },

  courseInfo: {
    color: "#D1D5DB",
    marginTop: 4,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  progressText: {
    color: "#fff",
  },

  progressBar: {
    height: 5,
    backgroundColor: "#4B5563",
    borderRadius: 10,
    marginTop: 10,
  },

  progressFill: {
    width: "68%",
    height: 5,
    backgroundColor: "#2DD4BF",
    borderRadius: 10,
  },

  continueBtn: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 10,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    marginLeft: 8,
    fontWeight: "500",
    color: "#4F46E5",
  },

  sectionHeader: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginTop:0,
  },

  seeAll: {
    color: "#2563EB",
    marginTop:0,
  },

  courseCard: {
    width: 120,
    height: 140,
    marginTop: 0,
    marginRight: 15,
    padding:-10,
    overflow:"hidden",
    borderRadius: 20,
   
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  courseImage: {
    width: "100%",
    height: 60,
  },

  courseName: {
    fontSize: 10,
    fontWeight: "500",
  },

  author: {
    color: "#6B7280",
    marginTop: 4,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },

  rating: {
    marginLeft: 5,
  },

  learningTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 5,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },

  statCard: {
    width: "31%",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 8,
    height:110,
    
    
  },

  statLabel: {
    color: "#6B7280",
    marginTop: 6,
  },

  statValue: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 3,
  },
});