import { useState } from "react";
import AnalyticsClient from "../../../Clients/AnalyticsClient";

export const useAttributeList = ({ setAttributeList }) => {
    let [client] = useState(new AnalyticsClient());

    return setAttributeList({ type: "setAttributeList", value: client.getAttributeList() });
};