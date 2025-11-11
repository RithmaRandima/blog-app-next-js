import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://randy:1234@projectcluste.qrp9tkj.mongodb.net/blog-app"
    );
    console.log("✅ MONGODB CONNECTED");
  } catch (error) {
    console.error("❌ DB CONNECTION ERROR:", error.message);
  }
};
