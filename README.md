CSV to JSON Converter with Number Transformation

This program reads a CSV file, transforms its content, and writes it to a JSON file. Specifically, each number in the CSV is converted into an object containing an array with that number.
Key Features:

    CSV to JSON Conversion: Utilizes the csvtojson library to read and convert CSV data into JSON format.
    Data Transformation: Maps each number in the CSV to an object with an array, enhancing data structure and usability.
    File Handling: Reads the CSV input from a specified file path and writes the transformed JSON output to a specified file path using the fs module.
