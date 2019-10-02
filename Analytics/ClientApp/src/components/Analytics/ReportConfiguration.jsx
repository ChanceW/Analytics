import React, { useReducer } from "react";
import { useEntityList } from "./hooks/useEntityList";
import SeriesSelector from "./SeriesSelector";

const ReportConfigurationReducer = (action) => {
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
    let [state, dispatch] = useReducer();
    useEntityList(dispatch);

    return <SeriesSelector {...state}></SeriesSelector>;
};

export default ReportConfiguration;