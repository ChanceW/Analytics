﻿import React, { useState, useMemo } from "react";
import { useHighchart } from "./hooks/useHighchart";
import AnalyticsClient from "../../Clients/AnalyticsClient";

const ReportViewer = ({ selectedEntity, selectedAttribute, title }) => {
    if (!selectedEntity) {
        selectedEntity = "product";
    }

    if (!selectedAttribute) {
        selectedAttribute = "color";
    }

    let [client] = useState(new AnalyticsClient());
    let [series, setSeries] = useState();
    useMemo(() => {
        client.getSeries(selectedEntity, selectedAttribute).then((series) => {
            setSeries(series);
        });
    }, [selectedEntity, selectedAttribute]);

    useHighchart("target", series, title);

    return <div id={"target"} />;
};

export default ReportViewer;