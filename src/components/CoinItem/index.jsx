import React from "react";

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinItem = ({ marketcoin }) => {
  const {
    id,
    name,
    current_price,
    price_change_percentage_24h,
    symbol,
    image,
  } = marketcoin;

  const navigation = useNavigation();

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  return (
    <Pressable
      style={styles.coincointainer}
      onPress={() => navigation.navigate("CoinDetailScreen", { coinId: id })}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 30,
          width: 30,
          marginRight: 15,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={13}
            color={percentageColor}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{current_price.toFixed(2)} units</Text>
      </View>
    </Pressable>
  );
};

export default CoinItem;
