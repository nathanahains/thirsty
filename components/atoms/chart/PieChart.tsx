import * as math from "mathjs";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import styled from "styled-components";
import convertToOz from "../../particles/convertToOz";
import extractNumberFromStringArray from "../../particles/extractNumberFromStringArray";
import filterByValidValues from "../../particles/filterByValidValues";
import splitTrimData from "../../particles/splitTrimData";
import PieChartProps from "./interfaces";

const CustomPieChart = ({ dataSet, width=120, height=120}: PieChartProps) => {
  // change this to object in case arrangement changes
    const formattedData = filterByValidValues(dataSet).map((data: any) => {
    const name = data[0];
    const color = data[2];
    const splitValue = splitTrimData(data[1]);

    const extractedNumber = extractNumberFromStringArray(splitValue);
    if (splitValue && extractedNumber) {
      const unit = splitValue[splitValue.length - 1];
        const convertedValue = convertToOz(extractedNumber, unit);
        console.log(convertedValue)
      return {
        name: name,
        value: convertedValue,
        color: color,
      };
    }
  })

  return (
    <PieChart width={width} height={height}>
      <Pie data={formattedData} dataKey="value" outerRadius={width/2} fill="green">
        {formattedData.map((entry: any) => (
          <Cell key={entry.name} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default CustomPieChart;
