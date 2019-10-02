import React, { useReducer } from "react";

const ReportConfigurationReducer = (action) => {
    let { type } = action;
    switch (type) {
        case "setEntityList":
            break;
        case "setAttributeList":
            break;
        default:
            break;
    }
};

const ReportConfiguration = () => {
    let [state, dispatch] = useReducer();
};

export default ReportConfiguration;