export default function TermsOfServicePage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-3 md:p-8 text-[#020f2c]">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Terms of Use</h1>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Last Updated: October 22, 2025
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          Welcome to the official website of Haame Tech Limited
          (&ldquo;Haame,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;). These Terms of Use (&ldquo;Terms&rdquo;) govern
          your access to and use of our website www.haame.com. By using this
          website, you agree to comply with these Terms.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          1. Nature of the Website
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4">
          <li>
            This website is operated by Haame Tech Limited, a company registered
            in the Hong Kong Special Administrative Region;
          </li>
          <li>
            The website is intended solely for corporate presentation, product
            introduction, news, and contact purposes;
          </li>
          <li>
            The website does not provide user registration, financial
            transactions, or online subscription services.
          </li>
        </ol>
      </section>

      {/* Section 2 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">2. Acceptable Use</h2>
        <p className="text-sm md:text-base mb-4 leading-relaxed">
          When using this website, you agree that you will not:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4">
          <li>
            Infringe upon the rights, reputation, or interests of Haame or any
            third party;
          </li>
          <li>
            Upload, post, or distribute any unlawful, misleading, defamatory, or
            infringing content;
          </li>
          <li>
            Attempt to hack, disrupt, or interfere with the website&apos;s
            operations;
          </li>
          <li>Use this website for any illegal or unauthorized purposes.</li>
        </ol>
      </section>

      {/* Section 3 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          3. Intellectual Property Rights
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4">
          <li>
            All content on this website — including text, images, icons, logos,
            videos, layout, and source code — is the property of Haame Tech
            Limited or its licensors;
          </li>
          <li>
            You may not copy, reproduce, modify, or distribute any material
            without prior written permission;
          </li>
          <li>
            &ldquo;Haame&rdquo; and its logo are registered trademarks of Haame
            Tech Limited and are protected under applicable laws.
          </li>
        </ol>
      </section>

      {/* Section 4 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">4. Disclaimer</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4">
          <li>
            The information on this website is for general informational
            purposes only and does not constitute any offer, warranty, or
            investment advice;
          </li>
          <li>
            While we strive to ensure accuracy, we do not guarantee that all
            content is error-free, complete, or up to date;
          </li>
          <li>
            Haame shall not be liable for any loss or damage caused by network
            issues, technical failures, or third-party actions;
          </li>
          <li>
            Links to external websites are provided for convenience only, and
            Haame is not responsible for their content or reliability.
          </li>
        </ol>
      </section>

      {/* Section 5 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          5. Modifications and Termination
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4">
          <li>
            We reserve the right to modify or update these Terms or any part of
            the website at any time without prior notice;
          </li>
          <li>
            Continued use of the website after such changes constitutes your
            acceptance of the updated Terms.
          </li>
        </ol>
      </section>

      {/* Section 6 */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          6. Governing Law and Jurisdiction
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm md:text-base leading-relaxed ml-4">
          <li>
            These Terms shall be governed by and construed in accordance with
            the laws of the Hong Kong Special Administrative Region;
          </li>
          <li>
            Any dispute arising from or in connection with these Terms shall be
            submitted to the courts of Hong Kong SAR for resolution.
          </li>
        </ol>
      </section>

      {/* Section 7 - Contact */}
      <section className="mb-8 md:mb-10">
        <h2 className="text-lg md:text-xl font-bold mb-4">7. Contact Us</h2>
        <p className="text-sm md:text-base mb-4 leading-relaxed">
          If you have any questions regarding this website, Privacy Policy, or
          these Terms, please contact:
        </p>
        <div className="space-y-2 text-sm md:text-base leading-relaxed">
          <div className="flex items-center space-x-2">
            <span>📧</span>
            <a
              href="mailto:support@haame.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              support@haame.com
            </a>
          </div>
          <div className="flex items-start space-x-2">
            <span>📍</span>
            <div>
              <div>Haame Tech Limited</div>
              <div>Hong Kong SAR, China</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span>🌐</span>
            <a
              href="https://www.haame.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              www.haame.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
