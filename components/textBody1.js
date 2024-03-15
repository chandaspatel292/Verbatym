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
  ScrollView,
} from "react-native";
import { homepageStyle } from "./homepageStyle";
import { textBodyStyle } from "./textBodyStyle";

export default function TextBody() {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("example");

  const [fontSize, setFontSize] = useState(35);

  const calculateFontSize = (text) => {
    const maxLength = 25; // Maximum length before reducing font size
    const defaultFontSize = 35; // Default font size
    const reductionFactor = 0.75; // Factor by which font size is reduced
    const textLength = text.length;

    if (textLength > maxLength) {
      // Reduce font size if text length exceeds maximum
      const newSize =
        defaultFontSize - (textLength - maxLength) * reductionFactor;
      return Math.max(newSize, 10); // Ensure minimum font size
    }
    return defaultFontSize; // Return default font size if text length is within limits
  };
  useEffect(() => {
    // Calculate font size when fromText changes
    setFontSize(calculateFontSize(fromText));
  }, [fromText]);
  return (
    <ScrollView style={textBodyStyle.bodyFromTextView}>
      <TextInput
        style={[textBodyStyle.bodyFromText, { fontSize: fontSize }]}
        onChangeText={(text) => setFromText(text)}
        value={fromText}
        placeholder="Enter text"
        placeholderTextColor="#c5c7c6"
        selectionColor="#cc7f72"
        multiline={true}
        onContentSizeChange={(e) => {
          // Recalculate font size when content size changes
          const contentHeight = e.nativeEvent.contentSize.height;
          const textLength = fromText.length;
          if (contentHeight > 40 && textLength > 20) {
            // Adjust font size only if content height exceeds limit
            setFontSize(calculateFontSize(fromText));
          }
        }}
      />

      {/* {console.log(fromText)} */}
      {/* Conditionally render the middle line and bodyToText */}
      {fromText.trim() !== "" && (
        <>
          <View style={textBodyStyle.middleLine}></View>
          <Text style={[textBodyStyle.bodyToText, { fontSize: fontSize }]}>
            {toText}
          </Text>
        </>
      )}
    </ScrollView>
  );
}
