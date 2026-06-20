import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-midnight min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-7xl md:text-9xl font-libre italic text-vanilla mb-6">404</h1>
        <h2 className="text-2xl md:text-4xl font-inter font-bold text-vanilla mb-4">Page Not Found</h2>
        <p className="text-vanilla/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="ghost">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
