var utils = {};

utils.getUserIdFromSession = function (sessionString) {
    if (!sessionString) {
        return
    }

    var sessionBody = new Buffer(sessionString, 'base64').toString('utf8');
    var jsonBody = JSON.parse(sessionBody);
    return jsonBody.passport.user;
};

module.exports = utils;
