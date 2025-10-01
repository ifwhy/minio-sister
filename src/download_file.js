import fs from 'fs';
import minio from "./config/config.js";
import { GetObjectCommand } from "@aws-sdk/client-s3";

async function downloadFile() {
  const bucketName = "tes";

  const getObject = new GetObjectCommand({
    Bucket: bucketName,
    Key: "install-docker.png",
  });

  const response = await minio.send(getObject);
  const fileStream = fs.createWriteStream("../downloaded/install-docker.png");
  response.Body.pipe(fileStream);
  console.log("📥 File downloaded!");
}

downloadFile();
