import { useState, useEffect } from "react";
import AnalyticsClient from "../../../Clients/AnalyticsClient";

export const useEntityList = (setEntityList, setentitiesLoaded, entitiesLoad) => {
    let [client] = useState(new AnalyticsClient());
    useEffect(() => {
        client.getEntityList().then((data) => {
            setEntityList({ type: "setEntityList", value: data });
            setentitiesLoaded(true);
        });  
    },
        [entitiesLoad]
    );
};