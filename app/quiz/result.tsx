import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { quizData } from "../data/quizData";

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
          backgroundColor: "#fff",
        }}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 40,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 30,
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
                fontSize: 24,
                fontWeight: "600",
              }}
            >
              ‹
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
            }}
          >
            Quiz
          </Text>
        </View>

        {/* Score */}
        <Text
          style={{
            fontSize: 40,
            fontWeight: "700",
            color: "#335CFF",
            lineHeight: 55,
            marginBottom: 25,
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
            padding: 18,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            Share Your Reflection
          </Text>

          <Text
            style={{
              color: "#6B7280",
              marginTop: 5,
              marginBottom: 15,
              fontSize: 15,
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
            placeholder="I learned that active listening means..."
            style={{
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 18,
              height: 180,
              padding: 15,
              textAlignVertical: "top",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent:
                "space-between",
              marginTop: 10,
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
            padding: 18,
            borderRadius: 15,
            marginTop: 20,
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
            Submit Reflection
          </Text>
        </TouchableOpacity>

        {/* Key Takeaways */}
        <View
          style={{
            backgroundColor: "#EEFDF8",
            padding: 20,
            borderRadius: 20,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              marginBottom: 20,
            }}
          >
            Key Takeaways
          </Text>

          <Text
            style={{
              marginBottom: 12,
              fontSize: 16,
            }}
          >
            ✅ Active listening builds
            trust and understanding
          </Text>

          <Text
            style={{
              marginBottom: 12,
              fontSize: 16,
            }}
          >
            ✅ Non-verbal cues communicate
            as much as words
          </Text>

          <Text
            style={{
              fontSize: 16,
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
            padding: 20,
            borderRadius: 18,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Retry Quiz
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}