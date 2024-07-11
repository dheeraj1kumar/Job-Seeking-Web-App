import app from "./app.js";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Specify the port for the server


// Start the server on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
