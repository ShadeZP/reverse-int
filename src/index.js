module.exports = function reverse (n) {
    let k = 1;
    if (n<0) {
        k=-1;
    }
    return +(n*k).toString().split('').reverse().join('');
}
