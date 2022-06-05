import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: '#FFF'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#FFF'
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  rowDate: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#FFF'
  }
});