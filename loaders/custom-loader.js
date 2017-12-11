module.exports = function(source) {
    let content = JSON.parse(source);
    for (let key in content) {
        if (!isNaN(parseFloat(key))) {
            delete(content[key]);
        }
    }
    return 'module.exports = ' + JSON.stringify(content);
}

