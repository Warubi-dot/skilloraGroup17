import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/Loginpage');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView style={styles.Scontainer}>
    <View style={styles.container}>
      <Image
       source={require("../assets/images/skillora-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Footer  */}
       <Text style={styles.footer}>
        Secured by your TechCrush Group 17.
      </Text>
    </View>
    
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Scontainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 150,
   
  },
   footer: {
    textAlign: "center",
    color: "#C4C4C4",
    fontSize: 13,
    marginBottom: 0,
    marginTop: 150,
  },
});












// import { Stack } from "expo-router";
// import React from "react";
// import {View,Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView,Image, ScrollView,} from "react-native";

// export default function Loginpage() {
//   return (
//    <>
//     <Stack.Screen
//     options={{headerShown: false}}/>
   
  
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require("../assets/images/Frame 295.jpg")}
//           style={styles.logo}
//         />
       
//       </View>
//   {/* Footer  */}
//       <Text style={styles.footer}>
//         Secured by your TechCrush Group 17.
//       </Text>

     
//       </ScrollView>
//     </SafeAreaView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "space-between",
//     paddingHorizontal: 25,
//     paddingVertical: 20,
//   },

//   logoContainer: {
//     alignItems: "center",
//     marginTop: 70,
//     padding: 40,
//   },

//   logo: {
//     width: 500,
//     height: 300,
//     resizeMode: "contain",
//   },

//   footer: {
//     textAlign: "center",
//     color: "#C4C4C4",
//     fontSize: 13,
//     // marginBottom: 30,
//     marginTop: 100,
//   },

 
// });