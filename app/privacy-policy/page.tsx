export default function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-3 md:p-8 text-[#020f2c]">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Last Updated: October 22, 2025
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          Welcome to Haame (referred to as &ldquo;we,&rdquo; &ldquo;our,&rdquo;
          or &ldquo;Haame&rdquo;). We value your privacy and are committed to
          protecting your personal data in accordance with the applicable laws
          of the Hong Kong Special Administrative Region (including the Personal
          Data (Privacy) Ordinance). This Privacy Policy explains how we
          collect, use, store, and protect information when you visit our
          website www.haame.com.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          1. Information We Collect
        </h2>
        <p className="text-sm md:text-base mb-4 leading-relaxed">
          We may collect information in the following ways:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm md:text-base font-bold mb-2">
              (1) Information You Provide to Us
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              When you contact us via forms, subscribe to newsletters, download
              materials, or request information, you may provide personal
              details such as your name, email address, phone number, company
              name, or position.
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-bold mb-2">
              (2) Information Collected Automatically
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              When you browse our website, we may automatically collect certain
              data such as your IP address, browser type, access time, referring
              site, and browsing activity for analytics and security purposes.
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-bold mb-2">
              (3) Cookies and Analytics Tools
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              We may use cookies or similar technologies to enhance your
              browsing experience and analyze site performance. You may choose
              to disable cookies in your browser, but some features of the
              website may not function properly.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          2. How We Use Information
        </h2>
        <p className="text-sm md:text-base mb-4 leading-relaxed">
          We may use the collected information for the following purposes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4">
          <li>To respond to your inquiries or requests;</li>
          <li>To provide company, product, or event information;</li>
          <li>To improve website functionality and user experience;</li>
          <li>To analyze website traffic and ensure system security;</li>
          <li>To comply with legal obligations or regulatory requirements.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          3. Information Sharing and Disclosure
        </h2>
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            We do not sell, rent, or trade your personal information. Your
            information may only be shared under the following limited
            circumstances:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4">
            <li>When you have given explicit consent;</li>
            <li>
              When required by applicable laws, court orders, or government
              authorities;
            </li>
            <li>
              With trusted service providers (such as hosting, analytics, or
              email delivery vendors) who assist us in operating our website,
              under confidentiality agreements.
            </li>
          </ol>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          4. Data Storage and Security
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4">
          <li>
            Your personal data is stored securely on protected servers with
            appropriate administrative, technical, and physical safeguards;
          </li>
          <li>
            We retain personal data only for as long as necessary to fulfill the
            purposes outlined in this policy;
          </li>
          <li>
            Where cross-border data transfer occurs, we ensure compliance with
            applicable data protection laws.
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">5. Your Rights</h2>
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Under Hong Kong&apos;s Personal Data (Privacy) Ordinance, you have
            the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4">
            <li>Request access to or correction of your personal data;</li>
            <li>Withdraw consent for the use of your information;</li>
            <li>Request deletion of your data (where permitted by law).</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed">
            To exercise your rights or raise questions, please contact us at:{' '}
            <a
              href="mailto:support@haame.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              support@haame.com
            </a>
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          6. Third-Party Links
        </h2>
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Our website may contain links to third-party websites or resources.
            We are not responsible for the privacy practices or content of those
            external sites. We recommend that you read their respective privacy
            policies before providing any personal information.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">7. Policy Updates</h2>
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            We may revise this Privacy Policy from time to time. Any updates
            will be posted on this page and become effective immediately upon
            publication.
          </p>
        </div>
      </section>
    </div>
  );
}
