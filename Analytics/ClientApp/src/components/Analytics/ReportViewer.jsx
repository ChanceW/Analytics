import React, { useState, useMemo } from "react";
import { useHighchart } from "./hooks/useHighchart";
import AnalyticsClient from "../../Clients/AnalyticsClient";

const ReportViewer = ({ selectedEntity, selectedAttribute, chartType, title }) => {
    let [client] = useState(new AnalyticsClient());
    let [series, setSeries] = useState();
    useMemo(() => {
        client.getSeries(selectedEntity, selectedAttribute).then((series) => {
            setSeries(series);
        });
    }, [selectedEntity, selectedAttribute]);

    useHighchart("target", series, chartType || "pie", title);

    return <div id={"target"} style={{height: "100%"}}/>;
};

export default ReportViewer;