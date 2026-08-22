import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Quesiono | Start a Project",
  description: "Get in touch with Quesiono to discuss your project. We respond within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="CONTACT"
            title="Let's Build Something Together"
            subtitle="Get in touch and let's discuss your project. We respond within 24 hours."
            dark={true}
          />
        </div>
      </section>
      <ContactForm />
    </>
  );
}
