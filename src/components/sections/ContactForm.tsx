"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { Clock3, Mail, MapPin, Sparkles } from "lucide-react";

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
    void data;
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
            <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-6">
              Tell Us What You’re Building.
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              Share your goals and we’ll recommend the right path, whether you need a new website,
              a higher ranking on Google, or content that turns attention into leads.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <a
                href="mailto:hello@quesiono.com"
                className="group rounded-2xl border border-sand/40 bg-white p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center border border-sand/30 mb-4">
                  <Mail className="w-5 h-5 text-midnight" />
                </div>
                <div className="text-text-muted text-xs uppercase tracking-widest">Email</div>
                <div className="text-text-dark font-semibold mt-2 group-hover:text-indigo transition-colors">
                  hello@quesiono.com
                </div>
              </a>
              <div className="rounded-2xl border border-sand/40 bg-white p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center border border-sand/30 mb-4">
                  <MapPin className="w-5 h-5 text-midnight" />
                </div>
                <div className="text-text-muted text-xs uppercase tracking-widest">Location</div>
                <div className="text-text-dark font-semibold mt-2">Houston, TX</div>
                <div className="text-text-muted mt-2">4201 Main St, Ste 200, 77002</div>
              </div>
            </div>

            <div className="rounded-2xl bg-midnight p-8 border border-vanilla/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo/40 flex items-center justify-center border border-vanilla/10">
                  <Clock3 className="w-5 h-5 text-vanilla" />
                </div>
                <div className="text-vanilla font-semibold">What happens next</div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "We reply within 24 hours",
                    description: "You’ll get clear next steps and a few quick questions to align on scope.",
                  },
                  {
                    title: "We recommend the best approach",
                    description: "Website build, SEO plan, content system, or a combined roadmap for growth.",
                  },
                  {
                    title: "You get a timeline and deliverables",
                    description: "No surprises. We confirm what’s included and what success looks like.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-indigo/40 border border-vanilla/10 p-5 hover:bg-indigo/50 transition-colors"
                  >
                    <div className="text-vanilla font-semibold">{item.title}</div>
                    <div className="text-vanilla/70 mt-2">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            {isSuccess ? (
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-sand/20 text-center">
                <div className="w-14 h-14 rounded-2xl bg-cream border border-sand/30 mx-auto flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-midnight" />
                </div>
                <h3 className="text-3xl font-libre italic text-text-dark mb-3">
                  Message received.
                </h3>
                <p className="text-text-muted mb-8 text-lg">
                  Thanks for reaching out. We’ll reply with next steps and a simple project plan.
                </p>
                <Button onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-sand/20 space-y-6"
              >
                <div className="mb-2">
                  <div className="text-text-muted text-xs uppercase tracking-widest">
                    Project details
                  </div>
                  <h3 className="text-2xl font-bold text-text-dark mt-2">
                    Start the conversation
                  </h3>
                </div>

                <div>
                  <label className="block text-text-dark font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-sand/60 bg-white focus:outline-none focus:ring-2 focus:ring-midnight/15 focus:border-midnight/40 transition"
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : "false"}
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
                    className="w-full px-4 py-3 rounded-xl border border-sand/60 bg-white focus:outline-none focus:ring-2 focus:ring-midnight/15 focus:border-midnight/40 transition"
                    placeholder="your@email.com"
                    aria-invalid={errors.email ? "true" : "false"}
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
                    className="w-full px-4 py-3 rounded-xl border border-sand/60 bg-white focus:outline-none focus:ring-2 focus:ring-midnight/15 focus:border-midnight/40 transition"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label className="block text-text-dark font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    {...register("service", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-sand/60 focus:outline-none focus:ring-2 focus:ring-midnight/15 focus:border-midnight/40 bg-white transition"
                    aria-invalid={errors.service ? "true" : "false"}
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
                    className="w-full px-4 py-3 rounded-xl border border-sand/60 focus:outline-none focus:ring-2 focus:ring-midnight/15 focus:border-midnight/40 bg-white transition"
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
                    className="w-full px-4 py-3 rounded-xl border border-sand/60 bg-white focus:outline-none focus:ring-2 focus:ring-midnight/15 focus:border-midnight/40 transition"
                    placeholder="Tell us about your project..."
                    aria-invalid={errors.message ? "true" : "false"}
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

                <div className="pt-2">
                  <div className="text-text-muted text-sm">
                    Prefer email?{" "}
                    <a href="mailto:hello@quesiono.com" className="text-indigo font-semibold hover:text-midnight transition-colors">
                      hello@quesiono.com
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 lg:mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-libre italic text-text-dark mb-8 text-center">
            Quick Answers.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "What should I include in my message?",
                a: "Your goal, your deadline, and any links you like. If you have brand assets, share them too. If you don’t, we can help define the visual direction.",
              },
              {
                q: "Do you work with startups and small businesses?",
                a: "Yes. We work with early-stage teams and established companies, focusing on clear positioning, performance, and measurable outcomes.",
              },
              {
                q: "Can you improve an existing website instead of rebuilding?",
                a: "Absolutely. If the foundation is solid, we can optimize performance, conversions, and SEO without a full rebuild.",
              },
              {
                q: "Do you offer ongoing support after launch?",
                a: "Yes. We can provide maintenance, SEO content, and iterative improvements so your site stays fast, secure, and competitive.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-sand/40 bg-white p-6 hover:shadow-lg transition-all"
              >
                <summary className="cursor-pointer list-none select-none flex items-center justify-between gap-6">
                  <span className="text-text-dark font-semibold text-lg">{item.q}</span>
                  <span className="w-9 h-9 rounded-full bg-cream border border-sand/30 flex items-center justify-center text-midnight transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="text-text-muted mt-4 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
