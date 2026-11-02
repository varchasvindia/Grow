"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setStatus("");
    setIsError(false);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      
      if (!res.ok) {
        throw new Error(result.error || t("error"));
      }
      
      setStatus(t("success"));
      form.reset();
    } catch (err) {
      setIsError(true);
      setStatus(err instanceof Error ? err.message : t("error"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          {t("name")}
          <input
            name="name"
            required
            minLength={2}
            placeholder={t("namePlaceholder")}
          />
        </label>
        <label>
          {t("email")}
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label>
        {t("phone")} <span>({t("optional")})</span>
        <input name="phone" type="tel" placeholder="+91" />
      </label>

      <label>
        {t("message")}
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder={t("messagePlaceholder")}
        />
      </label>

      <button className="button button-primary" type="submit" disabled={busy}>
        {busy ? t("sending") : t("submit")} <Send size={16} />
      </button>

      {status && (
        <p 
          className="form-status" 
          role="status"
          style={{ color: isError ? "#f06a9f" : "#21e0cf" }}
        >
          {isError ? <AlertCircle size={17} /> : <CheckCircle2 size={17} />}
          {status}
        </p>
      )}
    </form>
  );
}