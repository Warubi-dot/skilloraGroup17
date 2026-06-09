import * as Notifications from "expo-notifications";

const sendTestNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Skillora",
      body: "Keep learning today 🚀",
    },
    trigger: null,
  });
};