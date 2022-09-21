function pretty(arg) {
    if (typeof arg === 'number') {
        return arg.toFixed(2);
    }
    else {
        return arg.trim();
    }
}
;
class SuccessResponce {
}
class ErrorResponce {
}
function handleResponce(responce) {
    if (responce instanceof SuccessResponce) {
        return { message: responce.body };
    }
    else {
        return { message: responce.code };
    }
}
