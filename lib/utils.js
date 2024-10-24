"use strict";
exports.getProperties = (instance) => {
    Object.getOwnPropertyNames(instance).forEach((property) => {
        Reflect.set(instance, `_${property}`, Reflect.get(instance, property));
        Reflect.set(instance, property, (value) => {
            instance[`_${property}`] = value;
            return instance;
        });
    });
    return instance;
};
exports.toSuffixKey = (suffix) => {
    return suffix[0].toUpperCase() + suffix.substring(1);
}

