import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerCointainer: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
  },
  tickerConitaner: {
    flexDirection: "row",

    alignItems: "center",
  },
  tickerTitle: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 17,
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});

export default styles;
