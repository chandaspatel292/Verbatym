import { StyleSheet } from "react-native";

export const languageSelectStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#1e1f21",
    padding: 16,
  },

  modalTitle: {
    color: "#f4f5f4",
    fontSize: 30,
    verticalAlign: "top",
    paddingLeft: 14,
    paddingRight: 14,
  },

  languageItem: {
    color: "#f4f5f4",
    fontSize: 18,
    padding: 4,
  },

  modalheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  searchIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  searchInput: {
    color: "#c5c7c6",
    width: "80%",
    height: 40,
    borderWidth: 0, // Remove border to avoid doubling with underline
    borderBottomWidth: 1, // Add underline
    borderColor: "#c5c7c6", // Underline color
    padding: 4,
    marginBottom: 10,
  },
});
