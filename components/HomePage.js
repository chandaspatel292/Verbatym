import { StyleSheet, Text, View, Image, Button } from "react-native";
import profilePic from "../assets/profilePic.jpg";
import Arrow from "react-native-arrow";
import convobutton from "../assets/speechBubble.png";
import micbutton from "../assets/microphone.png";
import { homepageStyle } from "./homepageStyle";

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
          <View style={homepageStyle.languageSelect}>
            <View style={homepageStyle.fromLanguageSelect}>
              <Text style={homepageStyle.fromLanguage}>Kannada</Text>
            </View>
            <View style={homepageStyle.selectorArrows}>
              <Arrow size={8} color={"white"} />
              <Arrow size={8} direction="left" color={"white"} />
            </View>
            <View style={homepageStyle.toLanguageSelect}>
              <Text style={homepageStyle.toLanguage}>English</Text>
            </View>
          </View>
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
