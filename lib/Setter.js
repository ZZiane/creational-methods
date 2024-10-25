"use strict";

const { toSuffixKey } = require("./utils");

const Setter = function (target) {
    Object.getOwnPropertyNames(new target()).forEach((property) => {
        target.prototype[`set${toSuffixKey(property)}`] = function (value) {
            this[property] = value;
        };
    });
    return target;
};
module.exports = Setter;
