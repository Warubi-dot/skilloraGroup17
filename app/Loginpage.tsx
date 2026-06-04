import { Link, Stack, useRouter } from "expo-router";

import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView,Image, ScrollView, Alert,} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";





export default function Loginpage() {
  // const{setUser}= useAuth();
  // const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  
    // const handleLogin = async () => {
    //   try {
    //     const storedUsers =
    //       await AsyncStorage.getItem("users");
  
    //     const users = storedUsers
    //       ? JSON.parse(storedUsers)
    //       : [];
  
    //     const user = users.find(
    //       (u: any) =>
    //         u.email === email &&
    //         u.password === password
    //     );
  
    //     if (!user) {
    //       Alert.alert(
    //         "Login Failed",
    //         "Invalid email or password"
    //       );
    //       return;
    //     }
  
    //     await AsyncStorage.setItem(
    //       "currentUser",
    //       JSON.stringify(user)
    //     );
  
    //     Alert.alert(
    //       "Success",
    //       `Welcome ${user.name}`
    //     );
  
    //     router.replace("/Home");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
   
  return (
   <>
    <Stack.Screen
    options={{headerShown: false}}/>
   
  
    <SafeAreaView style={styles.container}>
      <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/skillora-logo.png")}
          style={styles.logo}
        />
       
      </View>


      <View style={styles.content}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>
          Sign in to continue your learning journey.
        </Text>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="Enter email"
            keyboardType="email-address"
            style={styles.input}
          
          />
         
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter password"
            style={styles.input}/>
        
        </View>
    
        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
           <Link href={("/registrationpage")}>
          <Text style={styles.signup}>Dont have an account? Sign up</Text>
          </Link>
       </TouchableOpacity> */}
      <TouchableOpacity style={styles.button}>
    
       <Link href={("/(tabs)/Home")}> 
          <Text style={styles.buttonText}>Sign In</Text>
        </Link>
      </TouchableOpacity>
      

      {/* Footer */}
      <Text style={styles.footer}>
        Secured By TechCrush Group 17.
      </Text>
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
    width: 150,
    height: 150,
    resizeMode: "contain",
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
    marginBottom: 20,
    fontWeight: "500",
  },
 signup: {
  marginLeft:1020,
    color: "#2563EB",
    fontSize: 15,
    marginBottom: 50,
    fontWeight: "500",
 },
  button: {
    backgroundColor: "#2563EB",
    height: 58,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
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
  eyeinput:{
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom:10,
    marginTop:-35,
  }
});