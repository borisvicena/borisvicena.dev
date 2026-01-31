import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">Page not found</h1>
      <p className="text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block text-sm text-secondary hover:text-primary transition-colors underline underline-offset-2"
      >
        Go back home
      </Link>
    </div>
  );
}
