<p align="center"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

CSV to JSON Converter with Number Transformation

This program reads a CSV file, transforms its content, and writes it to a JSON file. Specifically, each number in the CSV is converted into an object containing an array with that number.
Key Features:

    CSV to JSON Conversion: Utilizes the csvtojson library to read and convert CSV data into JSON format.
    Data Transformation: Maps each number in the CSV to an object with an array, enhancing data structure and usability.
    File Handling: Reads the CSV input from a specified file path and writes the transformed JSON output to a specified file path using the fs module.

    const csv = require("csvtojson");
    
const fs = require("fs");

csv()
  .fromFile("C:\\Users\\XXX\\Desktop\\XXXX\\XXX\\XXXX\\XXX.csv")
  .then((jsonObj) => {
    const transformedObj = jsonObj.map((item) => {
      return {
        numbers: [parseInt(Object.values(item)[0])],
      };
    });
    fs.writeFileSync(
      "C:\\Users\\XXX\\Desktop\\XXXX\\XXX\\XXXX\\bonus.json",
      JSON.stringify(transformedObj, null, 2)
    );
  });

