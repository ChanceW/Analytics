import BaseClient from "./BaseClient";

class AnalyticsClient {
    constructor() {
        this.client = new BaseClient({ url: `` });
    }

    getEntityList() {
        this.client.getJSON("meta/entities");
    }

    getAttributesList() {
        this.client.getJSON("meta/attributes");
    }
}

export default AnalyticsClient;