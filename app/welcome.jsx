import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";
import { useRouter } from "expo-router";

const welcome = () => {

const router = useRouter()


  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Welome image */}
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />
        <View style={{ gap: 10, paddingVertical: wp(10) }}>
          <Text style={styles.title}>SocialApp</Text>
          <Text style={styles.description}>
            Where you find communication and images of this World!
          </Text>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={()=>router.push('signUp')}
          />
          <View style={styles.bottomText}>
            <Text style={styles.loginText}>Already have an account!</Text>
            <Pressable onPress={()=>router.push('login')}>
              <Text style={[styles.loginText,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold}]}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extraBold,
  },
  description: {
    color: theme.colors.text,
    fontSize: hp(1.7),
    textAlign: "center",
    paddingHorizontal: wp(10),
  },
  footer:{
    gap:30,
    width:'100%'
  },
  bottomText:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:5
  },
  loginText:{
    textAlign:'center',
    color:theme.colors.text,
    fontSize:hp(1.6)
  }
});

export default welcome;
