"use strict";

function calculator() {
  let result = 0;
  return {
    set: (setValue) => {
       return result = setValue;
    },
    add: (addValue) => {
      return result = result + addValue;
    },
    sub: (subValue) => {
      return result = result - subValue;
    },
    mult: (multValue) => {
      return result = result * multValue;
    },
    div: (divValue) => {
      return result = result / divValue;
    },
  };
};

module.exports = calculator();