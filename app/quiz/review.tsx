import { router, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { quizData } from "../data/quizData";
import { Ionicons } from "@expo/vector-icons";

export default function ReviewScreen() {
  const { answers } = useLocalSearchParams();

  const selectedAnswers = JSON.parse(
    answers as string
  );

  return (
       <>
<Stack.Screen
    options={{headerShown: false}}/>
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginBottom: -30,
          alignSelf:"center",
          marginTop:40,
        }}
      >
        Review Answers
      </Text>

      {quizData.map((question, qIndex) => (
        <View key={question.id}>
          <Text
            style={{
              backgroundColor: "#3f42f3",
              color: "#fff",
              padding: 20,
              borderRadius: 15,
              marginBottom: 15,
              marginTop:70,
            }}
          >
            {question.question}
          </Text>

          {question.options.map(
            (option, optionIndex) => (
              <View
                key={optionIndex}
                style={{
                  backgroundColor:
                    selectedAnswers[qIndex] ===
                    optionIndex
                      ? "#cfddf7"
                      : "#f1f5f9",
                  padding: 15,
                  borderRadius: 30,
                  marginBottom: 5,
                }}
              >
                <Text>{option}</Text>
              </View>
            )
          )}
        </View>
      ))}

      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "/quiz/result",
            params: {
              answers:
                JSON.stringify(selectedAnswers),
            },
          });
        }}
        style={{
          backgroundColor: "#335CFF",
          padding: 18,
          borderRadius: 15,
          marginVertical: 30,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Finish Quiz
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
    </>
  );
}



const styles = StyleSheet.create({
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
})