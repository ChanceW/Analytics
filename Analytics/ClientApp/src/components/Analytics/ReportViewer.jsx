import React, { useState, useMemo } from "react";
import { useHighchart } from "./hooks/useHighchart";
import AnalyticsClient from "../../Clients/AnalyticsClient";

const ReportViewer = ({ entity, attribute, title }) => {
    if (!entity) {
        entity = "product";
    }

    if (!attribute) {
        attribute = "color";
    }

    let [client] = useState(new AnalyticsClient());
    let [series, setSeries] = useState();
    useMemo(() => {
        client.getSeries(entity, attribute).then((series) => {
            setSeries(series);
        });
    }, [entity, attribute]);

    useHighchart("target", series, title);

    return <div id={"target"} />;
};

export default ReportViewer;