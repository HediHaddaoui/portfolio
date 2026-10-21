import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-3xl font-semibold">Page introuvable</h1>
        <p className="mt-3 text-muted">Cette ressource n’existe pas.</p>
        <Link href="/" className="mt-6 inline-block text-cyan-400">
          Retour à l’accueil
        </Link>
      </Container>
    </main>
  );
}
