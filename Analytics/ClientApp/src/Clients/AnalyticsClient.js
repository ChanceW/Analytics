import BaseClient from "./BaseClient";

class AnalyticsClient {
    constructor() {
        this.client = new BaseClient({ url: `` });
    }

    getEntityList() {
        return this.client.getJSON("meta/entities");
    }

    getAttributesList() {
        return this.client.getJSON("meta/attributes");
    }
}

export default AnalyticsClient;