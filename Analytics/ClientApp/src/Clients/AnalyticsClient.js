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

    getSeries(entityName, attributeName) {
        return this.client.getJSON(`memberdata/getSeries/${entityName}/`, { attributes: attributeName });
    }
}

export default AnalyticsClient;