import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Volo",
  description: "Volo privacy policy. How we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen pt-28 pb-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent-cyan/[0.02] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[720px] px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.15em] text-accent-cyan">
            Legal
          </p>
          <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.01em]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[13px] text-text-dim">
            Last updated: February 2026
          </p>
        </div>

        <div className="legal-content space-y-4 leading-relaxed text-text-secondary">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              1. Introduction
            </h2>
            <p>
              Volo (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) is
              an aviation companion application designed for Turkish Airlines
              pilots. This Privacy Policy explains how we collect, use, and
              protect your information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <h3 className="mb-2 text-sm font-medium text-foreground">
              Account Information
            </h3>
            <p className="mb-4 text-sm">
              When you sign in using Apple Sign-In or Google Sign-In, we receive
              your name, email address, and a unique account identifier. This
              information is used to create and manage your account.
            </p>
            <h3 className="mb-2 text-sm font-medium text-foreground">
              Usage Data
            </h3>
            <p className="mb-4 text-sm">
              We may collect anonymous usage analytics to improve the app
              experience, such as which features are most used and general
              performance metrics. This data does not identify you personally.
            </p>
            <h3 className="mb-2 text-sm font-medium text-foreground">
              Data You Provide
            </h3>
            <p className="text-sm">
              The app processes flight numbers, airport codes, and other
              aviation data you enter into calculators and tools. This data is
              processed locally on your device or via third-party aviation APIs
              and is not stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              3. How We Use Your Information
            </h2>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "To provide and maintain the app functionality",
                "To manage your account and subscription status",
                "To sync your settings and preferences across devices",
                "To improve and optimize the app experience",
                "To communicate important updates about the service",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              4. Third-Party Services
            </h2>
            <p className="mb-3 text-sm">
              The app connects to the following third-party services to provide
              aviation data:
            </p>
            <div className="space-y-2">
              {[
                {
                  name: "Aviation Weather",
                  domain: "aviationweather.gov",
                  purpose: "TAF weather data",
                },
                {
                  name: "IGA CDM",
                  domain: "mobilecdm.igairport.aero",
                  purpose: "Departure info at Turkish airports",
                },
                {
                  name: "FlightAware",
                  domain: "flightaware.com",
                  purpose: "Flight tracking data",
                },
              ].map((svc) => (
                <div
                  key={svc.name}
                  className="flex items-center justify-between rounded-lg border border-border-custom/30 bg-background/50 px-4 py-2.5"
                >
                  <div>
                    <span className="text-sm font-medium text-foreground">
                      {svc.name}
                    </span>
                    <span className="ml-2 font-mono text-[10px] text-text-dim">
                      {svc.domain}
                    </span>
                  </div>
                  <span className="text-xs text-text-dim">{svc.purpose}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm">
              These services have their own privacy policies. We do not control
              how they handle data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              5. Data Storage &amp; Security
            </h2>
            <p className="text-sm">
              Most app data is stored locally on your device. Account data is
              stored securely using Supabase infrastructure with
              industry-standard encryption. We implement appropriate technical
              and organizational measures to protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              6. Data Retention
            </h2>
            <p className="text-sm">
              We retain your account information for as long as your account is
              active. You may request deletion of your account and associated
              data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              7. Your Rights
            </h2>
            <p className="mb-3 text-sm">You have the right to:</p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "Access the personal data we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of your data",
                "Withdraw consent for data processing",
                "Export your data in a portable format",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-sm">
              Volo is not intended for use by individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              9. Changes to This Policy
            </h2>
            <p className="text-sm">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes through the app or via
              email.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              10. Contact Us
            </h2>
            <p className="text-sm">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <span className="font-mono text-accent-cyan">
                [your-email@example.com]
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
