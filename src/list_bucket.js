import minio from "./config/config.js";
import { ListBucketsCommand } from '@aws-sdk/client-s3';

async function listBuckets() {
  const data = await minio.send(new ListBucketsCommand({}));
  console.log("Buckets:", data.Buckets);
}

listBuckets();
