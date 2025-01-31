// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs/promises";

export default async function handler(req, res) {
  console.log("------------------------------------------");

  const directories = await fs.readdir("blogdata");
  const content = await fs.readFile(`blogdata/${req.query.slug}`, "utf-8");
  if (!directories) {
    res.status(500).json({ message: "Directory not found" });
  } else if (!content && directories) {
    res.status(200).json({ directories: directories });
  } else {
    res.status(200).json({ directories: directories, content: content });
  }
}
