var numInput
var baseFrom
var baseTo
var ConvertBase = function(num) {
    return {
        from: function(baseFrom) {
            return {
                to: function(baseTo) {
                    var a = parseInt(num, baseFrom);
                    if (a.toString(baseFrom) == num) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    } else {
                        return NaN
                    }

                }
            };
        }
    };
};

function pad(n, width) {
    z = '0';
    n = n + '';
    if (n.length <= 8) {
    if (n != 'NaN') {
      document.getElementById("errCalc").innerHTML = ""
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    } else {
        document.getElementById("errCalc").innerHTML = "Число некоректне"
        return '00000000'
    }
  }
    else {
            document.getElementById("err").innerHTML = "Число завелике"
            return '00000000'
    }
}

function Convert() {
    numInput = document.getElementById("inp").value;
    baseFrom = document.getElementById("baseFrom").value;
    baseTo = document.getElementById("baseTo").value;
    document.getElementById('res').value = ConvertBase(numInput).from(baseFrom).to(baseTo);
    document.getElementById('myNum').value = pad(ConvertBase(numInput).from(baseFrom).to(2), 8);
}
