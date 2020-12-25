const ftoc = function(temp) {
  let celsius = ((temp-32) * (5/9));
	return Math.round(celsius * 10) / 10;
}

const ctof = function(temp) {
  let farenheit = ((temp * (9/5)) + 32);
  return Math.round(farenheit * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
