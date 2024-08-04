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
    ```

2. Install the required dependencies:
    ```bash
    npm install
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

## Importing to MONGO with mongoimport tool

To import your CSV dataset to MongoDB, you can use the mongoimport tool. Here are the steps:
1.Make sure you have MongoDB installed on your local machine and the MongoDB service is running.
2.Open the command prompt (CMD on Windows).
3.Navigate to the directory where your CSV file is located.
4.Run the following command:

```javascript
mongoimport --uri yourDatabaseName --collection yourCollectionName --type json --file yourfile.json --jsonArray
```

Replace yourDatabaseName with the name of your database or uri, yourCollectionName with the name of your collection, and yourfile.json with the name of your file.

This command will import the JSON file to the specified collection in the specified database.

Note: If your database requires authentication, you will need to add the --username and --password options to the mongoimport command.

### Example Code
```bash
const fs = require("fs");
const path = require("path");

function generateTree(directoryPath, indent = "", isLast = true) {
  const items = fs.readdirSync(directoryPath);
  items.forEach((item, index) => {
    // ignore directories
    if (item === "node_modules" || item === ".git") {
      return; // skip then
    }

    const itemPath = path.join(directoryPath, item);
    const stats = fs.statSync(itemPath);

    // symbols
    const symbol = isLast ? "└──" : "├──";

    console.log(`${indent}${symbol} ${item}${stats.isDirectory() ? "/" : ""}`); // to add / to directories

    if (stats.isDirectory()) {
      // symbol for subdirectories
      const childIndent = `${indent}${isLast ? "    " : "│   "}`;
      // recursive call to the subdirectory
      generateTree(itemPath, childIndent, index === items.length - 1);
    }
  });
}

// paste your path here and run node script-alternative
const projectDirectory =
  "C:\\Users\\user\\Desktop\\project\\fullstack-project\\frontend";

console.log("Tree:");
generateTree(projectDirectory);
