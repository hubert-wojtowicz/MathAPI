
function circleField(r) {
    const r = Number(r);
    if (isNaN(r))
        throw 'Invalid arguments exception. Both arguments should be numbers.'
    return Math.PI * r*r ;
}

function circleCircuit(r) {
    const r = Number(r);
    if (isNaN(r))
        throw 'Invalid arguments exception. Both arguments should be numbers.'
    return 2 * Math.PI *r ;
}


module.exports.circleField = circleField;
module.exports.circleCircuit = circleCircuit;