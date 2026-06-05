import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { quizData } from "../data/quizData";
import { Ionicons } from "@expo/vector-icons";

export default function ResultScreen() {
  const { answers } = useLocalSearchParams();

  const selectedAnswers = answers
    ? JSON.parse(answers as string)
    : [];

  const [reflection, setReflection] = useState("");

  let score = 0;

  quizData.forEach((question, index) => {
    if (
      selectedAnswers[index] ===
      question.correctAnswer
    ) {
      score++;
    }
  });

  return (
    <>
      <Stack.Screen
        options={{ headerShown: false }}
      />

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff", width:"90%", alignSelf:"center", padding:5
        }}
        contentContainerStyle={{
          padding: 10,
          paddingBottom: 20,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "#E5E7EB",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
              }}
            >
              ‹
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            Quiz
          </Text>
        </View>

        {/* Score */}
        <Text
          style={{
            fontSize: 30,
            fontWeight: "500",
            color: "#335CFF",
            lineHeight: 55,
            marginBottom: 10,
          }}
        >
          Good Effort! You{"\n"}scored {score}/
          {quizData.length}.
        </Text>

        {/* Reflection Card */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 25,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Share Your Reflection
          </Text>

          <Text
            style={{
              color: "#6B7280",
              marginTop: 5,
              marginBottom: 1,
              fontSize: 12,
            }}
          >
            How will you apply what you
            learned in your daily work?
          </Text>

          <TextInput
            multiline
            value={reflection}
            onChangeText={setReflection}
            maxLength={500}
            placeholder="Type Here..."
            style={{
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 18,
              height: 150,
              padding: 10,
              textAlignVertical: "top",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent:
                "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "#9CA3AF",
              }}
            >
              Optional but encouraged
            </Text>

            <Text
              style={{
                color: "#9CA3AF",
              }}
            >
              {reflection.length}/500
            </Text>
          </View>
        </View>

        {/* Submit Reflection */}
        <TouchableOpacity
          onPress={() =>
            router.push("/quiz/formsubmitted")
          }
          style={{
            backgroundColor: "#18C29C",
            padding: 15,
            borderRadius: 15,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 14,
              fontWeight: "700",
            }}
          >
            Submit Reflection
          </Text>
        </TouchableOpacity>

        {/* Key Takeaways */}
        <View
          style={{
            backgroundColor: "#EEFDF8",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              marginBottom: 10,
            }}
          >
            Key Takeaways
          </Text>

          <Text
            style={{
              marginBottom: 12,
              fontSize: 13,
            }}
          >
            ✅ Active listening builds
            trust and understanding
          </Text>

          <Text
            style={{
              marginBottom: 12,
              fontSize: 13,
            }}
          >
            ✅ Non-verbal cues communicate
            as much as words
          </Text>

          <Text
            style={{
              fontSize: 13,
            }}
          >
            ✅ Assertive communication
            respects all parties
          </Text>
        </View>

        {/* Retry Quiz */}
        <TouchableOpacity
          onPress={() =>
            router.replace("/quiz")
          }
          style={{
            backgroundColor: "#335CFF",
            padding: 15,
            borderRadius: 18,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Retry Quiz
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