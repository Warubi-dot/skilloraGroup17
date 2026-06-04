import { router, Stack } from "expo-router";
import React, { useState } from "react";
import {
    SafeAreaView,
    SafeAreaViewBase,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { quizData } from "../data/quizData";

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const question = quizData[currentQuestion];

  const handleSelect = (index: number) => {
    const updated = [...answers];
    updated[currentQuestion] = index;
    setAnswers(updated);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = () => {
    router.push({
      pathname: "/quiz/review",
      params: {
        answers: JSON.stringify(answers),
      },
    });
  };

  return (
       <>
<Stack.Screen
    options={{headerShown: false}}/>
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Quiz</Text>

      <View style={styles.questionCard}>
        <Text style={styles.questionCount}>
          QUESTION {currentQuestion + 1} OF {quizData.length}
        </Text>

        <Text style={styles.question}>
          {question.question}
        </Text>
      </View>

      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            answers[currentQuestion] === index &&
              styles.selectedOption,
          ]}
          onPress={() => handleSelect(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.prevButton}
          onPress={prevQuestion}
        >
          <Text>Previous</Text>
        </TouchableOpacity>

        {currentQuestion === quizData.length - 1 ? (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={submitQuiz}
          >
            <Text style={styles.buttonText}>
              Submit
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={nextQuestion}
          >
            <Text style={styles.buttonText}>
              Next
            </Text>
          </TouchableOpacity>
        )}
      </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 80,
    textAlign: "center",
  },

  questionCard: {
    backgroundColor: "#335CFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
  },

  questionCount: {
    color: "#ddd",
    marginBottom: 10,
    fontWeight: "600",
  },

  question: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },

  option: {
    backgroundColor: "#EEF2F7",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  selectedOption: {
    borderWidth: 2,
    borderColor: "#335CFF",
  },

  optionText: {
    fontSize: 16,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "auto",
  },

  prevButton: {
    backgroundColor: "#EEF2F7",
    width: "45%",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  nextButton: {
    backgroundColor: "#335CFF",
    width: "45%",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  submitButton: {
    backgroundColor: "#1ABC9C",
    width: "45%",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});