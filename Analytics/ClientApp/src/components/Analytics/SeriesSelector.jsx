import React from "react";
import css from "./SeriesSelector.css";

function getEnitiesElements(entities) {
    return entities.map((entity) => {
        return <option>{entity.Name}</option>;
    })
}

const SeriesSelector = ({ entities, attributes }) => {
    return (
        <div>
            <span>Count</span>
            <select>{getEnitiesElements(entities)}</select>
            <select disabled={true} />
        </div>
    );
};

export default SeriesSelector;