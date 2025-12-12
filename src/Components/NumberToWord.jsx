import React from 'react'

function NumberToWord() {

  const convertNumberToWords = (number) => {

    const units = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];

    const tens = [
      "",
      "Ten",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    const teens = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];

    const crore = "Crore";
    const lakh = "Lakh";
    const arab = "Arab";
    const currency = "Rupees";
    const paisa = "Paisa";
    
    if (number === 0) {
      return "Zero " + currency;
    }

    let words = "";
    
    if (number >= 1000000000) {
      words +=
        convertNumberToWords(Math.floor(number / 1000000000)) +
        " " +
        arab +
        " ";
      number %= 1000000000;
    }
    
    if (number >= 10000000) {
      words +=
        convertNumberToWords(Math.floor(number / 10000000)) + " " + crore + " ";
      number %= 10000000;
    }

    if (number >= 100000) {
      words +=
        convertNumberToWords(Math.floor(number / 100000)) + " " + lakh + " ";
      number %= 100000;
    }

    if (number >= 1000) {
      words += convertNumberToWords(Math.floor(number / 1000)) + " Thousand ";
      number %= 1000;
    }

    if (number >= 100) {
      words += convertNumberToWords(Math.floor(number / 100)) + " Hundred ";
      number %= 100;
    }

    if (number >= 20) {
      words += tens[Math.floor(number / 10)] + " ";
      number %= 10;
    } else if (number >= 10) {
      console.log(number);
      words += teens[number - 10] + " ";
      number = 0;
      console.log(words);
    }

    if (number > 0) {
      words += units[number] + " ";
    }
    const decimalPart = Math.round((number % 1) * 100);
    console.log(decimalPart);
    if (decimalPart > 0) {
      words += "and" + decimalPart + " " + paisa + "only ";
    }
    
    console.log(words);
    return words.trim() + " ";
  };

  let grandTotal = grandtotalAmount; // Example value
  let amountWord = convertNumberToWords(grandTotal);
  console.log(amountWord);
 
  return (
    <>
      <h1>NumberToWord</h1>
      <h2>{amountWord}</h2>
    </>
  )
}

export default NumberToWord