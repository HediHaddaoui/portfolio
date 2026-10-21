import { isValidEmail } from "./utils";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function validateContactPayload(
  payload: ContactPayload,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (payload.name.trim().length < 2) {
    errors.name = "Le nom doit contenir au moins 2 caractères.";
  }

  if (!isValidEmail(payload.email)) {
    errors.email = "Veuillez saisir une adresse e-mail valide.";
  }

  if (payload.subject.trim().length < 3) {
    errors.subject = "Le sujet doit contenir au moins 3 caractères.";
  }

  if (payload.message.trim().length < 10) {
    errors.message = "Le message doit contenir au moins 10 caractères.";
  }

  return errors;
}
