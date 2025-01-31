// http://localhost:3000/api/getBlogs?slug=how-to-learn-flask.json
import * as fs from "fs/promises";

export default async function handler(req, res) {
  console.log("----------------get blogs--------------------------");

  const content = await fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8");
  if (!content) {
    res.status(500).json({ message: "blog content not found" });
  } else {
    console.log("content: ", content);
    res.status(200).json(JSON.parse(content));
  }
}
