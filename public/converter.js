var fixer = require('fixer-io-node');

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

module.exports = function(baseName, targetName, baseSum) {
    fixer.base(baseName).then(function(result){
        var exchangeRate = result.rates[targetName];
        var covertedSum = round(baseSum * exchangeRate, 2);
        $(".outputSum").val(covertedSum);
        $(".rateDate").text(result.date);
    }).catch(function(error){
        console.log("Error: " + error)
    })
}