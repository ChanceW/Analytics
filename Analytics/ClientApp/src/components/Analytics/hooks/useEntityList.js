import { useState, useEffect } from "react";
import AnalyticsClient from "../../../Clients/AnalyticsClient";

export const useEntityList = (setEntityList, entities) => {
    let [client] = useState(new AnalyticsClient());
    useEffect(() => {
        setEntityList({ type: "setEntityList", value: client.getEntityList() });
    },
        [entities]
    );
};