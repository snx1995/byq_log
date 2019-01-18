const doReq = function (request, response) {
    console.log('default controller received request')
}

const defaultController = {
    doReq
}

exports.defaultController = defaultController;