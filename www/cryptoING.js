/*global cordova, module*/

module.exports = {
    encrypt: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "cryptoING", “encrypt", [name]);
    }
};
