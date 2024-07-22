<p align="center"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# CSV to JSON Converter with Number Transformation

This repository contains a Node.js script that reads a CSV file, transforms its content, and writes it to a JSON file. The transformation converts each number in the CSV into an object containing an array with that number.

Most online CSV to JSON converters treat each row of the CSV as a JSON object and each column as a property of that object. Therefore, they do not usually provide an option to convert each row to a matrix.

## Features

- **CSV to JSON Conversion**: Utilizes the `csvtojson` library to read and convert CSV data into JSON format.
- **Data Transformation**: Maps each number in the CSV to an object with an array, enhancing data structure and usability.
- **File Handling**: Reads the CSV input from a specified file path and writes the transformed JSON output to a specified file path using the `fs` module.

## Prerequisites

- Node.js installed on your machine
- `csvtojson` library (can be installed via npm)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/csv-to-json-transformer.git
    cd csv-to-json-transformer
    ```

2. Install the required dependencies:
    ```bash
    npm install csvtojson
    ```

## Usage

1. Ensure your CSV file is located at the specified path in the script.

2. Update the file paths in the script if necessary:
    ```javascript

    bear in mind that file paths in Windows use backslashes (\), but in JavaScript strings,
    backslashes must be escaped with another backslash, which is why they look like this: \\.
    ```
3. Run the script:
    ```bash
    node index.js
    ```

## Code Explanation

The main script (`index.js`) does the following:
1. Requires the necessary libraries: `csvtojson` for converting CSV to JSON and `fs` for file system operations.
2. Reads the CSV file from the specified path.
3. Transforms each number in the CSV into an object with an array.
4. Writes the transformed JSON data to the specified output file.

### Example Code
```bash
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

