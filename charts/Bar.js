import React from 'react'
import { BarChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'

export default function Bar() {

    const screenWidth = Dimensions.get("window").width;

    //testdata
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };

    // Pass into function as prop?
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };


    return <BarChart
        style={{ borderRadius: 10 }}
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
    />
}