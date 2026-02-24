import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Volo",
  description: "Volo privacy policy. How we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <p className="mb-3 font-mono text-sm text-accent-cyan">LEGAL</p>
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-text-secondary">
            Last updated: February 2026
          </p>
        </div>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
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
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <h3 className="mb-2 font-medium text-foreground">
              Account Information
            </h3>
            <p className="mb-4">
              When you sign in using Apple Sign-In or Google Sign-In, we receive
              your name, email address, and a unique account identifier. This
              information is used to create and manage your account.
            </p>
            <h3 className="mb-2 font-medium text-foreground">Usage Data</h3>
            <p className="mb-4">
              We may collect anonymous usage analytics to improve the app
              experience, such as which features are most used and general
              performance metrics. This data does not identify you personally.
            </p>
            <h3 className="mb-2 font-medium text-foreground">
              Data You Provide
            </h3>
            <p>
              The app processes flight numbers, airport codes, and other
              aviation data you enter into calculators and tools. This data is
              processed locally on your device or via third-party aviation APIs
              and is not stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>To provide and maintain the app functionality</li>
              <li>To manage your account and subscription status</li>
              <li>To sync your settings and preferences across devices</li>
              <li>To improve and optimize the app experience</li>
              <li>To communicate important updates about the service</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              4. Third-Party Services
            </h2>
            <p>
              The app connects to the following third-party services to provide
              aviation data:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">
                  Aviation Weather (aviationweather.gov)
                </strong>{" "}
                — for TAF weather data
              </li>
              <li>
                <strong className="text-foreground">IGA CDM</strong> — for
                departure information at Turkish airports
              </li>
              <li>
                <strong className="text-foreground">FlightAware</strong> — for
                flight tracking data
              </li>
            </ul>
            <p className="mt-4">
              These services have their own privacy policies. We do not control
              how they handle data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              5. Data Storage & Security
            </h2>
            <p>
              Most app data is stored locally on your device. Account data is
              stored securely using Supabase infrastructure with
              industry-standard encryption. We implement appropriate technical
              and organizational measures to protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              6. Data Retention
            </h2>
            <p>
              We retain your account information for as long as your account is
              active. You may request deletion of your account and associated
              data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              7. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Volo is not intended for use by individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes through the app or via
              email.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <span className="text-accent-cyan">[your-email@example.com]</span>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
