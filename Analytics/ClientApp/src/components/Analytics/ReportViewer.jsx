import React from "react";
import { useHighchart } from "./hooks/useHighchart";

const ReportViewer = ({ entity, attribute, title }) => {
    let values = [];
    useHighchart("target", { title: title, fieldValues: values });
    return <div id={"target"} />;
};

export default ReportViewer;