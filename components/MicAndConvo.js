import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  PermissionsAndroid,
  Pressable,
} from 'react-native';
import GoogleCloudSpeechToText, {
  SpeechRecognizeEvent,
  VoiceStartEvent,
  SpeechErrorEvent,
  VoiceEvent,
  SpeechStartEvent,
} from 'react-native-google-cloud-speech-to-text';
import { useEffect } from 'react';
import { homepageStyle } from "./homepageStyle";
import convobutton from "../assets/speechBubble.png";
import micbutton from "../assets/microphone.png";

/* const Separator = () => <View style={styles.separator} />; */

export default function MicAndConvo() {
  const [transcript, setResult] = React.useState('');

  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,/*  {
      title: 'Cool Photo App Camera Permission',
      message:
        'Cool Photo App needs access to your camera ' +
        'so you can take awesome pictures.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    } */);
  }, []);

  /* useEffect(() => {
    const requestAudioPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Verbatym Audio Permission',
            message:
              'Verbatym needs access to your Microphone ' +
              'so you can record audio.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Record audio permission granted');
        } else {
          console.log('Record audio permission denied');
        }
      } catch (error) {
        console.error('Error while requesting record audio permission:', error);
      }
    };
  
    requestAudioPermission();
  }, []); */


  useEffect(() => {
    //GoogleCloudSpeechToText.setApiKey('key_____');
    GoogleCloudSpeechToText.onVoice(onVoice);
    GoogleCloudSpeechToText.onVoiceStart(onVoiceStart);
    GoogleCloudSpeechToText.onVoiceEnd(onVoiceEnd);
    GoogleCloudSpeechToText.onSpeechError(onSpeechError);
    GoogleCloudSpeechToText.onSpeechRecognized(onSpeechRecognized);
    GoogleCloudSpeechToText.onSpeechRecognizing(onSpeechRecognizing);
    return () => {
      GoogleCloudSpeechToText.removeListeners();
    };
  }, []);

  const onSpeechError = (_error) => {
    console.log('onSpeechError: ', _error);
  };

  const onSpeechRecognized = (result) => {
    console.log('onSpeechRecognized: ', result);
    setResult(result.transcript);
  };

  const onSpeechRecognizing = (result) => {
    console.log('onSpeechRecognizing: ', result);
    setResult(result.transcript);
  };

  const onVoiceStart = (_event) => {
    console.log('onVoiceStart', _event);
  };

  const onVoice = (_event) => {
    console.log('onVoice', _event);
  };

  const onVoiceEnd = () => {
    console.log('onVoiceEnd: ');
  };

  const startRecognizing = async () => {
    const result = await GoogleCloudSpeechToText.start({
      speechToFile: true,
    });
    console.log('startRecognizing', result);
  };

  const stopRecognizing = async () => {
    await GoogleCloudSpeechToText.stop();
  };

  return(
    <View style={homepageStyle.convoAndMic}>
            <View style={homepageStyle.convobutton}>
              <Image
                source={convobutton}
                style={homepageStyle.convobuttonpng}  
              />
            </View>
            <Pressable onPress={startRecognizing}>
            <View style={homepageStyle.micbutton}>
              <Image source={micbutton} style={homepageStyle.micbuttonpng} />
            </View>
            </Pressable>
          </View>
  )

  
}


