// eslint-disable-next-line no-unused-vars
const users = require('./users/users.service.js');
const message = require('./message/message.service.js');
module.exports = function (app) {
    app.configure(users);
    app.configure(message);
};
