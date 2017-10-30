var exec = require('cordova/exec');

exports.canOpenFile = function (fileURL, success, error) {
    exec(success, error, "FileOpener", "canOpenFile", [fileURL]);
};

exports.canOpenLocalFile = function (fileURL, mimeType, success, error) {
    exec(success, error, "FileOpener", "canOpenLocalFile", [fileURL, mimeType]);
};

exports.openFile = function (fileURL, success, error) {
    exec(success, error, "FileOpener", "openFile", [fileURL]);
};
