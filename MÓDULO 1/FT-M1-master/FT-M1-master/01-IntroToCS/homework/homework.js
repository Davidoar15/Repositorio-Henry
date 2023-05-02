'use strict';

function BinarioADecimal(num) {
   let sum = 0;
   for (let i = 0; i < num.length; i++){
      sum += +num[i]*2**(num.length-(1+i));
   } 
   return sum
}

function DecimalABinario(num) {
   let binario = (num % 2).toString();
   for (; num > 1; ) {
      num = parseInt(num / 2);
      binario =  (num % 2) + (binario);
   }
    return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
