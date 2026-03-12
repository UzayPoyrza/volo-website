import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Volo",
  description: "Volo terms of service and conditions of use.",
};

export default function TermsOfService() {
  return (
    <main className="relative min-h-screen pt-28 pb-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent-cyan/[0.02] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[900px] px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.15em] text-accent-cyan">
            Legal
          </p>
          <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.01em]">
            Terms of Service
          </h1>
          <p className="mt-4 text-[13px] text-text-dim">
            Last updated: February 24, 2026
          </p>
        </div>

        <div className="legal-content space-y-4 leading-relaxed text-text-secondary">
          {/* Intro */}
          <section>
            <p className="text-sm">
              <strong className="text-foreground">App Name:</strong> Volo
              <br />
              <strong className="text-foreground">Bundle ID:</strong>{" "}
              com.volo.aviaassist
              <br />
              <strong className="text-foreground">Platforms:</strong> iOS
              (primary), Android, Web
              <br />
              <strong className="text-foreground">
                Developer/Company:
              </strong>{" "}
              LaunchSpace LLC (&quot;LaunchSpace&quot;, &quot;we&quot;,
              &quot;us&quot;)
            </p>
            <p className="mt-4 text-sm">
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of Volo (the &quot;App&quot;) and any related services
              provided by LaunchSpace LLC.
            </p>
            <p className="mt-2 text-sm">
              By downloading, accessing, or using the App, you agree to these
              Terms. If you do not agree, do not use the App.
            </p>
          </section>

          {/* 1. Critical aviation disclaimers */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              1. Critical aviation disclaimers (read carefully)
            </h2>
            <div className="rounded-lg border border-accent-amber/30 bg-accent-amber/[0.03] p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-amber">
                  Caution
                </span>
              </div>
              <p className="mb-3 text-sm text-foreground">
                Volo is a supplementary tool. It does not replace official
                airline operations manuals, company policies, NOTAMs, dispatch
                releases, MEL/CDL, performance tools, aircraft manufacturer
                documentation, ATC instructions, or any other
                official/authoritative source.
              </p>
              <p className="mb-3 text-sm text-foreground">
                Weather data and departure information are fetched from
                third-party sources and may not always be current, complete, or
                accurate.
              </p>
              <p className="text-sm text-foreground">
                Pilots and aviation professionals are solely responsible for
                verifying all information through official channels before
                operational use.
              </p>
            </div>
            <p className="mt-3 mb-3 text-sm">
              You acknowledge and agree that:
            </p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "Operational decisions must be based on official and approved sources.",
                "Volo outputs (calculations, reference lookups, route checks, weather suitability checks, departure assist info, scripts, and PDFs) may contain errors, omissions, or outdated content.",
                "Use of the App is at your own risk, and you remain responsible for compliance with all applicable regulations, airline policies, and operational requirements.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-amber/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 2. Description of the service */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              2. Description of the service
            </h2>
            <p className="mb-2 text-sm">
              Volo provides an aviation toolkit including calculators, reference
              data, bilingual briefing scripts, and real-time information
              features. Some features work entirely offline; others require
              network access.
            </p>
            <p className="text-sm">
              The App may change over time (features may be added, modified, or
              removed).
            </p>
          </section>

          {/* 3. Eligibility */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              3. Eligibility
            </h2>
            <p className="text-sm">
              You must be legally permitted to use the App in your jurisdiction.
              Volo is intended for professional use by aviation personnel and is
              not directed to children.
            </p>
          </section>

          {/* 4. Accounts and authentication */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              4. Accounts and authentication
            </h2>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              A) Sign-in methods
            </h3>
            <p className="mb-2 text-sm">Volo supports:</p>
            <ul className="mb-4 list-none space-y-2 text-sm">
              {[
                "Sign in with Apple",
                "Sign in with Google",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-4 text-sm">
              Authentication and profile storage are handled via Supabase.
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              B) Your responsibilities
            </h3>
            <p className="mb-2 text-sm">You agree to:</p>
            <ul className="mb-2 list-none space-y-2 text-sm">
              {[
                "Provide accurate information where required",
                "Maintain the confidentiality of your device and sign-in methods",
                "Notify us if you believe your account has been compromised",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm">
              We are not responsible for losses caused by unauthorized access
              resulting from your failure to secure your device or credentials.
            </p>
          </section>

          {/* 5. Subscriptions and billing */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              5. Subscriptions and billing (Volo Pro)
            </h2>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              A) Plans and pricing (iOS)
            </h3>
            <p className="mb-4 text-sm">
              Volo offers a free tier and optional paid subscription plans
              (&quot;Volo Pro&quot;) available via Apple StoreKit. Volo Pro may
              include monthly, yearly, or other billing options, and may offer
              introductory pricing, promotional offers, or free trial periods at
              our discretion. Current pricing, plan details, and any active
              offers are displayed within the App and on the applicable App Store
              listing at the time of purchase. Prices may vary by region and may
              include applicable taxes as determined by Apple.
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              B) Auto-renewal
            </h3>
            <p className="mb-4 text-sm">
              Subscriptions auto-renew unless cancelled at least 24 hours before
              the end of the current billing period (or as otherwise specified by
              Apple).
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              C) Payment and management
            </h3>
            <ul className="mb-4 list-none space-y-2 text-sm">
              {[
                "Payment is charged to your Apple ID account at confirmation of purchase.",
                "You can manage and cancel your subscription in your Apple account settings.",
                "Deleting the App does not cancel your subscription.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              D) Refunds
            </h3>
            <p className="mb-4 text-sm">
              Refund requests are handled by Apple under Apple&apos;s policies.
              We do not control Apple&apos;s refund decisions.
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              E) Changes
            </h3>
            <p className="mb-2 text-sm">
              We reserve the right to modify subscription offerings, features,
              pricing, and trial or promotional terms at any time, subject to
              applicable law and platform rules. Material changes will be
              communicated as required.
            </p>
            <p className="text-xs text-text-dim">
              Note: If subscriptions are offered on Android or Web in the
              future, additional terms may apply and these Terms will be updated.
            </p>
          </section>

          {/* 6. Acceptable use */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              6. Acceptable use
            </h2>
            <p className="mb-3 text-sm">You agree not to:</p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "Use the App for unlawful purposes",
                "Reverse engineer, decompile, or attempt to derive source code except where permitted by law",
                "Interfere with or disrupt the App or related services",
                "Circumvent security or access controls",
                "Use automated means (bots/scrapers) to access App features in a way that burdens services or violates third-party terms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-red/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 7. Third-party services */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              7. Third-party services and content
            </h2>
            <p className="mb-3 text-sm">
              The App may retrieve data from third-party sources (e.g.,
              aviationweather.gov, mobilecdm.igairport.aero, flightaware.com)
              and uses third-party authentication providers (Apple/Google) and
              Supabase.
            </p>
            <p className="mb-3 text-sm">
              You acknowledge and agree that:
            </p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "Third-party services are not under our control",
                "Their availability, accuracy, and terms may change at any time",
                "Your use of third-party services may be subject to their own terms and policies",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm">
              We are not responsible for third-party services or content.
            </p>
          </section>

          {/* 8. On-device features */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              8. On-device features: clipboard and PDF sharing
            </h2>
            <ul className="mb-3 list-none space-y-2.5 text-sm">
              {[
                "Clipboard: Clipboard reading occurs to support paste actions; clipboard data is not stored or transmitted by Volo.",
                "PDF export/sharing: PDFs are generated on-device; if you share them, you control where they go.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm">
              You are responsible for ensuring that any content you import or
              share (including exported PDFs) is handled in
              accordance with your employer&apos;s policies, applicable laws, and
              confidentiality requirements.
            </p>
          </section>

          {/* 9. Intellectual property */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              9. Intellectual property
            </h2>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              A) Our IP
            </h3>
            <p className="mb-4 text-sm">
              The App, including its design, code, calculators, datasets,
              reference formats, scripts, and branding, is owned by LaunchSpace
              LLC and is protected by intellectual property laws.
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              B) License to you
            </h3>
            <p className="mb-4 text-sm">
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to use the App for your personal/professional use in
              accordance with these Terms.
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              C) Restrictions
            </h3>
            <p className="text-sm">
              You may not copy, modify, distribute, sell, lease, or create
              derivative works of the App or its content except as allowed by law
              or with our written permission.
            </p>
          </section>

          {/* 10. Feedback */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              10. Feedback
            </h2>
            <p className="text-sm">
              If you provide suggestions or feedback, you grant us the right to
              use it without restriction or compensation, unless prohibited by
              law.
            </p>
          </section>

          {/* 11. Disclaimers of warranties */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              11. Disclaimers of warranties
            </h2>
            <p className="mb-3 text-sm font-medium uppercase text-foreground">
              To the maximum extent permitted by law, the App is provided
              &quot;as is&quot; and &quot;as available.&quot; We disclaim all
              warranties, express or implied, including implied warranties of
              merchantability, fitness for a particular purpose, accuracy, and
              non-infringement.
            </p>
            <p className="mb-3 text-sm">We do not warrant that:</p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "The App will be uninterrupted or error-free",
                "Calculations, reference data, weather checks, route verification, or departure information will be accurate or complete",
                "Third-party data sources will be available or current",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 12. Limitation of liability */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              12. Limitation of liability
            </h2>
            <p className="mb-3 text-sm font-medium uppercase text-foreground">
              To the maximum extent permitted by law, LaunchSpace LLC shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits, revenue, data, or use,
              arising out of or related to your use of the App.
            </p>
            <p className="mb-3 text-sm font-medium uppercase text-foreground">
              To the extent liability is not excluded, our total liability for
              all claims shall not exceed the amount you paid to us (if any) for
              the App or Volo Pro during the 12 months before the event giving
              rise to the claim.
            </p>
            <p className="text-sm">
              Some jurisdictions do not allow certain limitations, so parts of
              this section may not apply to you.
            </p>
          </section>

          {/* 13. Indemnification */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              13. Indemnification
            </h2>
            <p className="mb-3 text-sm">
              You agree to indemnify and hold harmless LaunchSpace LLC from and
              against claims, damages, losses, and expenses (including reasonable
              legal fees) arising from:
            </p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "Your use of the App",
                "Your violation of these Terms",
                "Your violation of any law, regulation, airline policy, or third-party rights",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 14. Suspension and termination */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              14. Suspension and termination
            </h2>
            <p className="mb-2 text-sm">
              We may suspend or terminate your access to the App if you violate
              these Terms or if we reasonably believe it is necessary to protect
              the App, users, or third parties.
            </p>
            <p className="mb-2 text-sm">
              You may stop using the App at any time.
            </p>
            <p className="mb-2 text-sm">
              <strong className="text-foreground">Subscription note:</strong>{" "}
              Terminating access to the App does not automatically cancel your
              Apple subscription. You must cancel through Apple account settings.
            </p>
            <p className="text-sm">
              Account deletion requests (if available) or data deletion requests
              are handled as described in the Privacy Policy.
            </p>
          </section>

          {/* 15. Governing law and disputes */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              15. Governing law and disputes
            </h2>
            <p className="mb-2 text-sm">
              These Terms are governed by the laws of the State of New York,
              without regard to conflict-of-law principles.
            </p>
            <p className="text-sm">
              Any disputes shall be brought in the state or federal courts
              located in New York County (Manhattan), New York, unless applicable
              law requires otherwise.
            </p>
          </section>

          {/* 16. Changes to these Terms */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              16. Changes to these Terms
            </h2>
            <p className="text-sm">
              We may update these Terms from time to time. We will update the
              &quot;Last Updated&quot; date and provide additional notice where
              required. Continued use of the App after changes means you accept
              the updated Terms.
            </p>
          </section>

          {/* 17. Contact */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              17. Contact
            </h2>
            <p className="mb-2 text-sm font-medium text-foreground">
              LaunchSpace LLC
            </p>
            <p className="text-sm">
              Legal/support inquiries:{" "}
              <a
                href="mailto:contact@launchspace.org"
                className="font-mono text-accent-cyan hover:underline"
              >
                contact@launchspace.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
