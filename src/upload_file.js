import minio from "./config/config.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

async function uploadFile() {
  const bucketName = "tes";
  const filePath = "../assets/install-docker.png";

  const upload = new PutObjectCommand({
    Bucket: bucketName,
    Key: "install-docker.png",
    Body: fs.createReadStream(filePath),
  });

  await minio.send(upload);
  console.log("✅ File uploaded!");
}

uploadFile();
