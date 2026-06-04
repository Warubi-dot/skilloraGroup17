import React, { useState } from "react";
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

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/women/44.jpg"
  );

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
      <Image
        source={{ uri: profileImage }}
        style={styles.avatar}
      />

      {/* Name + Edit */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>GenesisWorlld</Text>

        <TouchableOpacity onPress={pickImage}>
          <Feather name="edit-2" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.role}>Mobile Developer</Text>

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
      onPress={()=>{router.push("/Loginpage")}}
      style={styles.logoutContainer}>
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
  },

  header: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 60,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignSelf: "center",
    marginTop: 20,
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  name: {
    fontSize: 30,
    fontWeight: "600",
    marginRight: 10,
  },

  role: {
    textAlign: "center",
    fontSize: 20,
    color: "#555",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 15,
  },

  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingVertical: 25,
    alignItems: "center",
    marginBottom: 15,
  },

  emoji: {
    fontSize: 35,
  },

  number: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 10,
  },

  cardText: {
    textAlign: "center",
    color: "#666",
    fontSize: 18,
    marginTop: 5,
  },

  badgeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  viewAll: {
    color: "#2563EB",
    fontSize: 18,
    fontWeight: "600",
  },

  badgesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  badgeItem: {
    alignItems: "center",
    width: "30%",
  },

  badgeIcon: {
    fontSize: 40,
  },

  badgeText: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "500",
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
    fontSize: 18,
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