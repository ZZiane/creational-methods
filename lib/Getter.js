"use strict";

const { toSuffixKey } = require("./utils");

const Getter = function (target) {
    Object.getOwnPropertyNames(new target()).forEach((property) => {
        target.prototype[`get${toSuffixKey(property)}`] = function () {
            return this[property];
        };
    });
    return target;
};
module.exports = Getter;
