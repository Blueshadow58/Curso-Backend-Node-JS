"use strict";
class Product {
    constructor(id, name, description) {
        this.id = id;
        this.timestamp = Date.now();
        this.name = name;
        this.description = description;
    }
}
