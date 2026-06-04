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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/context/AuthContext";
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

export default function Home() {
  const {user} = useAuth();
  const [profileImage, setProfileImage] = useState(
  "https://randomuser.me/api/portraits/women/44.jpg");

  useEffect(() => {
  const loadImage = async () => {
    const savedImage = await AsyncStorage.getItem(
      "profileImage"
    );

    if (savedImage) {
      setProfileImage(savedImage);
    }
  };

  loadImage();
}, []);


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

  await AsyncStorage.setItem(
    "profileImage_${user.email}",
    uri
  );
}
};
 const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const storedUser =
      await AsyncStorage.getItem("currentUser");

    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  };

  return (
    // <SafeAreaView>
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={true}

    >
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>Skillora</Text>
          <Text style={styles.greeting}>Hello, {currentUser?.name}</Text>
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

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Recommended for you
        </Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

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
          <Text style={styles.statValue}>12</Text>
          <Text>courses</Text>
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
          <Text style={styles.statValue}>4h</Text>
          <Text>this week</Text>
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
          <Text style={styles.statValue}>120</Text>
          <Text>this month</Text>
        </View>
      </View>
    </ScrollView>
    // {/* </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },

  logo: {
    fontSize: 32,
    fontWeight: "700",
  },

  greeting: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
  },

  subtitle: {
    color: "#6B7280",
    marginTop: 5,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  bell: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 50,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 22.5,
  },

  learningCard: {
    marginTop: 25,
    backgroundColor: "#1E40AF",
    borderRadius: 25,
    padding: 20,
  },

  cardSmallText: {
    color: "#D1D5DB",
    letterSpacing: 2,
  },

  courseTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
  },

  courseInfo: {
    color: "#D1D5DB",
    marginTop: 5,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  progressText: {
    color: "#fff",
  },

  progressBar: {
    height: 8,
    backgroundColor: "#4B5563",
    borderRadius: 10,
    marginTop: 10,
  },

  progressFill: {
    width: "68%",
    height: 8,
    backgroundColor: "#2DD4BF",
    borderRadius: 10,
  },

  continueBtn: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 15,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    marginLeft: 8,
    fontWeight: "600",
    color: "#4F46E5",
  },

  sectionHeader: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  seeAll: {
    color: "#2563EB",
  },

  courseCard: {
    width: 220,
    marginTop: 15,
    marginRight: 15,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  courseImage: {
    width: "100%",
    height: 120,
  },

  courseName: {
    fontSize: 16,
    fontWeight: "600",
  },

  author: {
    color: "#6B7280",
    marginTop: 4,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  rating: {
    marginLeft: 5,
  },

  learningTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 25,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 40,
  },

  statCard: {
    width: "31%",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 12,
  },

  statLabel: {
    color: "#6B7280",
    marginTop: 8,
  },

  statValue: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 10,
  },
});