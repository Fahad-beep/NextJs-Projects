import * as fs from "fs/promises";
export default async function handler(req, res) {
  const { count } = req.query;
  let blogDetails = [];
  let directories = await fs.readdir("blogdata");
  if (count) directories = directories.slice(0, count);

  if (!directories) {
    res.status(500).json({ message: "Directory not found" });
  } else {
    for (let i = 0; i < directories.length; i++) {
      const item = directories[i];
      const blogData = await fs.readFile("blogdata/" + directories[i], "utf-8");
      blogDetails.push(JSON.parse(blogData));
    }
    res.status(200).json(blogDetails);
  }
}
