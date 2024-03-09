import React, { useState } from "react";
import { View, Button, Text, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";
import { styles } from "./ButtonStyles";
import { TextInputComponent } from "../TextInputComponent";
import generatePassword from "../../services/passwordService";

export function ButtonComponent() {
  const [pass, setPass] = useState("");

  function handleGeneratePass() {
    let generateToken = generatePassword();
    setPass(generateToken);
  }

  function handleCopyPass() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      {/* <Button
        accessibilityLabel="Clique aqui"
        onPress={() => alert("Clicou no botão")}
        title="Clique aqui"
        color={"#f7b40a"}
      ></Button> */}
      <TextInputComponent pass={pass} />

      <Pressable style={styles.button} onPress={() => handleGeneratePass()}>
        <Text style={styles.text}>😁 Generate</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => handleCopyPass()}>
        <Text style={styles.text}>😁 Copy</Text>
      </Pressable>
    </>
  );
}
