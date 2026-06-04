import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {
  Feather,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";

type TabType = "progress" | "completed" | "saved";

const inProgressData = [
  {
    id: "1",
    title: "Effective Communication II",
    author: "Alex Parker",
    lessons: "8/12 lessons",
    progress: 68,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
  },

];

const completedData = [
  {
    id: "1",
    title: "Leadership Fundamentals",
    author: "Marcus Liu",
    date: "Completed May 5, 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
  },
  {
    id: "2",
    title: "Time Management",
    author: "Marcus Liu",
    date: "Completed May 5, 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
  },

];

const savedData = [
  {
    id: "1",
    title: "Workplace Etiquette",
    author: "Mira Chen",
    rating: "4.9",
    duration: "7min",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=500",
  },
];

export default function LibraryScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("progress");

  const renderContent = () => {
    switch (activeTab) {
      case "progress":
        return (
          <TouchableOpacity
          onPress={()=>{router.push("/module")}}>
          <FlatList
            data={inProgressData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />

                <View style={styles.content}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.author}>{item.author}</Text>

                  <View style={styles.progressRow}>
                    <Text style={styles.lessons}>{item.lessons}</Text>
                    <Text style={styles.percent}>
                      {item.progress}%
                    </Text>
                  </View>

                  <View style={styles.progressBg}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: `${item.progress}%` },
                      ]}
                    />
                  </View>
                </View>
              </View>
            )}
          />
          </TouchableOpacity>
        );

      case "completed":
        return (
          <FlatList
            data={completedData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              
              <View style={styles.card}>
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                  />

                  <View style={styles.checkBadge}>
                    <Feather
                      name="check"
                      size={18}
                      color="#2DC5A8"
                    />
                  </View>
                </View>

                <View style={styles.content}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.author}>{item.author}</Text>

                  <View style={styles.dateRow}>
                    <Feather
                      name="calendar"
                      size={14}
                      color="#999"
                    />
                    <Text style={styles.dateText}>
                      {item.date}
                    </Text>
                  </View>
                </View>

                <View style={styles.awardIcon}>
                  <MaterialIcons
                    name="workspace-premium"
                    size={22}
                    color="#D9B341"
                  />
                </View>
              </View>
            )}
          />
        );

      case "saved":
        return (
         
          <FlatList
        
            data={savedData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />

                <View style={styles.content}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.author}>{item.author}</Text>

                  <View style={styles.ratingRow}>
                    <AntDesign
                      name="star"
                      size={14}
                      color="#F4B400"
                    />
                    <Text style={styles.rating}>
                      {item.rating}
                    </Text>

                    <Feather
                      name="clock"
                      size={14}
                      color="#999"
                    />

                    <Text style={styles.duration}>
                      {item.duration}
                    </Text>
                  </View>
                </View>

                <MaterialIcons
                  name="bookmark"
                  size={24}
                  color="#4F46E5"
                />
              </View>
            )}
          />
         
        );
    }
  };

  return (
    <View 
    style={styles.container}>
      <Text style={styles.header}>Library</Text>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "progress" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("progress")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "progress" && styles.activeText,
            ]}
          >
            In Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "completed" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("completed")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "completed" && styles.activeText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "saved" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("saved")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "saved" && styles.activeText,
            ]}
          >
            Saved
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>{renderContent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 70,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  tab: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 16,
  },

  activeTab: {
    backgroundColor: "#EEF2FF",
  },

  tabText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#111",
  },

  activeText: {
    color: "#4F6EF7",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 22,
    padding: 12,
    marginBottom: 18,
    alignItems: "center",
  },

  image: {
    width: 95,
    height: 95,
    borderRadius: 14,
  },

  content: {
    flex: 1,
    marginLeft: 14,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  author: {
    fontSize: 16,
    color: "#888",
    marginTop: 4,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  lessons: {
    color: "#666",
    fontSize: 15,
  },

  percent: {
    color: "#2DC5A8",
    fontWeight: "700",
  },

  progressBg: {
    height: 6,
    backgroundColor: "#ECECEC",
    borderRadius: 4,
    marginTop: 8,
  },

  progressFill: {
    height: 6,
    backgroundColor: "#2DC5A8",
    borderRadius: 4,
  },

  checkBadge: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#fff",
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  dateText: {
    marginLeft: 6,
    color: "#888",
  },

  awardIcon: {
    marginLeft: 8,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    gap: 6,
  },

  rating: {
    fontWeight: "600",
  },

  duration: {
    color: "#777",
  },
});