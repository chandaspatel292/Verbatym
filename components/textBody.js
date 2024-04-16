import React, { useState, useEffect, useRef } from "react";
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
import Arrow from "react-native-arrow";
import clearIcon from "../assets/clearIcon.png";
import LanguageSelect from "./LanguageSelect";

export default function TextBody() {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [fontSize, setFontSize] = useState(35);

  const calculateFontSize = (text) => {
    const maxLength = 33; // Maximum length before reducing font size
    const defaultFontSize = 35; // Default font size
    const reductionFactor = 0.75; // Factor by which font size is reduced
    const textLength = text.length;

    if (textLength > maxLength) {
      // Reduce font size if text length exceeds maximum
      const newSize =
        defaultFontSize - (textLength - maxLength) * reductionFactor;
      return Math.max(newSize, 20); // Ensure minimum font size
    }
    return defaultFontSize; // Return default font size if text length is within limits
  };
  useEffect(() => {
    // Calculate font size when fromText changes
    setFontSize(calculateFontSize(fromText));
  }, [fromText]);

  return (
    <View style={[textBodyStyle.bodyFromTextView, { color: "#c5c7c6" }]}>
      <Pressable onPress={() => setIsModalVisible(true)}>
        <Text style={textBodyStyle.bodyFromText}>Enter Text</Text>
      </Pressable>

      <Modal
        animationType="none"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={textBodyStyle.modalContainer}>
          <View style={textBodyStyle.modalHeader}>
            <Pressable
              onPress={() => {
                setIsModalVisible(false);
                setFromText("");
              }}
            >
              <Arrow size={20} direction="left" color={"white"} />
            </Pressable>
            <Pressable onPress={() => setFromText("")}>
              <Image source={clearIcon} style={textBodyStyle.clearIcon} />
            </Pressable>
          </View>
          <ScrollView style={textBodyStyle.bodyFromTextView}>
            <TextInput
              style={[textBodyStyle.bodyFromText, { fontSize: fontSize }]}
              onChangeText={(text) => setFromText(text)}
              value={fromText}
              placeholder="Enter Text"
              placeholderTextColor="#c5c7c6"
              selectionColor="#cc7f72"
              multiline={true}
              onContentSizeChange={(e) => {
                // Recalculate font size when content size changes
                const contentHeight = e.nativeEvent.contentSize.height;
                const textLength = fromText.length;
                if (contentHeight > 500 && textLength > 100) {
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
                <Text
                  style={[textBodyStyle.bodyToText, { fontSize: fontSize }]}
                >
                  {/* {toText} */}
                  {fromText}
                </Text>
              </>
            )}
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: "#1e1f21",
          }}
        >
          <LanguageSelect />
        </View>
      </Modal>
    </View>
  );
}
