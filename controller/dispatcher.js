const {defaultController} = require('./defaultController');

const DEFAULT = '/default';
const dispatch = function (path, request, response) {
    console.log('转发请求', path);
    const controller = this.dispatchMap[path];
    if (controller) {
        controller.doReq(request, response);
    } else this.dispatchMap[DEFAULT].doReq(request, response);
}

const dispatcher = {
    dispatchMap: {
        '/default': defaultController
    },
    dispatch,
}

exports.dispatcher = dispatcher;