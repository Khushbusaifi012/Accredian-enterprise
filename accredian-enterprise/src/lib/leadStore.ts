import Datastore from "nedb-promises";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

export type LeadRecord = {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  mode: string;
  location: string;
  createdAt: string;
};

const isVercel = process.env.VERCEL === "1";
const dbFile = isVercel ? "/tmp/leads.db" : join(process.cwd(), ".data", "leads.db");
mkdirSync(dirname(dbFile), { recursive: true });

if (process.env.NODE_ENV === "development" && !isVercel) {
  console.log("[leads] persisting to:", dbFile);
}

const db = Datastore.create({
  filename: dbFile,
  autoload: true,
  timestampData: true,
});

export async function insertLead(lead: LeadRecord) {
  return db.insert(lead);
}

export async function listLeads(limit = 100) {
  return db.find({}).sort({ createdAt: -1 }).limit(limit).exec();
}
