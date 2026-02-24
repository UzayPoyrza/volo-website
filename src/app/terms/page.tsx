import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Volo",
  description: "Volo terms of service and conditions of use.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <p className="mb-3 font-mono text-sm text-accent-cyan">LEGAL</p>
          <h1 className="text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-text-secondary">
            Last updated: February 2026
          </p>
        </div>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using Volo (&quot;the app&quot;),
              you agree to be bound by these Terms of Service. If you do not
              agree to these terms, do not use the app.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              2. Description of Service
            </h2>
            <p>
              Volo is an aviation companion application that provides
              calculators, reference data, weather analysis tools, and bilingual
              cabin briefing scripts for Turkish Airlines pilots. The app is
              designed as a supplementary tool and does not replace official
              airline documentation, procedures, or systems.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              3. Important Disclaimer
            </h2>
            <div className="rounded-lg border border-accent-amber/30 bg-accent-amber/5 p-4">
              <p className="text-foreground">
                Volo is an informational tool only. All calculations, weather
                assessments, and reference data provided by the app are for
                supplementary reference purposes. Pilots must always rely on
                official airline documentation, approved flight planning systems,
                and applicable regulations for operational decisions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              4. User Accounts
            </h2>
            <p>
              You may create an account using Apple Sign-In or Google Sign-In.
              You are responsible for maintaining the security of your account.
              You agree to provide accurate information and to update it as
              necessary.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              5. Subscriptions & Payments
            </h2>
            <p className="mb-4">
              Volo offers both free and paid subscription tiers. Paid
              subscriptions are processed through Apple&apos;s App Store. By
              purchasing a subscription:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Payment will be charged to your Apple ID account at confirmation
                of purchase
              </li>
              <li>
                Subscriptions automatically renew unless cancelled at least 24
                hours before the end of the current period
              </li>
              <li>
                You can manage and cancel subscriptions in your Apple ID account
                settings
              </li>
              <li>
                Refunds are handled according to Apple&apos;s refund policy
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              6. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Reverse engineer, decompile, or disassemble any part of the app
              </li>
              <li>
                Use the app for any unlawful purpose or in violation of aviation
                regulations
              </li>
              <li>
                Share your account credentials or subscription access with
                others
              </li>
              <li>
                Attempt to interfere with or disrupt the app&apos;s
                functionality
              </li>
              <li>
                Use automated systems to access the app in a manner that exceeds
                reasonable use
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              7. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of Volo — including
              design, code, text, and graphics — are owned by us and are
              protected by intellectual property laws. You are granted a limited,
              non-exclusive, non-transferable license to use the app for
              personal, professional purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              8. Third-Party Services
            </h2>
            <p>
              The app integrates with third-party aviation data services. We are
              not responsible for the accuracy, availability, or reliability of
              data provided by third parties. Service interruptions from
              third-party providers may affect certain app features.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Volo and its developers
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of the
              app. The app is provided &quot;as is&quot; without warranties of
              any kind, either express or implied.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              10. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to the
              app at any time for violation of these terms. You may stop using
              the app and delete your account at any time.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              11. Changes to Terms
            </h2>
            <p>
              We may modify these Terms of Service at any time. Continued use of
              the app after changes constitutes acceptance of the updated terms.
              We will notify users of significant changes through the app.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              12. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with
              applicable laws. Any disputes shall be resolved in the appropriate
              courts of jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              13. Contact
            </h2>
            <p>
              For questions about these Terms of Service, please contact us at{" "}
              <span className="text-accent-cyan">[your-email@example.com]</span>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
