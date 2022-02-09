import * as math from "mathjs";
import React from "react";
import { PieChart, Pie } from "recharts";
import styled from "styled-components";
import convertToOz from "../../particles/convertToOz";
import extractNumberFromStringArray from "../../particles/extractNumberFromStringArray";
import filterByValidValues from "../../particles/filterByValidValues";
import splitTrimData from "../../particles/splitTrimData";

const CustomPieChart = ({ dataSet, width, height, total }: any) => {
  // change this to object in case arrangement changes
  const formattedData = filterByValidValues(dataSet).map((data: any) => {
    const name = data[0];
    const splitValue = splitTrimData(data[1]);

    const extractedNumber = extractNumberFromStringArray(splitValue);
    if (splitValue && extractedNumber) {
      const unit = splitValue[splitValue.length - 1];
      const convertedValue = convertToOz(extractedNumber, unit);
      return {
        name: name,
        value: convertedValue,
      };
    }
  });

  return (
    <PieChart width={120} height={120}>
      <Pie data={formattedData} dataKey="value" outerRadius={60} fill="green" />
    </PieChart>
  );
};

export default CustomPieChart;
