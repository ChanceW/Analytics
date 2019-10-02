import { useState, useEffect } from "react";
import AnalyticsClient from "../../../Clients/AnalyticsClient";

export const useAttributeList = (setAttributeList, entitySelected) => {
    let [client] = useState(new AnalyticsClient());

    useEffect(() => {
        client.getAttributesList().then((data) => {
            setAttributeList({ type: "setAttributeList", value: data });
        });
    },
        [entitySelected]
    );
};