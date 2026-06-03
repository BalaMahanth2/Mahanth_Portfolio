"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import ClassicSectionTitle from "./ClassicSectionTitle";
import { profile } from "@/lib/data";

export default function ClassicContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="classic-section">
      <div className="classic-container">
        <ClassicSectionTitle
          number="08."
          kicker="Get in touch"
          title="Let's connect"
          subtitle="Actively seeking DevOps Engineer roles in IT — VFX-grade production experience, cloud-native ambitions."
        />

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-3"
          >
            <Row Icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Row Icon={Linkedin} label="LinkedIn" value="bala-mahanth" href={profile.linkedin} />
            <Row Icon={Github} label="GitHub" value={`@${profile.github.split("/").pop()}`} href={profile.github} />
            <Row Icon={MapPin} label="Location" value={profile.location} />
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 classic-glass p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@company.com" required />
            </div>
            <Field
              label="Message"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Tell me about your team, role, or project…"
              textarea
              required
            />

            <div className="flex items-center justify-between gap-3 pt-1">
              <p className="text-[11px] text-white/35">
                opens your mail client — no third-party form service
              </p>
              <button type="submit" className="classic-btn classic-btn-primary">
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Sent
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Row({ Icon, label, value, href }) {
  const Wrap = href ? "a" : "div";
  const props = href ? { href, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Wrap
      {...props}
      className="group classic-glass p-4 flex items-center gap-4"
    >
      <div className="w-11 h-11 rounded-lg grid place-items-center bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 text-orange-300 group-hover:shadow-[0_0_24px_rgba(251,146,60,0.40)] transition">
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">{label}</div>
        <div className="text-sm text-white/90 truncate">{value}</div>
      </div>
    </Wrap>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", textarea, required }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-white/45 mb-1.5">
        {label}
      </span>
      <Tag
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={textarea ? 5 : undefined}
        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-orange-400/60 focus:shadow-[0_0_0_3px_rgba(251,146,60,0.15)] transition"
      />
    </label>
  );
}
