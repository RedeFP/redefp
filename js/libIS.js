function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function isValid(val) {
    if(val.error !== true) {
        return true;
    } else {
        return false;
    }
}