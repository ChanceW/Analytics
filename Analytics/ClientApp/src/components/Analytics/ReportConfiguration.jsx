import React, { useReducer, useState } from "react";
import { useEntityList } from "./hooks/useEntityList";
import SeriesSelector from "./SeriesSelector";
import ChartSelector from "./ChartSelector";

const reportConfigurationReducer = (state, action) => {
    let { type } = action;
    switch (type) {
        case "setEntityList":
            return { entities: action.value };
        case "setEntitySelected":
            return { ...state, selectedEntity: action.value };
        case "setAttributeList":
            return { ...state, attributes: action.value };
        case "setSelectedAttribute":
            return { ...state, selectedAttribute: action.value };
        case "setChartType":
            return { ...state, chartType: action.value };
        default:
            break;
    }
};

const ReportConfiguration = ({ setSeries }) => {
    let [state, dispatch] = useReducer(reportConfigurationReducer, { entities: [] });
    let [entitiesLoad, setEntitiesLoaded] = useState([]);
    useEntityList(dispatch, setEntitiesLoaded, entitiesLoad);

    return (
        <div>
            <span onClick={() => { setSeries(state) }} className="loadRpt btn glyphicon glyphicon-stats" />
            <SeriesSelector {...state} dispatch={dispatch} />
            <ChartSelector dispatch={dispatch} />
        </div>
    );
};

export default ReportConfiguration;