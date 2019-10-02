import React, { useReducer, useState } from "react";
import { useEntityList } from "./hooks/useEntityList";
import SeriesSelector from "./SeriesSelector";

const reportConfigurationReducer = (state, action) => {
    let { type } = action;
    switch (type) {
        case "setEntityList":
            return { entities: action.value };
        default:
            break;
    }
};

const ReportConfiguration = () => {
    let [state, dispatch] = useReducer(reportConfigurationReducer, { entities: [] });
    let [entitiesLoad, setEntitiesLoaded] = useState([]);
    useEntityList(dispatch, setEntitiesLoaded, entitiesLoad);

    return <SeriesSelector {...state}></SeriesSelector>;
};

export default ReportConfiguration;