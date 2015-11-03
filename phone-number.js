function PhoneNumber(phone) {
    this.phone = phone;
}

PhoneNumber.prototype.number = function () {
    phoneClean = this.phone.replace(/[^\d]/g, "");
    var result = phoneClean.toString();
    console.log(typeof (b))
    var c = result.charAt(0);
    console.log(c + 'c');

    if (result.length === 10) {
        return result;
    } else if (result.length === 11 && c === '1') {
        var phoneClean2 = result.substring(1);
        console.log(phoneClean2 + ' 2');
        return phoneClean2;
    } else {
        return '0000000000'
        return phoneClean;
    }
}

PhoneNumber.prototype.areaCode = function () {
    var areaCode = this.phone.slice(0, 3)
    return areaCode;
}

PhoneNumber.prototype.toString = function () {
    var areaCode = this.phone.slice(0, 3);
    var first = this.phone.slice(3, 6);
    var second = this.phone.slice(6, 10);
    var output = '(' + areaCode + ') ' + first + '-' + second;
    return output
}
module.exports = PhoneNumber;