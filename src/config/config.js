import { S3Client } from "@aws-sdk/client-s3";
import { config } from "dotenv";

config();

const minio = new S3Client({
  region: process.env.MINIO_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY || "admin",
    secretAccessKey: process.env.MINIO_SECRET_KEY || "admin123",
  },
  endpoint: process.env.MINIO_ENDPOINT || "http://localhost:9000",
  forcePathStyle: true,
});

export default minio;
