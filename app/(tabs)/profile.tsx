import { Link } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video"
export default function profile() {

  const player = useVideoPlayer(
    "https://www.w3schools.com/html/mov_bbb.mp4",
    (player) => {
      player.loop = true;
      player.play();
    }
  );
  return (
    <ScrollView>
<View>
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Profile Screen</Text>

      <TouchableOpacity style={styles.signin}>
                       <Link href={("/Loginpage")}>
                      <Text style={styles.signin}>Log Out</Text>
                      </Link>
                   </TouchableOpacity>
    </View>

</View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  signin: {
    alignSelf: "flex-end",
    color: "#2563EB",
    fontSize: 15,
    marginBottom: 80,
    fontWeight: "500",
    marginLeft: 25,

 },
  container: {
     backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
    flex: 1,
  },
  video: {
    width: "100%",
    height: 250,
  },
});