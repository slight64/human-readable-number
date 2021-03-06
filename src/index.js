module.exports = function toReadable(number) {
    const beforeTwenty = [
        '',
        'one ',
        'two ',
        'three ',
        'four ',
        'five ',
        'six ',
        'seven ',
        'eight ',
        'nine ',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'];
    const beforeNingthyNine = [
        'twenty ',
        'thirty ',
        'forty ',
        'fifty ',
        'sixty ',
        'seventy ',
        'eighty ',
        'ninety '];
    const hundred = 'hundred ';
    function beforeTwentyf(num) {
        return num % 100 < 20 ? beforeTwenty[num % 100] : '';
    }
    function tens(num) {
        return num % 100 > 19 ? beforeNingthyNine[parseInt(((num % 100) / 10) - 2)] + beforeTwentyf(num % 10): '';
    }
    function hundereeds(num) {
        return num > 99 ? beforeTwenty[parseInt(num / 100)] + hundred : '';
    }
    return number === 0 ? 'zero' : (hundereeds(number) + tens(number) + beforeTwentyf(number)).trim()
};
