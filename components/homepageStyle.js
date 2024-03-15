import { StyleSheet } from "react-native";

export const homepageStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1e1f21",
    width: "100%",
  },
  body: {
    flex: 8,
    backgroundColor: "#131212",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  Verbatym: {
    color: "#f4f5f4",
    fontSize: 24,
    fontWeight: "bold",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  bodyText: {
    color: "#f4f5f4",
    fontSize: 35,
    verticalAlign: "top",
  },
  bodyTextView: {
    padding: 24,
    paddingLeft: 24,
  },
  foot: { flex: 4, backgroundColor: "#1e1f21" },
  languageSelect: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },

  fromLanguageSelect: {
    backgroundColor: "#131212",
    width: 128,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },

  fromLanguage: {
    color: "#FF8874",
    fontSize: 18,
  },

  toLanguageSelect: {
    backgroundColor: "#131212",
    width: 128,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },

  toLanguage: {
    color: "#FF8874",
    fontSize: 18,
  },

  convoAndMic: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingLeft: 40,
    paddingRight: 40,
  },

  convobutton: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "#FF8874",
    justifyContent: "center",
    alignItems: "center",
  },
  micbutton: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "#FF8874",
    justifyContent: "center",
    alignItems: "center",
  },

  convobuttonpng: {
    width: 50,
    height: 50,
  },

  micbuttonpng: {
    width: 50,
    height: 50,
  },
});
