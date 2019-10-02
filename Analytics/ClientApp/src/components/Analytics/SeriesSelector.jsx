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

const reportConfigurationReducer = (state, action) => {
    let { type } = action;
    switch (type) {
        case "setEntitySelected":
            return { ...state, selectedEntity: action.value };
        case "setAttributeList":
            return { ...state, attributes: action.value };
        default:
            break;
    }
};

const SeriesSelector = ({ entities }) => {
    let [state, dispatch] = useReducer(reportConfigurationReducer, { attributes: [], selectedEntity: "" });
    useAttributeList(dispatch, state.selectedEntity);

    return (
        <div className={css.main}>
            <span>Count</span>
            <select
                onChange={(sel) => dispatch({
                    type: "setEntitySelected", value: sel.target.selectedOptions[0].value
                })}
                value={state.selectedEntity}
            >
                {getEnitiesElements(entities)}
            </select>
            <select>{getAttributeElements(state.selectedEntity, state.attributes)}</select>
        </div>
    );
};

export default SeriesSelector;