import * as Notifications from "expo-notifications";

export async function registerForPushNotifications() {
  const { status: existingStatus } =
    await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } =
      await Notifications.requestPermissionsAsync();

    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    alert("Permission not granted!");
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();

  console.log("Push Token:", token.data);

  return token.data;
}