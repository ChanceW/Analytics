import React, { useState } from "react";
import css from "./AnalyticsView.css";
import ReportConfiguration from "./ReportConfiguration";
import ReportViewer from "./ReportViewer";

const AnalyticsView = (props) => {
    let [chartConfig, setChartConfig] = useState();

    return (
        <div className={css.main}>
            <ReportConfiguration setSeries={setChartConfig} className={css.left} />
            <ReportViewer {...chartConfig} className={css.right} />
        </div>
    );
};

export default AnalyticsView;