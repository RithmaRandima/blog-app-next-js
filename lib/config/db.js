import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://randy:1234@projectcluste.qrp9tkj.mongodb.net/blog-app"
  );
  console.log("MONGODB CONNECTED ");
};
