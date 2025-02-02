import * as fs from "fs/promises";

export default async function handler(req, res) {
  const content = await fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8");
  if (!content) {
    res.status(500).json({ message: "blog content not found" });
  } else {
    res.status(200).json(JSON.parse(content));
  }
}
