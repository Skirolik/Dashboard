import React from "react";

import { View, Text, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const CoinDetailHeader = (props) => {
  const { image, symbol, marketCapRank } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.headerCointainer}>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerConitaner}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>

      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default CoinDetailHeader;
