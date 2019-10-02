import React, { useReducer } from "react";
import { useEntityList } from "./hooks/useEntityList";
import SeriesSelector from "./SeriesSelector";

const reportConfigurationReducer = (state, action) => {
    let { type } = action;
    switch (type) {
        case "setEntityList":
            return { entities: action.value };
        case "setAttributeList":
            break;
        default:
            break;
    }
};

const ReportConfiguration = () => {
    let [state, dispatch] = useReducer(reportConfigurationReducer, { entities: [] });
    useEntityList(dispatch, state.entities);

    return <SeriesSelector {...state}></SeriesSelector>;
};

export default ReportConfiguration;