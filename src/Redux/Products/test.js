let strPrice = "11,999.00";
function convertToNum(str) {
  str = str.split("");
  str = str.filter((elem) => !isNaN(elem));
  str = str.join("");
  const num = +str;
  return num;
}
convertToNum(strPrice);
