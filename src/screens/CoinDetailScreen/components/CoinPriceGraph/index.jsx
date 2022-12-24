import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const CoinPriceGraph = ({ price }) => {
  //   console.log(price[24][1]);

  var data = [];
  for (var i = 0; i < price.length; i++) {
    data.push(price[i][1]);
  }

  var label = [];
  for (var i = 0; i < price.length; i++) {
    label.push(price[i][0]);
  }
  //   console.log(data);
  //   console.log(label);

  //   const points = price.map((prices) => ({ y: prices[1] }));

  //   console.log(points);
  return (
    <View style={{ marginLeft: 4 }}>
      <LineChart
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              data,
            },
          ],
        }}
        width={Dimensions.get("window").width - 30} // from react-native
        height={220}
        yAxisInterval={3} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 2) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 2) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "1",
            strokeWidth: "3",
            stroke: "#ffa726",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default CoinPriceGraph;
