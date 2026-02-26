import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  taskList: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  inputWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "80%",
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: "#55BCF6",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  addText: {
    fontSize: 30,
    color: "#F5F5F5",
    fontWeight: "300",
  },
});
