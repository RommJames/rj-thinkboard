import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_NONSRV);
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("Error connecting to MONGODB: ", error);
    process.exit(1); // exit with failure
  }
};

// export const connectDB = async () => {
//   try {
//     // Try SRV connection first
//     await mongoose.connect(process.env.MONGO_URI_SRV);
//     console.log("✅ Connected to MongoDB using SRV URI");
//   } catch (error) {
//     console.error("⚠️ Failed to connect with SRV URI:", error.message);

//     // Check if it's a DNS timeout (e.g. ETIMEOUT)
//     if (error.code === "ETIMEOUT" || error.message.includes("queryTxt")) {
//       try {
//         // Try the non-SRV URI
//         await mongoose.connect(process.env.MONGO_URI_NONSRV);
//         console.log("✅ Connected to MongoDB using NONSRV URI");
//       } catch (nonSrvError) {
//         console.error(
//           "❌ Failed to connect with NONSRV URI:",
//           nonSrvError.message
//         );
//         process.exit(1);
//       }
//     } else {
//       console.error(
//         "❌ Non-network error while connecting to MongoDB:",
//         error.message
//       );
//       process.exit(1);
//     }
//   }
// };
