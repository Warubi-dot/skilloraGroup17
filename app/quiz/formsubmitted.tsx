import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

export default function FormSubmitted() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{ headerShown: false }}
      />
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Success Content */}
      <View style={styles.content}>
        <View style={styles.checkCircle}>
          <Ionicons name="checkmark" size={70} color="#fff" />
        </View>

        <Text style={styles.title}>Form Submitted</Text>
        <Text style={styles.subtitle}>
          You are set to be the best!!
        </Text>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={()=>{router.push("/(tabs)/awards")}}
          style={styles.awardButton}>
            <Text style={styles.awardText}>Check Award</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>{router.push("/library")}}
          style={styles.lessonButton}>
            <Text style={styles.lessonText}>Next Lesson</Text>
            <Feather
              name="chevron-right"
              size={18}
              color="#fff"
              style={{ marginLeft: 6 }}
            />
          </TouchableOpacity>
        </View>
      </View>

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
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 20,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  checkCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#000",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
    marginBottom: 40,
  },

  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 8,
    elevation: 3,
  },

  awardButton: {
    backgroundColor: "#F1F5F9",
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 18,
    marginRight: 10,
  },

  awardText: {
    fontSize: 16,
    fontWeight: "500",
  },

  lessonButton: {
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 18,
  },

  lessonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
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