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
