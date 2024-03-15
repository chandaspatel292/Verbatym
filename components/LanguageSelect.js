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
  BackHandler,
} from "react-native";
import Arrow from "react-native-arrow";
import { homepageStyle } from "./homepageStyle";
import { languageSelectStyle } from "./languageSelectStyle";
import searchIcon from "../assets/search.png";

export default function LanguageSelect() {
  const [fromLanguageModalVisible, setFromLanguageModalVisible] =
    useState(false);
  const [toLanguageModalVisible, setToLanguageModalVisible] = useState(false);
  const [selectedFromLanguage, setSelectedFromLanguage] =
    useState("Tap to select");
  const [selectedToLanguage, setSelectedToLanguage] = useState("Tap to select");

  const [searchQuery, setSearchQuery] = useState("");
  const [searchMode, setSearchMode] = useState(false);
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

  const filterLanguages = (query) => {
    return supportedLanguages.filter((language) =>
      language.toLowerCase().includes(query.toLowerCase())
    );
  };

  const renderLanguageFromItem = (language, index) => (
    <Pressable
      key={index.toString()}
      onPress={() => {
        /* if (searchMode) {
          onSelectLanguage(language);
        } else {
          onSelectFromLanguage(language);
        } */
        onSelectFromLanguage(language);
        setSearchQuery("");
        setSearchMode(false);
      }}
    >
      <Text style={languageSelectStyle.languageItem}>{language}</Text>
    </Pressable>
  );
  const renderLanguageToItem = (language, index) => (
    <Pressable
      key={index.toString()}
      onPress={() => {
        /* if (searchMode) {
          onSelectLanguage(language);
        } else {
          onSelectToLanguage(language);
        } */
        onSelectToLanguage(language);
        setSearchQuery("");
        setSearchMode(false);
      }}
    >
      <Text style={languageSelectStyle.languageItem}>{language}</Text>
    </Pressable>
  );

  /* const onSelectLanguage = (language) => {
    if (searchMode) {
      setSelectedToLanguage(language);
      setToLanguageModalVisible(false);
    } else {
      setSelectedFromLanguage(language);
      setFromLanguageModalVisible(false);
    }
  }; */

  useEffect(() => {
    const backAction = () => {
      if (fromLanguageModalVisible) {
        setFromLanguageModalVisible(false);
        setSearchMode(false);
        return true; // Prevent default behavior
      }
      if (toLanguageModalVisible) {
        setToLanguageModalVisible(false);
        setSearchMode(false);
        return true; // Prevent default behavior
      }
      return false; // Default behavior
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Cleanup event listener
  }, [fromLanguageModalVisible, toLanguageModalVisible]);

  return (
    <View style={homepageStyle.languageSelect}>
      <Pressable onPress={onPressFromLanguage}>
        <View style={homepageStyle.fromLanguageSelect}>
          <Text style={homepageStyle.fromLanguage}>{selectedFromLanguage}</Text>
        </View>
      </Pressable>

      <Modal
        animationType="fade"
        transparent={false}
        visible={fromLanguageModalVisible}
        onRequestClose={() => {
          setFromLanguageModalVisible(false);
          setSearchMode(false);
          setSearchQuery("");
          // Reset search mode when modal is closed
        }}
      >
        <View style={languageSelectStyle.modalContainer}>
          <View style={languageSelectStyle.modalheader}>
            <Pressable
              onPress={() => {
                setFromLanguageModalVisible(false);
                setSearchMode(false);
              }}
            >
              <Arrow size={20} direction="left" color={"white"} />
            </Pressable>
            <Text style={languageSelectStyle.modalTitle}>Translate from</Text>
            <Pressable onPress={() => setSearchMode(!searchMode)}>
              <Image
                source={searchIcon}
                style={languageSelectStyle.searchIcon}
              />
            </Pressable>
          </View>
          {searchMode ? (
            <TextInput
              style={languageSelectStyle.searchInput}
              onChangeText={(text) => setSearchQuery(text)}
              placeholder="Search languages"
              placeholderTextColor="gray"
            />
          ) : null}
          {filterLanguages(searchQuery).map(renderLanguageFromItem)}
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
        animationType="fade"
        transparent={false}
        visible={toLanguageModalVisible}
        onRequestClose={() => {
          setToLanguageModalVisible(false);
          setSearchMode(false);
          setSearchQuery("");
          // Reset search mode when modal is closed
        }}
      >
        <View style={languageSelectStyle.modalContainer}>
          <View style={languageSelectStyle.modalheader}>
            <Pressable
              onPress={() => {
                setToLanguageModalVisible(false);
                setSearchMode(false);
              }}
            >
              <View style={{ paddingLeft: 16 }}>
                <Arrow size={20} direction="left" color={"white"} />
              </View>
            </Pressable>
            <Text style={languageSelectStyle.modalTitle}>Translate to</Text>
            <Pressable onPress={() => setSearchMode(!searchMode)}>
              <Image
                source={searchIcon}
                style={languageSelectStyle.searchIcon}
              />
            </Pressable>
          </View>
          {searchMode ? (
            <TextInput
              style={languageSelectStyle.searchInput}
              onChangeText={(text) => setSearchQuery(text)}
              placeholder="Search languages"
              placeholderTextColor="gray"
            />
          ) : null}
          {filterLanguages(searchQuery).map(renderLanguageToItem)}
        </View>
      </Modal>
    </View>
  );
}
