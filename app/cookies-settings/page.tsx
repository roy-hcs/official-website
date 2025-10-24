export default function CookiesSettingsPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-3 md:p-8 text-[#020f2c]">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Last Updated: October 22, 2025
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          This Cookie Policy explains how Haame (&ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;) uses cookies and similar
          technologies on www.haame.com. We respect your privacy and use cookies
          only to improve your browsing experience, analyze site usage, and
          enhance website security.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          1. What Are Cookies?
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          Cookies are small text files placed on your device when you visit a
          website. They help remember your preferences, improve navigation, and
          enhance functionality. Cookies do not contain personally identifiable
          information.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          2. Types of Cookies We Use
        </h2>
        <p className="text-sm md:text-base mb-6 leading-relaxed">
          We use the following categories of cookies on this website:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm md:text-base font-bold mb-2">
              Strictly Necessary Cookies
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Essential for the website to function properly (e.g., page
              navigation, form submission, language selection). These cannot be
              disabled.
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-bold mb-2">
              Analytics & Performance Cookies
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Used to collect anonymous data on website usage and performance
              (e.g., Google Analytics) to help us improve our content and
              design.
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-bold mb-2">
              Functional Cookies
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Enable the website to remember your preferences, such as language
              or region settings, to enhance user experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-bold mb-2">
              Marketing Cookies (Optional)
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              With your consent, we may use third-party tools (e.g., Google Ads,
              Meta Pixel) to measure advertising performance and deliver
              relevant content.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          3. How to Manage or Disable Cookies
        </h2>
        <p className="text-sm md:text-base mb-4 leading-relaxed">
          You can control or delete cookies through your browser settings. For
          example:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4 mb-4">
          <li>
            <strong>Chrome:</strong> Settings → Privacy and security → Cookies
            and site data
          </li>
          <li>
            <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
          </li>
          <li>
            <strong>Edge / Firefox:</strong> Settings → Privacy & Security
          </li>
        </ul>
        <p className="text-sm md:text-base leading-relaxed">
          Please note that disabling cookies may affect certain website features
          or functionality.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          4. Third-Party Cookies
        </h2>
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Some embedded content or tools (e.g., analytics, social media,
            videos) may set their own cookies. We do not control these cookies
            and recommend reviewing the respective third-party cookie policies.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          5. Updates to This Policy
        </h2>
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            We may update this Cookie Policy from time to time. Any changes will
            be posted on this page and will take effect immediately upon
            publication.
          </p>
        </div>
      </section>

      {/* Section 6 - Contact */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">6. Contact Us</h2>
        <p className="text-sm md:text-base mb-4 leading-relaxed">
          If you have any questions about our use of cookies, please contact us
          at:
        </p>
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <span>📧</span>
          <a
            href="mailto:support@haame.com"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            support@haame.com
          </a>
        </div>
      </section>
    </div>
  );
}
