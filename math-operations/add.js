
function add(a, b) {
    const an = Number(a);
    const bn = Number(b);
    if (isNaN(an) || isNaN(bn))
        throw 'Invalid arguments exception. Both arguments should be numbers.'
    return an + bn;
}

module.exports.add = add;

// zmiana Krzysztof Ł