import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="mt-7 min-h-screen bg-darkBackground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted text-lg">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-cardBg rounded-xl p-8 mb-8 border border-gray-800">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">
              Introduction
            </h2>
            <p className="text-muted mb-4">
              At [Your Company Name], we are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
            <p className="text-muted">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site or use our services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Information Collection */}
            <div className="bg-cardBg rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted mb-4">
                We may collect information about you in a variety of ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone
                  number, and other contact information you voluntarily provide
                  when contacting us or using our services.
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details and
                  billing information when you purchase our services (processed
                  through secure third-party payment processors).
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type,
                  operating system, and usage data collected automatically
                  through cookies and similar technologies.
                </li>
                <li>
                  <strong>Project Data:</strong> Information related to your
                  project requirements when you engage our services.
                </li>
              </ul>
            </div>

            {/* Use of Information */}
            <div className="bg-cardBg rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted mb-4">
                We use the information we collect in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted">
                <li>To provide, operate, and maintain our services</li>
                <li>To improve, personalize, and expand our services</li>
                <li>To understand and analyze how you use our services</li>
                <li>
                  To develop new products, services, features, and functionality
                </li>
                <li>
                  To communicate with you, either directly or through one of our
                  partners
                </li>
                <li>To process your transactions and manage your orders</li>
                <li>To send you emails and marketing communications</li>
                <li>To find and prevent fraud</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="bg-cardBg rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                3. Sharing Your Information
              </h2>
              <p className="text-muted mb-4">
                We may share information we have collected about you in certain
                situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted">
                <li>
                  <strong>Service Providers:</strong> With third-party vendors
                  who perform services for us (payment processing, data
                  analysis, email delivery, hosting services, etc.).
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any
                  merger, sale of company assets, or acquisition of all or a
                  portion of our business.
                </li>
                <li>
                  <strong>Legal Obligations:</strong> If required to do so by
                  law or in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>Business Partners:</strong> With our trusted partners
                  to offer you certain products, services, or promotions.
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="bg-cardBg rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                4. Cookies and Tracking Technologies
              </h2>
              <p className="text-muted mb-4">
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. Types of
                cookies we use:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website
                  to function properly.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how
                  visitors interact with our website.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Allow the website to
                  remember choices you make.
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> Used to deliver ads
                  relevant to you.
                </li>
              </ul>
              <p className="text-muted mt-4">
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent.
              </p>
            </div>

            {/* Data Security */}
            <div className="bg-cardBg rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                5. Data Security
              </h2>
              <p className="text-muted mb-4">
                We implement appropriate technical and organizational measures
                to protect personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls and authentication procedures</li>
                <li>Data minimization and retention policies</li>
              </ul>
              <p className="text-muted mt-4">
                While we strive to protect your information, no electronic
                transmission or storage is 100% secure.
              </p>
            </div>

            {/* User Rights */}
            <div className="bg-cardBg rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                6. Your Data Protection Rights
              </h2>
              <p className="text-muted mb-4">
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted">
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification if information is inaccurate</li>
                <li>The right to object to our processing of your data</li>
                <li>The right to request restriction of processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-muted mt-4">
                To exercise these rights, please contact us at{" "}
                <span className="text-primary-500">
                  privacy@yourcompany.com
                </span>
                .
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-cardBg rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-muted">
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from children under 13.
                If we discover that a child under 13 has provided us with
                personal information, we will delete such information
                immediately.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="bg-cardBg rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-muted mb-4">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last Updated&quot; date.
              </p>
              <p className="text-muted">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-cardBg rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                9. Contact Us
              </h2>
              <p className="text-muted mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="space-y-2 text-muted">
                <li>
                  By email:{" "}
                  <span className="text-primary-500">
                    privacy@yourcompany.com
                  </span>
                </li>
                <li>By mail: [Your Company Address]</li>
                <li>By phone: [Your Contact Number]</li>
              </ul>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-block bg-primary-500 hover:bg-primary-700 text-darkBackground font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-button"
            >
              Contact Us for Privacy Questions
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
