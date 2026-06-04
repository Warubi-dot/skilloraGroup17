import { router, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { quizData } from "../data/quizData";

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
          fontSize: 22,
          fontWeight: "700",
          marginBottom: 20,
          alignSelf:"center"
        }}
      >
        Review Answers
      </Text>

      {quizData.map((question, qIndex) => (
        <View key={question.id}>
          <Text
            style={{
              backgroundColor: "#335CFF",
              color: "#fff",
              padding: 20,
              borderRadius: 15,
              marginBottom: 15,
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
                      ? "#a5beef"
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
    </>
  );
}
