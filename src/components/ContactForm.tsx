"use client";
import { useState } from "react";
import { site } from "@/content/site";
import type { Dictionary } from "@/lib/i18n";

/** Ouvre la messagerie du visiteur (mailto). Pour un envoi serveur, voir README. */
export function ContactForm({ dict }: { dict: Dictionary }) {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const bind = (key: keyof typeof form) => ({
    value: form[key], onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [key]: e.target.value }),
  });
  const href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject || form.name)}&body=${encodeURIComponent(`${form.message}\n\n${form.name}`)}`;
  return (
    <div className="card space-y-4 p-7">
      <label className="block text-sm font-medium">{dict.fieldName}<input className="field mt-1.5" {...bind("name")} /></label>
      <label className="block text-sm font-medium">{dict.fieldSubject}<input className="field mt-1.5" {...bind("subject")} /></label>
      <label className="block text-sm font-medium">{dict.fieldMessage}<textarea rows={6} className="field mt-1.5" {...bind("message")} /></label>
      <a className="btn btn-primary" href={href}>{dict.sendMail}</a>
    </div>
  );
}
