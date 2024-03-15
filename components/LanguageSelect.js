import React, { useState } from "react";
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
import Arrow from "react-native-arrow";
import { homepageStyle } from "./homepageStyle";
import { languageSelectStyle } from "./languageSelectStyle";

export default function LanguageSelect() {
  const [fromLanguageModalVisible, setFromLanguageModalVisible] =
    useState(false);
  const [toLanguageModalVisible, setToLanguageModalVisible] = useState(false);
  const [selectedFromLanguage, setSelectedFromLanguage] =
    useState("Tap to select");
  const [selectedToLanguage, setSelectedToLanguage] = useState("Tap to select");
  const supportedLanguages = ["Kannada", "English", "Hindi", "Tamil", "French"];

  const onPressFromLanguage = () => {
    setFromLanguageModalVisible(true);
  };

  const onPressToLanguage = () => {
    setToLanguageModalVisible(true);
  };

  const onSelectFromLanguage = (language) => {
    if (selectedFromLanguage === language) {
      return; // Don't update if selecting the same language
    }
    setSelectedFromLanguage(language);
    setFromLanguageModalVisible(false);
  };

  const onSwapLanguages = () => {
    const temp = selectedFromLanguage;
    setSelectedFromLanguage(selectedToLanguage);
    setSelectedToLanguage(temp);
  };

  const onSelectToLanguage = (language) => {
    if (selectedToLanguage === language) {
      return; // Don't update if selecting the same language
    }
    setSelectedToLanguage(language);
    setToLanguageModalVisible(false);
  };

  const renderLanguageFromItem = (language, index) => (
    <Pressable
      key={index.toString()}
      onPress={() => onSelectFromLanguage(language)}
    >
      <Text style={languageSelectStyle.languageItem}>{language}</Text>
    </Pressable>
  );
  const renderLanguageToItem = (language, index) => (
    <Pressable
      key={index.toString()}
      onPress={() => onSelectToLanguage(language)}
    >
      <Text style={languageSelectStyle.languageItem}>{language}</Text>
    </Pressable>
  );

  return (
    <View style={homepageStyle.languageSelect}>
      <Pressable onPress={onPressFromLanguage}>
        <View style={homepageStyle.fromLanguageSelect}>
          <Text style={homepageStyle.fromLanguage}>{selectedFromLanguage}</Text>
        </View>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={false}
        visible={fromLanguageModalVisible}
      >
        <View style={languageSelectStyle.modalContainer}>
          <Pressable onPress={() => setFromLanguageModalVisible(false)}>
            <Arrow size={16} direction="left" color={"white"} />
          </Pressable>
          <Text style={languageSelectStyle.modalTitle}>Translate from</Text>
          {supportedLanguages.map(renderLanguageFromItem)}
        </View>
      </Modal>
      <Pressable onPress={onSwapLanguages}>
        <View style={homepageStyle.selectorArrows}>
          <Arrow size={10} color={"white"} />
          <Arrow size={10} direction="left" color={"white"} />
        </View>
      </Pressable>
      <Pressable onPress={onPressToLanguage}>
        <View style={homepageStyle.toLanguageSelect}>
          <Text style={homepageStyle.toLanguage}>{selectedToLanguage}</Text>
        </View>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={false}
        visible={toLanguageModalVisible}
      >
        <View style={languageSelectStyle.modalContainer}>
          <Pressable onPress={() => setToLanguageModalVisible(false)}>
            <View style={{ paddingLeft: 16 }}>
              <Arrow size={16} direction="left" color={"white"} />
            </View>
          </Pressable>
          <Text style={languageSelectStyle.modalTitle}>Translate to</Text>
          {supportedLanguages.map(renderLanguageToItem)}
        </View>
      </Modal>
    </View>
  );
}
