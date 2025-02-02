import * as fs from "fs/promises";
export default async function handler(req, res) {
  if (req.method === "GET") {
    let file = await fs.readFile(`homedata/homedata.json`, "utf-8");
    if (file.length <= 0) {
      return res
        .status(404)
        .json({ message: "could not find any home data file" });
    }
    return res.status(200).json(JSON.parse(file).content);
  }
}
