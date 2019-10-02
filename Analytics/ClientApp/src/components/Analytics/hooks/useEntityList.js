import { useState } from "react";
import AnalyticsClient from "../../../../../Clients/AnalyticsClient";

export const useEntityList = ({ setEntityList }) => {
    let [client] = useState(new AnalyticsClient());

    return client.getEntityList();
};