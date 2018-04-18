'use strict'
/**
 *
 * @param options
 * @returns {middleware}
 *
 */
function applicationHealth(options) {
    var opts = options || {}
    var path = opts.path || '/eyasactuator/health'

    return function applicationHealth(req, res, next) {
        if (req.url !== path) {
            next()
            return
        }

        if (req.method !== 'GET' && req.method !== 'POST') {
            res.statusCode = req.method === 'OPTIONS' ? 200 : 405
            res.setHeader('Allow', 'GET, POST, OPTIONS')
            res.setHeader('Content-Length', '0')
            res.end()
            return
        }

        res.send({
            status: 'UP'
        })
    };
}

exports = module.exports = applicationHealth


