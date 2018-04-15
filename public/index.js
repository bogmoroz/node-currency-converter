var converter = require('./converter.js');
window.$ = window.jQuery = require("./jquery-3.3.1.slim.min.js");

$(".inputSum").val(100);
$(".inputSum").select();
$(".inputSum").focus();

window.$(".convertButton").click(function() {
    var base = $(".inputCurrency").find(":selected").text();
    var target = $(".outputCurrency").find(":selected").text();
    var inputSum = $(".inputSum").val();
    var outputSum = $(".outputSum").val();

    if (base == target) {
        $(".outputSum").val(inputSum);
    } else {
        converter(base, target, inputSum);   
    }
});




