//http://localhost:3000/api/blog
import * as fs from "fs/promises";
export default async function handler(req, res) {
  console.log("----------------blogs--------------------------");
  const directories = await fs.readdir("blogdata");
  let blogDetails = [];

  if (!directories) {
    res.status(500).json({ message: "Directory not found" });
  } else {
    for (let i = 0; i < directories.length; i++) {
      const item = directories[i];
      //   console.log("directories[", i, "]: ", item);
      const blogData = await fs.readFile("blogdata/" + directories[i], "utf-8");
      blogDetails.push(JSON.parse(blogData));
    }
    // console.log("blogDetails: ", blogDetails);
    res.status(200).json(blogDetails);
  }
}
