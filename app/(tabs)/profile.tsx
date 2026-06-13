import React, { useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";






export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/women/44.jpg"
  );
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
  loadUser();
}, []);

const loadUser = async () => {
  try {
    const userData = await AsyncStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData));
      console.log(
        "USER:",
        JSON.parse(userData)
      );
    }
  } catch (error) {
    console.log(error);
  }
};

  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Permission Required",
        "Please allow gallery access."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.header}>Profile</Text>

      {/* Profile Image */}
      <View
  style={[
    styles.avatar,
    {
      backgroundColor: "#2563EB",
      justifyContent: "center",
      alignItems: "center",
    },
  ]}
>
  <Text
    style={{
      color: "#fff",
      fontSize: 45,
      fontWeight: "700",
    }}
  >
    {user?.name?.charAt(0) || "U"}
  </Text>
</View>

      {/* Name + Edit */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{user?.name || "user"}</Text>

        <TouchableOpacity onPress={pickImage}>
          <Feather name="edit-2" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.role}>{user?.email || "No Email"}</Text>

      {/* Learning Overview */}
      <Text style={styles.sectionTitle}>
        Learning Overview
      </Text>

      <View style={styles.statsContainer}>
        <View style={styles.card}>
          <Text style={styles.emoji}>📚</Text>
          <Text style={styles.number}>3</Text>
          <Text style={styles.cardText}>
            Modules{"\n"}Completed
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🔥</Text>
          <Text style={styles.number}>12</Text>
          <Text style={styles.cardText}>
            Days Streak
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🏅</Text>
          <Text style={styles.number}>8</Text>
          <Text style={styles.cardText}>
            Badges{"\n"}Earned
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>📜</Text>
          <Text style={styles.number}>3</Text>
          <Text style={styles.cardText}>
            Certificate{"\n"}Earned
          </Text>
        </View>
      </View>

      {/* Badges */}
      <View style={styles.badgeHeader}>
        <Text style={styles.sectionTitle}>
          Badges Earned
        </Text>

        <TouchableOpacity>
          <Text style={styles.viewAll}>
            View all
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.badgesRow}>
        <View style={styles.badgeItem}>
          <Text style={styles.badgeIcon}>🎯</Text>
          <Text style={styles.badgeText}>
            Quiz Master
          </Text>
        </View>

        <View style={styles.badgeItem}>
          <Text style={styles.badgeIcon}>💬</Text>
          <Text style={styles.badgeText}>
            Communication Pro
          </Text>
        </View>

        <View style={styles.badgeItem}>
          <Text style={styles.badgeIcon}>⚡</Text>
          <Text style={styles.badgeText}>
            Fast Learner
          </Text>
        </View>
      </View>

      {/* General */}
      <Text style={styles.sectionTitle}>General</Text>

      <MenuItem title="Settings" />
      <MenuItem title="Help & Support" />
      <MenuItem title="Notification" icon />
      <MenuItem title="Language Preferences" />

      <TouchableOpacity
  onPress={async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");

    router.replace("/Loginpage");
  }}
  style={styles.logoutContainer}
>
        <MaterialIcons
          name="logout"
          size={22}
          color="#EF4444"
        />
        <Text style={styles.logoutText}>
          Log Out
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

type MenuItemProps = {
  title: string;
  icon?: boolean;
};

const MenuItem = ({
  title,
  icon,
}: MenuItemProps) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      {icon && (
        <Ionicons
          name="notifications-outline"
          size={22}
          color="#000"
          style={{ marginRight: 10 }}
        />
      )}

      <Text style={styles.menuText}>{title}</Text>
    </View>

    <Feather
      name="chevron-right"
      size={22}
      color="#777"
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    padding:10,
    width:"90%",
    alignSelf:"center",
  },

  header: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignSelf: "center",
    marginTop: 10,
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  name: {
    fontSize: 24,
    fontWeight: "600",
    marginRight: 10,
  },

  role: {
    textAlign: "center",
    fontSize: 18,
    color: "#555",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 15,
  },

  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding:10,
    
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
    padding:10
  },

  emoji: {
    fontSize: 25,
  },

  number: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 0,
  },

  cardText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginTop: 5,
  },

  badgeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize:18,
    marginTop:-10,
  },

  viewAll: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "500",
  },

  badgesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
  },

  badgeItem: {
    alignItems: "center",
    width: "30%",
  },

  badgeIcon: {
    fontSize: 25,
  },

  badgeText: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "500",
    fontSize:12,
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  menuText: {
    fontSize: 15,
  },

  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 40,
  },

  logoutText: {
    color: "#EF4444",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "600",
  },
});