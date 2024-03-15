import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { homepageStyle } from "./homepageStyle";

export default function TextBody() {
  const [fromText, setFromText] = useState("");
  return (
    <View style={homepageStyle.bodyTextView}>
      <TextInput
        style={homepageStyle.bodyText}
        onChangeText={(text) => setFromText(text)}
        value={fromText}
        placeholder="Enter text"
        placeholderTextColor="#c5c7c6"
        selectionColor="#cc7f72"
      />
      {/* {console.log(fromText)} */}
    </View>
  );
}
