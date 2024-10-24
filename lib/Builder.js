"use strict";
const { getProperties } = require("./utils");
const Builder = function (target) {
    return class BuilderTarget extends target {
        static builder() {
            const instance = new this();
            return (0, getProperties)(instance);
        }
        build() {
            const properties = Object.getOwnPropertyNames(this);
            properties.forEach((property) => {
                const index = properties.indexOf(property.substring(1));
                if (property.startsWith("_") && index !== -1) {
                    const publicKey = properties[index];
                    if (publicKey) {
                        Reflect.set(this, publicKey, Reflect.get(this, property));
                        Reflect.deleteProperty(this, property);
                    }
                }
            });
            return this;
        }
    };
};
module.exports = Builder;
