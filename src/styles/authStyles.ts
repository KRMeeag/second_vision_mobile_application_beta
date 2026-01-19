import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: "#0A4FA3",
    justifyContent: "center",
    alignItems: "center",
  },
  splashLogo: { width: 110, height: 110, marginBottom: 20, resizeMode: "contain" },
  splashText: { color: "#fff", fontSize: 32, fontWeight: "700", textAlign: "center" },
  splashTap: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },

  container: { flex: 1, backgroundColor: "#FBF7F1", paddingHorizontal: 28 },
  backBtn: { marginTop: 24 },
  backText: { color: "#0A4FA3", fontWeight: "600" },
  icon: { width: 80, height: 80, alignSelf: "center", marginVertical: 20, resizeMode: "contain" },
  title: { textAlign: "center", fontSize: 26, fontWeight: "800", marginBottom: 6 },
  subtitle: { textAlign: "center", fontSize: 14, color: "#555", marginBottom: 24 },
  label: { fontSize: 13, fontWeight: "600", marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    backgroundColor: "#fff",
  },
  linkRight: { textAlign: "right", color: "#0A4FA3", marginBottom: 20, fontSize: 12 },
  primaryBtn: {
    backgroundColor: "#0A4FA3",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  primaryText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  footerText: { textAlign: "center", marginTop: 18, fontSize: 13 },
  link: { color: "#0A4FA3", fontWeight: "600" },
});
