import express from "express";
import { api } from "./api";
import { getAudioFiles } from "./fileService";

const app = express();
app.use(api);

/* Route to get  files form the file system recursively
 */
app.get("/api/files", async (req, res) => {
  getAudioFiles().then((queryResult) => res.json(queryResult));
  res.end;
});

/* Route to prepare the helmut checkin
 */
app.get("/api/checkin", (req, res) => {
  console.log(req.body);
});

app.listen(3002, () => console.log("Server started at port 3002"));
