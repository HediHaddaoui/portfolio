"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFieldErrors, ContactPayload } from "@/lib/contact";
import { validateContactPayload } from "@/lib/contact";

const initialState: ContactPayload = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialState);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [serverMessage, setServerMessage] = useState("");

  function update<K extends keyof ContactPayload>(key: K, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactPayload(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setServerMessage(data.message ?? "Une erreur est survenue.");
        return;
      }

      setStatus("success");
      setServerMessage(
        data.message ?? "Message prêt à être transmis. Merci pour votre contact.",
      );
      setValues(initialState);
    } catch {
      setStatus("error");
      setServerMessage("Impossible d’envoyer le message pour le moment.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Nom"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          error={errors.name}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          error={errors.email}
          required
        />
      </div>
      <Input
        label="Sujet"
        name="subject"
        value={values.subject}
        onChange={(event) => update("subject", event.target.value)}
        error={errors.subject}
        required
      />
      <Textarea
        label="Message"
        name="message"
        value={values.message}
        onChange={(event) => update("message", event.target.value)}
        error={errors.message}
        required
      />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Envoi…" : "Envoyer le message"}
      </Button>
      {serverMessage ? (
        <p
          className={
            status === "error" ? "text-sm text-red-400" : "text-sm text-cyan-300"
          }
          role="status"
        >
          {serverMessage}
        </p>
      ) : null}
    </form>
  );
}
