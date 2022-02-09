import React from 'react';
import styled from 'styled-components';
import CustomPieChart from '../../components/atoms/chart/PieChart';
import { Text } from '../../components/atoms/text/Text';
import LegendCell from '../../components/molecules/legendCell/LegendCell';
import genPastelColor from '../../components/particles/genPastelColor';
import ListContainer from '../listContainer/ListContainer';
import IngredientVisualProps, { IngredientItem } from './interfaces';

const IngredientVisual = ({ ingredients }: IngredientVisualProps) => {
    ingredients?.forEach((obj: IngredientItem) => {
        obj.color = genPastelColor()
    })
    // data: {
    //     color: "red",
    //     name: "Orange Juice",
    //     value: "1 oz",
    //   },
    return <StyledDiv>
        <div className="main-text"><Text content="Ingredients" bold={true}/></div>
        <div className="visual-container">
            <div className="list-container">
                <ListContainer dataSet={ingredients} cell={<LegendCell data=""/>}/>
            </div>
            <div className="pie-graph"><CustomPieChart dataSet={ingredients}/></div>
        </div>
  </StyledDiv>;
};

export default IngredientVisual;

const StyledDiv = styled.div`
    .main-text{
        border: 1px solid red;
        margin: 30px 0px 20px 20px;
    }
    .visual-container{
        border: 1px solid red;
    }
    .list-container{
        border: 1px solid red;
    }
    .pie-graph{
        border: 1px solid red;
    }
`