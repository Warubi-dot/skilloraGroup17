import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";

export default function ModuleCompleted() {
  return (
       <>
<Stack.Screen
    options={{headerShown: false}}/>
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
      onPress={()=>{router.push("/moduleplayer")}}
      style={styles.backBtn}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="#000"
        />
      </TouchableOpacity>

      <View style={styles.content}>
        {/* Check Icon */}
        <View style={styles.iconContainer}>
          <Ionicons
            name="checkmark"
            size={70}
            color="#fff"
          />
        </View>

        <Text style={styles.title}>
          Module Completed
        </Text>

        <Text style={styles.description}>
          Nice work! You just earned 45 points.
          Get more by taking the quiz.
        </Text>

        {/* Buttons */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.lessonBtn}
            onPress={() =>
              router.push("/module")
            }
          >
            <Text style={styles.lessonText}>
              Next Module
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quizBtn}
            onPress={() =>
              router.push("/quiz")
            }
          >
            <Text style={styles.quizText}>
              Start Quiz
            </Text>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#fff"
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
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  backBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#3366FF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#3366FF",
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    marginTop: 25,
  },

  description: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
    lineHeight: 26,
    marginTop: 15,
    marginBottom: 50,
  },

  buttonWrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 25,
    elevation: 4,
    width: "100%",
  },

  lessonBtn: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginRight: 8,
  },

  lessonText: {
    fontWeight: "600",
    fontSize: 16,
  },

  quizBtn: {
    flex: 1,
    backgroundColor: "#3366FF",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },

  quizText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
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