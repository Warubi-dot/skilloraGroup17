import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";



const certificates = [
  {
    title: "Effective Communication",
    instructor: "Sarah Morgan",
    date: "May 18, 2026",
    id: "MC-EC-2605-8741",
  },
  {
    title: "Leadership Fundamentals",
    instructor: "Marcus Liu",
    date: "May 5, 2026",
    id: "MC-LF-2605-6329",
  },
];

const badges = [
  {
    emoji: "🔥",
    title: "Consistent",
    subtitle: "7-day learning streak",
  },
  {
    emoji: "💬",
    title: "Communication Pro",
    subtitle: "7-day learning streak",
  },
  {
    emoji: "🎯",
    title: "Quiz Master",
    subtitle: "Scored 100% on 5 quizzes",
  },
  {
    emoji: "⚡",
    title: "Fast Learner",
    subtitle: "Completed 3 courses in one month",
  },
];

const lockedBadges = [
  {
    emoji: "🏆",
    title: "Perfectionist",
    subtitle: "Score 100% on 10 quizzes",
  },
  {
    emoji: "🎓",
    title: "Marathon",
    subtitle: "Complete 10 courses",
  },
];


export default function AwardsScreen() {
  const [activeTab, setActiveTab] = useState<
    "certificates" | "badges"
  >("certificates");

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.header}>Awards</Text>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "certificates" &&
              styles.activeTab,
          ]}
          onPress={() =>
            setActiveTab("certificates")
          }
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "certificates" &&
                styles.activeTabText,
            ]}
          >
            Certificates
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "badges" &&
              styles.activeTab,
          ]}
          onPress={() => setActiveTab("badges")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "badges" &&
                styles.activeTabText,
            ]}
          >
            Badges
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "certificates" ? (
        <>
          {certificates.map((item, index) => (
            <View
              key={index}
              style={styles.certificateCard}
            >
              <View style={styles.cardTop}>
                <View style={styles.certIcon}>
                  <Ionicons
                    name="ribbon-outline"
                    size={30}
                    color="#fff"
                  />
                </View>

                <View style={styles.actions}>
                  <TouchableOpacity>
                    <Feather
                      name="share-2"
                      size={22}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Feather
                      name="download"
                      size={22}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.courseTitle}>
                {item.title}
              </Text>

              <Text style={styles.instructor}>
                Instructor: {item.instructor}
              </Text>

              <View style={styles.detailsRow}>
                <View>
                  <Text style={styles.label}>
                    ISSUE DATE
                  </Text>
                  <Text style={styles.value}>
                    {item.date}
                  </Text>
                </View>

                <View>
                  <Text style={styles.label}>
                    CREDENTIAL ID
                  </Text>
                  <Text style={styles.value}>
                    {item.id}
                  </Text>
                </View>
              </View>

              <View style={styles.line} />

              <Text style={styles.certified}>
                SKILLORA CERTIFIED
              </Text>
            </View>
          ))}
        </>
      ) : (
        <>
          <View style={styles.badgeGrid}>
            {badges.map((badge, index) => (
              <View
                key={index}
                style={styles.badgeCard}
              >
                <Text style={styles.emoji}>
                  {badge.emoji}
                </Text>

                <Text style={styles.badgeTitle}>
                  {badge.title}
                </Text>

                <Text style={styles.badgeSub}>
                  {badge.subtitle}
                </Text>
              </View>
            ))}
          </View>

          <Text style={styles.lockedTitle}>
            Locked Badges
          </Text>

          <View style={styles.badgeGrid}>
            {lockedBadges.map(
              (badge, index) => (
                <View
                  key={index}
                  style={[
                    styles.badgeCard,
                    { opacity: 0.4 },
                  ]}
                >
                  <Text style={styles.emoji}>
                    {badge.emoji}
                  </Text>

                  <Text
                    style={styles.badgeTitle}
                  >
                    {badge.title}
                  </Text>

                  <Text style={styles.badgeSub}>
                    {badge.subtitle}
                  </Text>
                </View>
              )
            )}
          </View>
        </>
      )}
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    width:"90%",
    alignSelf:"center"
  },

  header: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  tab: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  activeTab: {
    backgroundColor: "#EEF2FF",
    borderColor: "#EEF2FF",
  },

  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },

  activeTabText: {
    color: "#4F46E5",
  },

  certificateCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  certIcon: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "#4047a1",
    justifyContent: "center",
    alignItems: "center",
  },

  actions: {
    flexDirection: "row",
    gap: 15,
  },

  courseTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 15,
  },

  instructor: {
    color: "#666",
    marginTop: 5,
  },

  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  label: {
    fontSize: 12,
    color: "#999",
  },

  value: {
    fontWeight: "500",
    marginTop: 4,
  },

  line: {
    width:"60%",
    height: 3,
    backgroundColor: "#4F46E5",
    marginTop: 25,
    borderRadius: 10,
  },

  certified: {
    textAlign: "right",
    color: "#4F46E5",
    marginTop: -8,
    fontWeight: "500",
    fontSize:10,
  },

  badgeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  badgeCard: {
    width: "48%",
    height: 150,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  emoji: {
    fontSize: 20,
  },

  badgeTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 10,
    textAlign: "center",
  },

  badgeSub: {
    textAlign: "center",
    color: "#666",
    marginTop: 6,
  },

  lockedTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 20,
  },
});