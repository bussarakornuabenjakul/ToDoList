import { StyleSheet } from "react-native";

export const todoItemstyles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  card: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  cardCompleted: {
    backgroundColor: "#4CAF50",
    opacity: 1,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: "#AAA",
  },
  deleteBtn: {
    color: "#FF5252",
    fontWeight: "600",
  },
});
