import React from "react";
import css from "SeriesSelector";

const SeriesSelector = ({ label }) => {
    return (
        <div>
            <span>{label}</span>
            <select />
            <select />
        </div>
    );
};

export default SeriesSelector;