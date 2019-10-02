import BaseClient from "./baseClient";

class AnalyticsClient {
    constructor() {
        this.client = new BaseClient({ url: `/meta/` });
    }

    getEntityList() {
        //return this.client.getJSON(`entities/`);
        return [
            { Name: "product" },
            { name: "customer" }
        ];
    }
}

export default AnalyticsClient;