module.exports = function toReadable (number) {

    if (number === 0){
        
        return 'zero';
    }

    var Dn = Math.floor(number / 100); 
    number = number % 100; 
    var tn = Math.floor(number / 10);
    var one = Math.floor(number % 10);
    var res = "";

    var ones = Array("", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen");
    var tens = Array("", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety");

  

    if (Dn) {
        res +=  ones[Dn] + " hundred";
    }


    if (tn > 0 || one > 0) {
        if (!(res == "")) {
            res += " ";
        }
        if (tn < 2) {
            res += ones[tn * 10 + one];
        } else {

            res += tens[tn];
            if (one > 0) {
                res += (" " + ones[one]);
            }
        }
    }

    return res;
}


