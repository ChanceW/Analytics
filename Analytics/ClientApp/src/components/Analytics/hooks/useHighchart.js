import { useEffect } from "react";
import Highcharts from "highcharts";

const staticOptions = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic World Population by Region'
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
            categories: fieldValues.length
                ? fieldValues.map(fv => fv.name) 
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

const getSeriesProperties = (chartProperties) => {

};

const useHighchart = (targetId , chartProperties) => {
    useEffect(() => {
        Highcharts.chart({
            ...staticOptions,
            ...getSeriesProperties(chartProperties)
        }),
            [chartProperties]
    });
};