import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingTop: 75,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
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
    height: 402,
    marginBottom: 30,
    paddingVertical: 30,
  },
  cameraIcon: {
    width: 405,
    height: 207,
    resizeMode: "cover",
  },
  buttonIcon: {
    fontSize: 80,
    fontWeight: "700",
    color: "#fff",
  },
  buttonText: {
    fontSize: 80,
    fontWeight: "700",
    color: "#fff",
  },

  // --- GRID LAYOUT ---
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  gridIcon: {
    fontSize: 80,
  },

  pairButton: {
    backgroundColor: "#70A9A1",
    width: "48%",
    height: 140,
    borderWidth: 2,
    borderColor: "#70A9A1",
    padding: 10,
    gap: 8,
  },
  pairText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },

  caregiverButton: {
    backgroundColor: "#FC440F",
    width: "48%",
    height: 140,
    borderWidth: 2,
    borderColor: "#FC440F",
    padding: 10,
    gap: 8,
  },
  caregiverText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },

// --- SETTINGS SECTION ---
  settingsWrapper: {
    alignItems: "center",
    marginTop: 15,
  },
   settingsIcon: {
    fontSize: 120,
  },

  settingsButton: {
    backgroundColor: "#fff",
    width: 375,
    height: 185,
    borderWidth: 2,
    borderColor: "#fff",
    padding: 10,
    gap: 8,
  },
  settingsText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
});