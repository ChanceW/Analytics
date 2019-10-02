import { useEffect } from "react";
import Highcharts from "highcharts";

const staticOptions = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hackathon Chart'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    }
};

const xAxis = (title, fieldValues) => {
    return {
        xAxis: {
            categories: fieldValues && fieldValues.length
                ? fieldValues[0].map(fv => fv.name) 
                : "placeholder",
            title: title
        }
    };
};

const yAxis = (title) => {
    return {
        yAxis: {
            min: 0,
            title: {
                text: title
            }
        }
    };
};

const series = (valueCountPairs) => {
    return {
        series: valueCountPairs && valueCountPairs.length ? valueCountPairs[0].map(vcp => {
            return { name: vcp.name, data: [vcp.count] }
        }) : []
    };
};

const getSeriesAndAxisProperties = (valueCountPairs, title) => {
    return {
        ...yAxis(title),
        ...xAxis(title, valueCountPairs),
        ...series(valueCountPairs)
    }
};

export const useHighchart = (targetId, valueCountPairs, title = "test") => {
    useEffect(() => {
        Highcharts.chart(targetId, {
            ...staticOptions,
            ...getSeriesAndAxisProperties(valueCountPairs, title)
        }),
            [valueCountPairs]
    }); 
};