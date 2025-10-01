import minio from "./config/config.js";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

async function deleteFile() {
  try {
    const command = new DeleteObjectCommand({
      Bucket: "tes",    // nama bucket
      Key: "install-docker.png",      // nama file yang mau dihapus
    });

    const response = await minio.send(command);
    console.log("✅ File berhasil dihapus:", response);
  } catch (err) {
    console.error("❌ Gagal hapus file:", err);
  }
}

deleteFile();
