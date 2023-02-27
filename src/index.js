module.exports = function toReadable (number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero';
  }

  if (number < 10) {
    return units[number];
  }

  if (number < 20) {
    return teens[number - 10];
  }

  if (number < 100) {
    const ten = Math.floor(number / 10);
    const unit = number % 10;
    return `${tens[ten]}${unit !== 0 ? ' ' + units[unit] : ''}`;
  }

  if (number < 1000) {
    const hundred = Math.floor(number / 100);
    const remainder = number % 100;
    return `${units[hundred]} hundred${remainder !== 0 ? ' ' + toReadable(remainder) : ''}`;
  }

  if (number < 1000000) {
    const thousand = Math.floor(number / 1000);
    const remainder = number % 1000;
    return `${toReadable(thousand)} thousand${remainder !== 0 ? ' ' + toReadable(remainder) : ''}`;
  }

  if (number < 1000000000) {
    const million = Math.floor(number / 1000000);
    const remainder = number % 1000000;
    return `${toReadable(million)} million${remainder !== 0 ? ' ' + toReadable(remainder) : ''}`;
  }

  throw new Error('Number too large');
}
