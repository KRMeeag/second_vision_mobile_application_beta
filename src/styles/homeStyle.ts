import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF7F1",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0A4FA3",
    textAlign: "center",
    marginBottom: 8,
  },
  subheader: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
    textAlign: "center",
    marginBottom: 40,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  cameraButton: {
    backgroundColor: "#0A4FA3",
    height: 200,
    marginBottom: 30,
    paddingVertical: 30,
  },
  cameraIcon: {
    width: 64,
    height: 64,
    marginBottom: 12,
    resizeMode: "contain",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
  gridButton: {
    backgroundColor: "#fff",
    width: "48%",
    height: 140,
    borderWidth: 2,
    borderColor: "#0A4FA3",
    paddingVertical: 20,
  },
  buttonIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  gridButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0A4FA3",
  },
});