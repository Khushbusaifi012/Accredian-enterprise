"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  mode: string;
  location: string;
};

const domains = [
  "Product & Innovation Hub",
  "Gen-AI Mastery",
  "Leadership Elevation",
  "Tech & Data Insights",
  "Operations Excellence",
  "Digital Enterprise",
  "Fintech Innovation Lab",
];

const modes = ["Online", "Offline", "Hybrid"];

export function EnquiryModal({ open, onClose }: Props) {
  const initial = useMemo<FormState>(
    () => ({
      name: "",
      email: "",
      phone: "",
      company: "",
      domain: "",
      candidates: "",
      mode: "",
      location: "",
    }),
    [],
  );

  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const update = (key: keyof FormState, value: string) =>
    setForm((s) => ({ ...s, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = (await res.json()) as { ok: boolean; message?: string };
      setStatus("success");
      setMessage(data.message ?? "Submitted successfully.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="grid md:grid-cols-2">
          <div className="relative hidden md:block">
            <Image
              src="/discussion.jpg"
              alt="Team discussion presentation"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-bold tracking-tight text-slate-900">
                Enquire Now
              </h3>
              <button
                type="button"
                aria-label="Close modal"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                ×
              </button>
            </div>

            <form onSubmit={onSubmit} className="mt-5 space-y-4">
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Enter Name"
                className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="Enter Email"
                type="email"
                className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="flex gap-2">
                <div className="flex h-11 items-center gap-2 rounded-md border border-slate-200 px-3 text-sm text-slate-600">
                  <span>🇮🇳</span>
                  <span>+91</span>
                </div>
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="Phone number"
                  inputMode="numeric"
                  className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="Enter company name"
                className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                value={form.domain}
                onChange={(e) => update("domain", e.target.value)}
                className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Domain</option>
                {domains.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <input
                value={form.candidates}
                onChange={(e) => update("candidates", e.target.value)}
                placeholder="Enter No. of candidates"
                inputMode="numeric"
                className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                value={form.mode}
                onChange={(e) => update("mode", e.target.value)}
                className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Mode of Delivery *</option>
                {modes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              <input
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="Eg: Gurugram, Delhi, India"
                className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />

              {status !== "idle" ? (
                <div
                  className={`rounded-md px-3 py-2 text-sm ${
                    status === "success"
                      ? "bg-emerald-50 text-emerald-800"
                      : status === "error"
                        ? "bg-rose-50 text-rose-800"
                        : "bg-slate-50 text-slate-700"
                  }`}
                >
                  {status === "submitting" ? "Submitting..." : message}
                </div>
              ) : null}

              <Button
                type="submit"
                className="h-11 w-full"
                disabled={status === "submitting"}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

