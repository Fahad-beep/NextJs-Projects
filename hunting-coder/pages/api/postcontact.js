import * as fs from "fs/promises";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let data = req.body;
      let filesCount = await fs.readdir("contactdata");
      await fs.writeFile(
        `contactdata/${filesCount.length + 1}.json`,
        JSON.stringify(data)
      );
      res.status(200).json({
        message: "Data written successfully",
      });
    } catch (err) {
      res.status(500).json({
        message: "unable to write in file",
        error: err,
      });
    }
  } else {
    res.status(201).json({
      message: "get request from this route",
    });
  }
}
