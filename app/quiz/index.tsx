import {Stack, useRouter } from "expo-router";
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
import { Ionicons } from "@expo/vector-icons";

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
  let score = 0;

  quizData.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      score++;
    }
  });

  router.push({
    pathname: "/quiz/review",
    params: {
      answers: JSON.stringify(answers),
      score: String(score),
    },
  });
};
const router = useRouter();
  return (
       <>
<Stack.Screen
    options={{headerShown: false}}/>
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Quiz</Text>

      <View style={styles.questionCard}>
        <View style={styles.questionBadge}>
  <Text style={styles.questionBadgeText}>
    {currentQuestion + 1}
  </Text>
</View>
        <Text style={styles.questionCount}>
          QUESTION {currentQuestion + 1} OF {quizData.length}
        </Text>

        <Text style={styles.question}>
          {question.question}
        </Text>
      </View>
      <View style={styles.progressContainer}>
  <View
    style={[
      styles.progressFillBar,
      {
        width: `${
          ((currentQuestion + 1) /
            quizData.length) *
          100
        }%`,
      },
    ]}
  />
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
              disabled={
                answers[currentQuestion] === undefined
              }
              style={[
                styles.nextButton,
                answers[currentQuestion] === undefined && {
                  opacity: 0.5,
                },
              ]}
              onPress={nextQuestion}
            >
            <Text style={styles.buttonText}>
              Next
            </Text>
          </TouchableOpacity>
        )}
       
      </View>
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
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 40,
    textAlign: "center",
  },

  questionCard: {
    backgroundColor: "#3f42f3",
    borderRadius: 20,
    padding: 5,
    marginBottom: 25,
    height:150,
  },

  questionCount: {
    color: "#ddd",
    marginBottom: 10,
    fontWeight: "600",
  },

  question: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },

  option: {
    backgroundColor: "#EEF2F7",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  selectedOption: {
  borderWidth: 2,
  borderColor: "#335CFF",
  backgroundColor: "#EEF4FF",
},

  optionText: {
    fontSize: 14,
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
    marginTop:90,
  },

  nextButton: {
    backgroundColor: "#335CFF",
    width: "45%",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
     marginTop:90,
  },

  submitButton: {
    backgroundColor: "#1ABC9C",
    width: "45%",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
     marginTop:90, 
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",

  },
   bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom:20
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
  progressContainer: {
  height: 8,
  backgroundColor: "#E5E7EB",
  borderRadius: 20,
  marginBottom: 20,
},

progressFillBar: {
  height: 8,
  backgroundColor: "#335CFF",
  borderRadius: 20,
},
questionBadge: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 10,
},

questionBadgeText: {
  color: "#335CFF",
  fontWeight: "700",
  fontSize: 16,
},
});