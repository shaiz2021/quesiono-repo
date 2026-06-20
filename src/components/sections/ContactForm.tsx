"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

type FormData = {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-text-dark mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <p className="text-text-muted uppercase tracking-wider text-sm mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@quesiono.com"
                  className="text-text-dark font-semibold hover:text-midnight"
                >
                  hello@quesiono.com
                </a>
              </div>
              <div>
                <p className="text-text-muted uppercase tracking-wider text-sm mb-1">
                  Location
                </p>
                <p className="text-text-dark">4201 Main St, Ste 200 Houston, TX 77002</p>
              </div>
            </div>
            <div className="bg-midnight p-6 rounded">
              <p className="text-vanilla/80">
                We typically respond within 24 hours. For urgent inquiries,
                please mention that in your message.
              </p>
            </div>
          </div>

          <div>
            {isSuccess ? (
              <div className="bg-white p-8 rounded shadow-sm border border-sand/20 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-text-dark mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-muted mb-6">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
                <Button onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded shadow-sm border border-sand/20 space-y-6"
              >
                <div>
                  <label className="block text-text-dark font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="w-full px-4 py-3 rounded border border-sand focus:outline-none focus:border-midnight"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      Name is required
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-text-dark font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="w-full px-4 py-3 rounded border border-sand focus:outline-none focus:border-midnight"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      Email is required
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-text-dark font-semibold mb-2">
                    Company
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    className="w-full px-4 py-3 rounded border border-sand focus:outline-none focus:border-midnight"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label className="block text-text-dark font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    {...register("service", { required: true })}
                    className="w-full px-4 py-3 rounded border border-sand focus:outline-none focus:border-midnight bg-white"
                  >
                    <option value="">Select a service</option>
                    {services
                      .filter((s) => !s.parentService)
                      .map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.name}
                        </option>
                      ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      Please select a service
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-text-dark font-semibold mb-2">
                    Budget Range
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded border border-sand focus:outline-none focus:border-midnight bg-white"
                  >
                    <option value="">Select a range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="over-10000">Over $10,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-text-dark font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={5}
                    className="w-full px-4 py-3 rounded border border-sand focus:outline-none focus:border-midnight"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      Message is required
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
