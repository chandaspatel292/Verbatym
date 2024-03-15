import { StyleSheet } from "react-native";

export const textBodyStyle = StyleSheet.create({
  bodyFromText: {
    color: "#f4f5f4",
    fontSize: 35,
    verticalAlign: "top",
    paddingBottom: 32,
  },
  bodyFromTextView: {
    padding: 24,
    paddingLeft: 24,
  },

  bodyToText: {
    color: "#FF8874",
    fontSize: 35,
    /* verticalAlign: "top", */

    paddingTop: 32,
  },

  middleLine: {
    borderWidth: 0, // Remove border to avoid doubling with underline
    borderBottomWidth: 2, // Add underline
    borderColor: "#FF8874",
  },

  modalContainer: {
    backgroundColor: "#131212",
    flex: 1,
    padding: 8,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    verticalAlign: "top",
    padding: 8,
  },
  clearIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
