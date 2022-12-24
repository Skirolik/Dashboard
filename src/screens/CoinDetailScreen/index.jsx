import React from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";

import Coin from "../../../assets/data/crypto.json";
import CoinDetailHeader from "./components/CoinDetailHeader/CoinDetailHeader";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import CoinPriceGraph from "./components/CoinPriceGraph";
import GraphMaker from "./components/GraphMaker";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

const CoinDetailScreen = () => {
  const {
    image: { small },
    name,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    symbol,
    prices,
  } = Coin;

  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(current_price.usd.toString());

  const route = useRoute();
  const {
    params: { coinId },
  } = route;

  console.log(coinId);

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  const ChangeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  };
  const ChangeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;

    setCoinValue((floatValue / current_price.usd).toString());
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ paddingHorizontal: 10 }}>
          <CoinDetailHeader
            image={small}
            symbol={symbol}
            marketCapRank={market_cap_rank}
          />
          <View style={styles.priceContainer}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.currentPrice}>${current_price.usd}</Text>
            </View>
            <View
              style={{
                backgroundColor: percentageColor,
                paddingHorizontal: 3,
                borderRadius: 5,
                flexDirection: "row",
                paddingVertical: 8,
              }}
            >
              <AntDesign
                name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
                size={13}
                color={"white"}
                style={{ alignSelf: "center", marginRight: 5 }}
              />
              <Text style={styles.priceChange}>
                {price_change_percentage_24h.toFixed(2)}%
              </Text>
            </View>
          </View>
          <CoinPriceGraph price={prices} />
          <GraphMaker />
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text style={{ color: "white", alignSelf: "center" }}>
                {symbol.toUpperCase()}
              </Text>
              <TextInput
                style={styles.input}
                value={coinValue}
                keyboardType="numeric"
                onChangeText={ChangeCoinValue}
              />
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text style={{ color: "white", alignSelf: "center" }}>USD</Text>
              <TextInput
                style={styles.input}
                value={usdValue}
                keyboardType="numeric"
                onChangeText={ChangeUsdValue}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoinDetailScreen;
