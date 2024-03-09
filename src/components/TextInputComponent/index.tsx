import React from "react";
import { View, TextInput } from "react-native";

import { styles } from "./TextInputstyles";

interface TextInputProps {
  pass: string;
}

export function TextInputComponent(props: TextInputProps) {
  return (
    <TextInput
      style={styles.inputer}
      placeholder="Pass"
      multiline={true}
      value={props.pass}
    />
  );
}
