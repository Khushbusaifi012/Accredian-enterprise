import Datastore from "nedb-promises";
import { mkdirSync } from "node:fs";

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

mkdirSync(".data", { recursive: true });

const db = Datastore.create({
  filename: ".data/leads.db",
  autoload: true,
  timestampData: true,
});

export async function insertLead(lead: LeadRecord) {
  return db.insert(lead);
}

export async function listLeads(limit = 100) {
  return db.find({}).sort({ createdAt: -1 }).limit(limit).exec();
}
