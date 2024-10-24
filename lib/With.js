"use strict";
const { toSuffixKey } = require("./utils");
const With = function (target) {
    Object.getOwnPropertyNames(new target()).forEach((property) => {
        target.prototype[`with${toSuffixKey(property)}`] = function (value) {
            this[property] = value;
            return this;
        };
    });
    return target;
};
module.exports = With;
