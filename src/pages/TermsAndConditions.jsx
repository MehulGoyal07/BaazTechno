import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaLock, FaShieldAlt, FaUserShield } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function TermsAndConditions() {
  return (
   <>
   <Navbar/>
     <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-7 bg-darkBackground text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-cardBg rounded-full mb-6">
            <FaShieldAlt className="text-primary-500 text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms <span className="text-primary-500">&</span> Conditions
          </h1>
          <p className="text-muted max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-cardBg rounded-xl p-6 md:p-10 shadow-card"
        >
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              <FaLock className="text-sm" /> Introduction
            </h2>
            <p className="text-muted mb-4">
              Welcome to BaazTechno (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our website and services.
            </p>
            <p className="text-muted">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part, you may not access the service.
            </p>
          </section>

          {/* Accounts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              <FaUserShield className="text-sm" /> User Accounts
            </h2>
            <p className="text-muted mb-4">
              When creating an account with us, you must provide accurate information. You are responsible for maintaining the confidentiality of your account and password.
            </p>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                You agree to accept responsibility for all activities under your account
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                We reserve the right to refuse service, terminate accounts, or remove content at our discretion
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                You must be at least 18 years old to use our services
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property</h2>
            <p className="text-muted mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of BaazTechno and its licensors.
            </p>
            <p className="text-muted">
              Our trademarks and trade dress may not be used without prior written consent. All other trademarks are property of their respective owners.
            </p>
          </section>

          {/* Payments */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Payments & Subscriptions</h2>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                All fees are exclusive of taxes, which we will charge as applicable
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                You agree to pay all charges for purchases made under your account
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                Subscriptions automatically renew until canceled. Cancel at least 24 hours before renewal
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                No refunds for partial months or unused services
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              <FaExclamationTriangle className="text-sm" /> Limitation of Liability
            </h2>
            <p className="text-muted mb-4">
              In no event shall BaazTechno, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for:
            </p>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                Any indirect, incidental, special, consequential or punitive damages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                Any loss of profits, revenue, data, use, goodwill, or other intangible losses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                Any errors or omissions in any content or for any loss incurred as a result of content
              </li>
            </ul>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Governing Law</h2>
            <p className="text-muted">
              These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Changes to Terms</h2>
            <p className="text-muted mb-4">
              We reserve the right to modify these terms at any time. We will provide at least 30 days notice before any new terms take effect.
            </p>
            <p className="text-muted">
              What constitutes a material change will be determined at our sole discretion. Continued use after changes constitutes acceptance.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-muted">
              For questions about these Terms, please contact us at:
            </p>
            <p className="text-white mt-2">
              baaztechno@gmail.com
            </p>
          </section>
        </motion.div>

        {/* Acceptance Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-muted text-sm"
        >
          By using our services, you acknowledge that you have read and understood these Terms and Conditions.
        </motion.div>
      </div>
    </motion.main>
    <Footer/>
   </>
  );
}