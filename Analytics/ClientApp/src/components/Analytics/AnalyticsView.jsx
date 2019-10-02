import React from "react";
import css from "./AnalyticsView.css";
import ReportConfiguration from "./ReportConfiguration";
import ReportViewer from "./ReportViewer";

const AnalyticsView = (props) => {
    return (
        <div className={css.main}>
            <ReportConfiguration className={css.left} />
            <ReportViewer className={css.right} />
        </div>
    );
};

export default AnalyticsView;