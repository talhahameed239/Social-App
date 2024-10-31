import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Loading from "../components/Loading";

const StyledComponent = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Loading />
    </View>
  );
};

export default StyledComponent;
