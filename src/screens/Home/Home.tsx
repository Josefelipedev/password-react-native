import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./Style";
import { Logo } from "../../components/Logo/Logo";
import { ButtonComponent } from "../../components/Button";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <ButtonComponent />
      </View>

      <StatusBar style="light" />
    </View>
  );
}
