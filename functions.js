function arrayNum(Num) {
    return Num.sort((a, b) => a - b)
}

function arrayCar(Cars) {
    return Cars.sort()
}

module.exports = {
    arrayNum,
    arrayCar
}