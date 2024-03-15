import { React, useState } from "react";
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
import profilePic from "../assets/profilePic.jpg";
import Arrow from "react-native-arrow";
import convobutton from "../assets/speechBubble.png";
import micbutton from "../assets/microphone.png";
import { homepageStyle } from "./homepageStyle";
import LanguageSelect from "./LanguageSelect";

export default function Homepage() {
  return (
    <>
      <View style={homepageStyle.container}>
        {/* header and body */}
        <View style={homepageStyle.body}>
          {/* header */}
          <View style={homepageStyle.header}>
            <Text style={homepageStyle.Verbatym}>Verbatym</Text>
            <Image style={homepageStyle.profilePic} source={profilePic} />
          </View>
          {/* body */}
          <View style={homepageStyle.bodyTextView}>
            <Text style={homepageStyle.bodyText}>Enter text</Text>
          </View>
        </View>
        {/*  footer */}
        <View style={homepageStyle.foot}>
          {/* language select */}
          <LanguageSelect />
          {/*microphone and conversation button*/}
          <View style={homepageStyle.convoAndMic}>
            <View style={homepageStyle.convobutton}>
              <Image
                source={convobutton}
                style={homepageStyle.convobuttonpng}
              />
            </View>
            <View style={homepageStyle.micbutton}>
              <Image source={micbutton} style={homepageStyle.micbuttonpng} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
