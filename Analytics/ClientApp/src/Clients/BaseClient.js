import $ from "jquery";

class BaseClient {
    constructor(options) {
        this.baseUrl = "http://localhost/api" + options.url;
    }

    getJSON(route, query) {
        return $.ajax(this.baseUrl + route,
            {
                cache: false,
                dataType: "json",
                data: query,
                method: "GET"
            });
    }

    putJSON(route, data) {
        return $.ajax(this.baseUrl + route,
            {
                cache: false,
                contentType: "application/json",
                dataType: "json",
                data: `${JSON.stringify(data)}`,
                method: "PUT"
            });
    }

    postJSON(route, data) {
        return $.ajax(this.baseUrl + route,
            {
                cache: false,
                contentType: "application/json",
                dataType: "json",
                data: `${JSON.stringify(data)}`,
                method: "POST"
            });
    }
}

export default BaseClient;