import mongoose from "mongoose";
import { appendFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEBUG_LOG = path.resolve(__dirname, "../../debug-d45d29.log");

// #region agent log
const debugLog = (message, data, hypothesisId) => {
  try {
    appendFileSync(
      DEBUG_LOG,
      JSON.stringify({
        sessionId: "d45d29",
        hypothesisId,
        location: "mongodb.js",
        message,
        data,
        timestamp: Date.now(),
      }) + "\n"
    );
  } catch (_) {}
};
// #endregion

const buildMongoUri = (base) => {
  const dbName = process.env.DB_NAME || "appointy";
  if (!base) return null;

  const hasDbPath = /mongodb(\+srv)?:\/\/[^/]+\/[^/?]+/.test(base);
  if (hasDbPath) return base;

  const [hostPart, query = ""] = base.split("?");
  const uri = `${hostPart.replace(/\/$/, "")}/${dbName}`;
  return query ? `${uri}?${query}` : uri;
};

const connectDB = async () => {
  const remote = buildMongoUri(process.env.MONGODB_URI || process.env.MONGO_URI);
  const local =
    process.env.MONGO_URI_LOCAL ||
    "mongodb://127.0.0.1:27017/appointy";

  // Try local first when configured so dev signup/login works if Atlas is unreachable
  const candidates = [local, remote].filter(Boolean);

  // #region agent log
  debugLog("connect_attempt_start", { candidateCount: candidates.length }, "A");
  // #endregion

  for (const uri of candidates) {
    const label = uri.includes("127.0.0.1") ? "local" : "remote";
    try {
      if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
      }
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: uri.includes("127.0.0.1") ? 5000 : 6000,
      });
      console.log(`Database Connected (${label})`);
      // #region agent log
      debugLog(
        "connect_success",
        { label, readyState: mongoose.connection.readyState },
        "A"
      );
      // #endregion
      return;
    } catch (error) {
      console.warn(`MongoDB ${label} failed:`, error.message);
      // #region agent log
      debugLog("connect_failed", { label, error: error.message }, "A");
      // #endregion
    }
  }

  console.error(
    "All MongoDB connections failed. Start local MongoDB or whitelist your IP in Atlas."
  );
  // #region agent log
  debugLog("connect_all_failed", {}, "A");
  // #endregion
};

export default connectDB;
