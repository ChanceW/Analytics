import React, { useReducer, useState } from "react";
import "./ChartSelector.css";
import barPng from "../../Images/bar.png";
import piePng from "../../Images/pie.png";
import pyramidPng from "../../Images/pyramid.png";
import areaPng from "../../Images/area.png";
import axesPng from "../../Images/axes.png";
import stackPng from "../../Images/stack.png";


const ChartSelector = ({ dispatch }) => {
    return (
        <div className="chartSelect">
            <div>Choose Chart Type: </div>
            <div className="charts">
                <input type="radio" onChange={(event) => dispatch({type:"setChartType", value: event.target.value })} name="chart" value="bar" /><img src={barPng} alt="Bar"/><br />
                <input type="radio" onChange={(event) => dispatch({type:"setChartType", value: event.target.value })} name="chart" value="pie" /><img src={piePng} alt="Pie" /><br />
                <input type="radio" onChange={(event) => dispatch({type:"setChartType", value: event.target.value })} name="chart" value="pyramid" /><img src={pyramidPng} alt="Pyramid" /><br />
                <input type="radio" onChange={(event) => dispatch({type:"setChartType", value: event.target.value })} name="chart" value="bar" /><img src={areaPng} alt="area" /><br />
                <input type="radio" onChange={(event) => dispatch({type:"setChartType", value: event.target.value })} name="chart" value="bar" /><img src={axesPng} alt="axes" /><br />
                <input type="radio" onChange={(event) => dispatch({type:"setChartType", value: event.target.value })} name="chart" value="bar" /><img src={stackPng} alt="stack" /><br />
            </div>
        </div>
    );
};

export default ChartSelector;