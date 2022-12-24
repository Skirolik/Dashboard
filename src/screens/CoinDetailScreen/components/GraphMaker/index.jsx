import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { BarChart, ProgressChart } from "react-native-chart-kit";

const GraphMaker = () => {
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8],
  };
  const val = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View>
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width - 30}
        height={220}
        strokeWidth={16}
        radius={32}
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
        hideLegend={false}
      />
      <View style={{ marginTop: 5 }}>
        <BarChart
          data={val}
          width={Dimensions.get("window").width - 30}
          height={220}
          strokeWidth={16}
          radius={32}
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
        />
      </View>
    </View>
  );
};

export default GraphMaker;
