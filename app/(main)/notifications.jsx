import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState,useEffect } from "react";
import { fetchNotifications } from "../../services/notificationService";
import { wp, hp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "expo-router";
import NotificationItem from "../../components/NotificationItem";
import Header from "../../components/Header"


const notificatons = () => {
  const [notification, setNotificaton] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    getNotificatons();
  }, []);

  const getNotificatons = async () => {
    let res = await fetchNotifications(user.id);
    // console.log(res);
    if (res.success) setNotificaton(res.data);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title="Notifications" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listStyle}
        >
          {notification.map((item) => {
            return (
              <NotificationItem item={item} key={item?.id} router={router} />
            );
          })}
          {notification.length == 0 && (
            <Text style={styles.noData}>No Notifications yet</Text>
          )}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default notificatons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  listStyle: {
    paddingVertical: 20,
    gap: 10,
  },
  noData: {
    fontSize: hp(1.8),
    fontWeight: theme.fonts.medium,
    color: theme.colors.text,
    textAlign: "center",
  },
});
