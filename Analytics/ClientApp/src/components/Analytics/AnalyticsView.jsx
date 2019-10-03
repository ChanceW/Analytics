import React, { useState } from "react";
import css from "./AnalyticsView.css";
import ReportConfiguration from "./ReportConfiguration";
import ReportViewer from "./ReportViewer";

const AnalyticsView = (props) => {
    let [chartConfig, setChartConfig] = useState();

    return (
        <div className="main">
            <div className="left">
                <ReportConfiguration setSeries={setChartConfig} />
            </div>
            <div className="right">
                <ReportViewer {...chartConfig} />
            </div>
        </div>
    );
};

export default AnalyticsView;