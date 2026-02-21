// Load .env.local manually
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');
console.log("Reading from:", envPath);
console.log("File exists:", fs.existsSync(envPath));

dotenv.config({ path: envPath });

const key = process.env.GOOGLE_PRIVATE_KEY;

console.log("\n=== .env.local DEBUG ===");
console.log("Key length:", key?.length);
console.log("Type:", typeof key);
console.log("First 100 chars:");
console.log(key?.substring(0, 100));
console.log("\nDoes it start with quote?", key?.[0]);
console.log("Contains actual newlines?", key?.includes('\n'));
console.log("Contains escaped \\\\n?", key?.includes('\\n'));

console.log("\nFirst 500 chars raw:");
console.log(JSON.stringify(key?.substring(0, 500)));

console.log("\nLast 100 chars:");
console.log(key?.substring(key?.length - 100));
