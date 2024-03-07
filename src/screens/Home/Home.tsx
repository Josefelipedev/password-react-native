import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "./Style";
import {Logo} from "../../components/Logo/Logo";


export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Logo/>
            </View>
            <Text>Open up App.tsx to start working on your app )teste !</Text>
            <StatusBar style="auto" />
        </View>
    );
}

