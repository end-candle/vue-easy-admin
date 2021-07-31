/**
 * 发送异常信息
 * @param res express res对象
 * @param statusCode 响应状态码：默认500
 * @param errMsg 错误信息
 * @param errCode 错误代码
 */
function sendError(res, { statusCode = 500, errMsg, errCode }) {
    res.status(statusCode).send({
        errMsg,
        errCode
    });
}

module.exports = {
    sendError
};
