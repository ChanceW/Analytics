import React, { useReducer, useState } from "react";
import { useEntityList } from "./hooks/useEntityList";
import SeriesSelector from "./SeriesSelector";

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
            <button typ={"button"} onClick={() => { setSeries(state) }} >
                Load Report
            </button>
            <SeriesSelector {...state} dispatch={dispatch} />
        </div>
    );
};

export default ReportConfiguration;