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

      <div className="relative z-10 mx-auto w-full max-w-[900px] px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.15em] text-accent-cyan">
            Legal
          </p>
          <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.01em]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[13px] text-text-dim">
            Last updated: March 23, 2026
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
              This Privacy Policy explains how Volo (&quot;the App&quot;)
              collects, uses, stores, and shares information when you use our
              aviation toolkit designed for airline pilots and aviation
              professionals.
            </p>
          </section>

          {/* Aviation notice */}
          <section className="rounded-lg border border-border-custom/30 bg-background/50 p-4">
            <h2 className="mb-2 text-sm font-semibold text-foreground">
              Important aviation notice
            </h2>
            <p className="text-sm">
              Volo is a supplementary tool and does not replace official airline
              operations manuals, NOTAMs, ATC instructions, or any
              operator-approved/regulated sources. You are solely responsible for
              verifying all information through official channels before
              operational use. (See also the Terms of Service.)
            </p>
          </section>

          {/* 1. Scope */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              1. Scope
            </h2>
            <p className="text-sm">
              This Privacy Policy applies to Volo on iOS, Android, and Web,
              including all features such as calculators, reference lookups,
              cabin briefing scripts, PDF export/sharing, and real-time flight
              information features.
            </p>
            <p className="mt-2 text-sm">
              If you do not agree with this Privacy Policy, do not use the App.
            </p>
          </section>

          {/* 2. What Volo does */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              2. What Volo does and how it works (high level)
            </h2>
            <p className="mb-3 text-sm">
              Volo is built with React Native / Expo and provides aviation
              utilities including (non-exhaustive):
            </p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "Crew rest time calculator (2\u20134 pilots)",
                "Cold temperature altitude correction calculator",
                "CTOT departure planner",
                "Flight times calculator",
                "IMP cargo code reference",
                "Meter-to-feet altitude conversion table",
                "NAT HLA route verification (great-circle calculations)",
                "Operational suitability weather checker (fetches live TAFs and applies ICAO weather minima rules)",
                "Departure assist (fetches runway/SID/departure info)",
                "PDF export and sharing for results",
                "Light/dark theme",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm">
              Most functionality is offline and runs on-device. Some features
              make unauthenticated network requests to fetch weather/departure
              info and to support sign-in/subscription status.
            </p>
          </section>

          {/* 3. Information we collect */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              3. Information we collect
            </h2>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              A) Account and profile information (via Supabase)
            </h3>
            <p className="mb-2 text-sm">
              If you sign in, authentication is handled through Supabase (a
              hosted backend-as-a-service). We store user profile data in
              Supabase including:
            </p>
            <ul className="mb-3 list-none space-y-2 text-sm">
              {[
                "User ID",
                "Email address",
                "Full name",
                "Avatar URL",
                "Subscription tier (free/pro)",
                "Subscription plan (monthly/yearly)",
                "Subscription start/end dates",
                "Account creation/update timestamps",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-4 text-sm">
              We do not collect your Apple ID password or Google password.
              Sign-in occurs through Apple/Google authentication flows.
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              B) Subscription and purchase information (Apple StoreKit on iOS)
            </h3>
            <p className="mb-2 text-sm">
              If you subscribe to Volo Pro on iOS:
            </p>
            <ul className="mb-2 list-none space-y-2 text-sm">
              {[
                "Payments are processed by Apple via StoreKit.",
                "We do not receive your full payment card details.",
                "We may receive and store subscription status information (e.g., plan type, active/expired status, and related dates) to enable and synchronize Pro access.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-4 text-sm">
              Subscriptions auto-renew unless cancelled.
            </p>
            <p className="mb-4 text-xs text-text-dim">
              Note: If we offer subscriptions on Android or Web in the future,
              we will update this Privacy Policy accordingly.
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              C) Data you enter into the App (primarily processed locally)
            </h3>
            <p className="mb-4 text-sm">
              You may input operational values such as times, routes, airport
              lists, or other parameters for calculators and checkers. These
              inputs are processed on-device and are not uploaded by default.
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              D) Local device storage (AsyncStorage / browser storage)
            </h3>
            <p className="mb-2 text-sm">
              Volo stores limited non-sensitive preferences locally, such as:
            </p>
            <ul className="mb-2 list-none space-y-2 text-sm">
              {[
                "Theme preference (light/dark)",
                "Onboarding/completed state",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-2 text-sm">
              On mobile, this uses local storage (e.g., AsyncStorage). On the
              Web, it may use browser storage (e.g., localStorage/sessionStorage
              and/or cookies) to maintain preferences and session state.
            </p>
            <p className="mb-4 text-sm">
              Volo does not use tracking cookies or any cookies for advertising
              purposes. Any cookies used on the Web version are strictly
              necessary for functionality (e.g., maintaining your session).
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              E) Clipboard access
            </h3>
            <p className="mb-2 text-sm">
              Volo may read clipboard content (via expo-clipboard) only to allow
              you to paste route data and airport lists into input fields.
            </p>
            <ul className="mb-4 list-none space-y-2 text-sm">
              {[
                "Clipboard data is not stored",
                "Clipboard data is not transmitted",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              F) Network/technical data (limited)
            </h3>
            <p className="mb-2 text-sm">
              When the App connects to external services, those services may
              receive standard internet metadata such as:
            </p>
            <ul className="mb-2 list-none space-y-2 text-sm">
              {[
                "IP address",
                "Device/browser user-agent",
                "Request timestamps",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm">
              We do not embed third-party advertising or analytics SDKs in Volo,
              but standard server logs at service providers (e.g., Supabase and
              the third-party data sources you query) may exist as part of their
              normal operations.
            </p>
            <p className="mt-2 text-sm">
              Volo does not track you across other companies&apos; apps or
              websites. No App Tracking Transparency (ATT) prompt is required
              because no cross-app or cross-site tracking occurs.
            </p>
          </section>

          {/* 4. What we do not collect */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              4. What we do not collect
            </h2>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "No advertising identifiers",
                "No analytics or tracking SDKs",
                "No Firebase Analytics, Mixpanel, Amplitude, etc.",
                "No in-app ads",
                "No sale of personal data",
                "No background location tracking (we do not collect precise location data)",
                "No access to contacts (unless your OS shares something through a feature you explicitly use outside the App)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 5. How we use information */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              5. How we use information
            </h2>
            <p className="mb-3 text-sm">
              We use the information described above to:
            </p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "Provide authentication and account access (Supabase)",
                "Store and display your profile information (Supabase)",
                "Determine and synchronize your subscription entitlement (free/pro)",
                "Provide core app functionality and user preferences (theme/onboarding)",
                "Provide customer support (if you contact us)",
                "Maintain security, prevent abuse, and comply with legal obligations where applicable",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-4 mb-2 text-sm font-medium text-foreground">
              Legal basis for processing (EEA/UK users)
            </h3>
            <p className="mb-2 text-sm">
              If you are located in the European Economic Area or the United
              Kingdom, we rely on the following legal bases:
            </p>
            <ul className="list-none space-y-2 text-sm">
              {[
                "Contract performance — authentication, profile storage, and subscription management are necessary to provide the service you signed up for.",
                "Legitimate interests — maintaining security, preventing abuse, and improving the App, where those interests are not overridden by your rights.",
                "Legal obligation — where we are required to retain or disclose data under applicable law.",
                "Consent — where required (e.g., optional communications), which you may withdraw at any time.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Third-party services */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              6. Third-party services and data sources
            </h2>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              A) Authentication and backend
            </h3>
            <p className="mb-4 text-sm">
              Supabase: authentication, profile storage, subscription status
              syncing
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              B) Sign-in providers
            </h3>
            <ul className="mb-2 list-none space-y-2 text-sm">
              {[
                "Apple (Sign in with Apple)",
                "Google (Sign in with Google)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-4 text-sm">
              These providers process information according to their own privacy
              policies.
            </p>

            <h3 className="mb-2 text-sm font-medium text-foreground">
              C) Aviation data sources (unauthenticated requests, no API keys)
            </h3>
            <p className="mb-3 text-sm">
              Volo fetches certain operational data from third-party sources you
              request through the App:
            </p>
            <div className="space-y-2">
              {[
                {
                  name: "Aviation Weather Center",
                  domain: "aviationweather.gov",
                  purpose: "TAF weather reports",
                },
                {
                  name: "IGA CDM",
                  domain: "mobilecdm.igairport.aero",
                  purpose: "Istanbul Airport (LTFM) departure info",
                },
                {
                  name: "FlightAware",
                  domain: "flightaware.com",
                  purpose:
                        "HTML retrieval for non-LTFM departure info",
                },
                {
                  name: "Supabase",
                  domain: "supabase.co",
                  purpose: "Authentication/profile/subscription syncing",
                },
              ].map((svc) => (
                <div
                  key={svc.name}
                  className="flex flex-col gap-1 rounded-lg border border-border-custom/30 bg-background/50 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between"
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
              <strong className="text-foreground">Important:</strong> These
              third-party sources may change, be unavailable, rate-limit
              requests, or provide incomplete/incorrect information.
            </p>
          </section>

          {/* 7. When we share information */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              7. When we share information
            </h2>
            <p className="mb-3 text-sm">
              We share information only as necessary to operate the App:
            </p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "With Supabase to authenticate users and store profile/subscription data",
                "With Apple for processing subscription payments via StoreKit",
                "With Apple/Google for authentication (Sign in with Apple / Google)",
                "With third-party aviation data sources only in the sense that your device makes requests to them and they receive standard network metadata (IP/user-agent)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm">
              We do not share personal data for advertising, and we do not sell
              personal data.
            </p>
          </section>

          {/* 8. PDF export and sharing */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              8. PDF export and sharing
            </h2>
            <p className="mb-3 text-sm">
              Volo can generate PDFs of calculation results and let you share
              them using your device&apos;s sharing features.
            </p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "PDFs are generated on-device",
                "If you choose to share a PDF, it is sent to recipients/services you select",
                "We do not receive the PDF unless you separately send it to us (e.g., for support)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 9. Data retention */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              9. Data retention
            </h2>
            <p className="mb-2 text-sm">
              Supabase account/profile data is retained as long as your account
              is active or as needed to provide the service.
            </p>
            <p className="mb-2 text-sm">
              If you request account deletion (see &quot;Account deletion&quot;
              below), we will delete or anonymize account/profile data from our
              systems within 30 days, subject to:
            </p>
            <ul className="mb-2 list-none space-y-2 text-sm">
              {[
                "Legal obligations that require longer retention",
                "Security/fraud prevention",
                "Encrypted backups that may persist for up to 90 days before automatic rotation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm">
              Local preferences (theme/onboarding) remain on your device/browser
              until you clear app data or uninstall/clear browser storage.
            </p>

            <h3 className="mt-4 mb-2 text-sm font-medium text-foreground">
              Account deletion
            </h3>
            <p className="text-sm">
              You can delete your account directly from the App by navigating to
              your profile/settings screen and selecting &quot;Delete
              Account.&quot; You may also request deletion by emailing us at{" "}
              <a
                href="mailto:contact@launchspace.org"
                className="font-mono text-accent-cyan hover:underline"
              >
                contact@launchspace.org
              </a>
              . Upon deletion, your Supabase profile data, subscription
              metadata, and any associated records will be permanently removed
              within 30 days. Deleting your account does not automatically
              cancel an active Apple subscription — you must cancel it
              separately through your Apple account settings.
            </p>
          </section>

          {/* 10. Security */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              10. Security
            </h2>
            <p className="text-sm">
              We use reasonable administrative, technical, and organizational
              measures designed to protect your information. However, no system
              can be guaranteed 100% secure.
            </p>
          </section>

          {/* 11. International transfers */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              11. International transfers
            </h2>
            <p className="mb-2 text-sm">
              Your information may be processed in countries other than your own
              depending on where service providers operate. Supabase
              infrastructure used by Volo is hosted in the United States.
            </p>
            <p className="text-sm">
              When required, we rely on appropriate safeguards for cross-border
              data transfers, such as Standard Contractual Clauses approved by
              the European Commission.
            </p>
          </section>

          {/* 12. Your privacy rights */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              12. Your privacy rights
            </h2>
            <p className="mb-3 text-sm">
              Depending on your location, you may have rights such as:
            </p>
            <ul className="list-none space-y-2.5 text-sm">
              {[
                "Access to personal data we hold about you",
                "Correction of inaccurate data",
                "Deletion of your data",
                "Data portability",
                "Objection/restriction of certain processing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm">
              To exercise these rights, contact us using the information in the
              &quot;Contact Us&quot; section.
            </p>
            <p className="mt-2 text-xs text-text-dim">
              California notice (summary): We do not sell personal information
              and do not share it for cross-context behavioral advertising.
            </p>
          </section>

          {/* 13. Children's privacy */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              13. Children&apos;s privacy
            </h2>
            <p className="text-sm">
              Volo is intended for airline pilots and aviation professionals and
              is not directed to children. We do not knowingly collect personal
              information from children under 13 (or under 16 where the GDPR
              applies). If we learn that we have inadvertently collected personal
              information from a child under the applicable age threshold, we
              will promptly delete that information. If you believe a child has
              provided us with personal data, please contact us at{" "}
              <a
                href="mailto:contact@launchspace.org"
                className="font-mono text-accent-cyan hover:underline"
              >
                contact@launchspace.org
              </a>
              .
            </p>
          </section>

          {/* 14. App Store privacy label */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              14. App Store privacy label
            </h2>
            <p className="text-sm">
              Our App Store privacy nutrition label accurately reflects the data
              practices described in this Privacy Policy. If you notice any
              discrepancy between the label and this policy, this Privacy Policy
              takes precedence and we will update the label accordingly.
            </p>
          </section>

          {/* 15. Changes to this policy */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              15. Changes to this policy
            </h2>
            <p className="text-sm">
              We may update this Privacy Policy from time to time. We will
              update the &quot;Last Updated&quot; date and, where appropriate,
              provide additional notice in the App or on our website.
            </p>
          </section>

          {/* 16. Contact Us */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              16. Contact Us
            </h2>
            <p className="mb-2 text-sm font-medium text-foreground">
              LaunchSpace LLC
            </p>
            <p className="text-sm">
              Privacy inquiries:{" "}
              <a
                href="mailto:contact@launchspace.org"
                className="font-mono text-accent-cyan hover:underline"
              >
                contact@launchspace.org
              </a>
            </p>
            <p className="text-sm">
              Support:{" "}
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
