
function circleField(r1) {
    const r = Number(r1);
    if (isNaN(r))
        throw 'Invalid arguments exception. Both arguments should be numbers.'
    return Math.PI * r*r ;
}

function circleCircuit(r2) {
    const r = Number(r2);
    if (isNaN(r))
        throw 'Invalid arguments exception. Both arguments should be numbers.'
    return Math.PI*2*r ;
}


module.exports.circleField = circleField;
module.exports.circleCircuit = circleCircuit;