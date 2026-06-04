import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, Stack } from "expo-router";

export default function RegisterScreen() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {


    try {
      if (!name || !email || !password) {
        Alert.alert("Error", "Fill all fields");
        return;
      }

      const existingUsers = await AsyncStorage.getItem("users");

      const users = existingUsers
        ? JSON.parse(existingUsers)
        : [];

      const userExists = users.find(
        (user: any) => user.email === email
      );

      if (userExists) {
        Alert.alert("Error", "Email already exists");
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
      };

      users.push(newUser);

      await AsyncStorage.setItem(
        "users",
        JSON.stringify(users)
      );

    Alert.alert("Success", "Registration successful");

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <>
<Stack.Screen
    options={{headerShown: false}}/>


    <SafeAreaView style={styles.container}>
      
    <View style={styles.container}>
        <View>
 <Image
          source={require("../assets/images/skillora-logo.png")}
          style={styles.logo}
        />
        </View>
<View style={styles.inputContainer}>
      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
</View>
<View style={styles.inputContainer}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />
</View>
<View style={styles.inputContainer}>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
</View>
      <TouchableOpacity
        style={styles.button}
        
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signin}>
                 <Link href={("/Loginpage")}>
                <Text style={styles.signin}>Go to  Login</Text>
                </Link>
             </TouchableOpacity>

      {/* Footer */}
            <Text style={styles.footer}>
              Secured By TechCrush Group 17.
            </Text>
    </View>

    
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 20,
    padding: 40,
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginLeft: 70,
    marginBottom:50,

  },

  logoText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "600",
    color: "#2563EB",
  },

  content: {
    marginTop: -10,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#A1A1AA",
    marginBottom: 40,
  },

  inputContainer: {
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#000",
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#D4D4D8",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },

  forgotPassword: {
    alignSelf: "flex-end",
    color: "#2563EB",
    fontSize: 15,
    marginBottom: 35,
    fontWeight: "500",
  },

  button: {
    backgroundColor: "#2563EB",
    height: 58,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  footer: {
    textAlign: "center",
    color: "#C4C4C4",
    fontSize: 13,
    // marginBottom: 30,
    marginTop: 150,
  },
  signin: {
    alignSelf: "flex-end",
    color: "#2563EB",
    fontSize: 15,
    marginBottom: 80,
    fontWeight: "500",
    marginLeft: 30,

 },
});