import dotenv from "dotenv";
import dns from "dns";
import path from "path";
import { fileURLToPath } from "url";

// Windows often fails SRV lookups via the system resolver; public DNS fixes mongodb+srv
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
