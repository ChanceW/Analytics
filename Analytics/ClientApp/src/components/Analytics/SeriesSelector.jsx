import React, { useReducer, useState } from "react";
import { useAttributeList } from "./hooks/useAttributeList";
import css from "./SeriesSelector.css";

function getEnitiesElements(entities) {
    return entities.map((entity, idx) => {
        return <option key={idx}>{entity.Name}</option>;
    })
}

function getAttributeElements(selectedEntity, attributes) {
    if (!attributes) {
        return [];
    }

    const attrs = attributes.filter((attr) => {
        return attr.Entity_Name === selectedEntity;
    });
    return attrs.map((attribute, idx) => {
        return <option key={idx}>{attribute.Attribute_Name}</option>;
    });
}

const SeriesSelector = ({ dispatch, entities, selectedEntity, attributes, selectedAttribute }) => {
    useAttributeList(dispatch, selectedEntity);

    return (
        <div className={css.main}>
            <span>Count</span>
            <select
                onChange={(sel) => dispatch({
                    type: "setEntitySelected", value: sel.target.selectedOptions[0].value
                })}
                value={selectedEntity} >
                {
                    getEnitiesElements(entities)
                }
            </select>
            <select
                onChange={(sel) => dispatch({
                    type: "setSelectedAttribute", value: sel.target.selectedOptions[0].value
                })}
                value={selectedAttribute} >
                {
                    getAttributeElements(selectedEntity, attributes)
                }
            </select>
        </div>
    );
};

export default SeriesSelector;