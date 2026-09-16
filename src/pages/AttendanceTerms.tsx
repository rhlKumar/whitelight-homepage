import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FileText,
  Database,
  UserCheck,
  ShieldAlert,
  Scale,
  Smartphone,
  CreditCard,
  Power,
  RefreshCw,
  Globe,
  Mail,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
};

const SectionIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[hsl(12,76%,52%/0.12)] flex items-center justify-center">
    <Icon className="w-5 h-5 text-[hsl(12,76%,52%)]" />
  </div>
);

const Section = ({
  icon,
  title,
  children,
  index,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  index: number;
}) => (
  <motion.section
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    variants={fadeIn}
    className="space-y-4"
  >
    <div className="flex items-center gap-3">
      <SectionIcon icon={icon} />
      <h2 className="text-xl sm:text-2xl font-bold text-[hsl(0,0%,12%)]">{title}</h2>
    </div>
    <div className="pl-[52px] space-y-3 text-[hsl(0,0%,30%)] leading-relaxed text-[15px]">
      {children}
    </div>
  </motion.section>
);

const Bullet = ({ bold, children }: { bold?: string; children?: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(12,76%,52%)] flex-shrink-0" />
    <span>
      {bold && <strong className="text-[hsl(0,0%,12%)]">{bold}</strong>}
      {children}
    </span>
  </li>
);

const COMPANY_NAME = "Whitelight Ventures LLP";
const SUPPORT_EMAIL = "company@whitelightventure.com";
const LAST_UPDATED = "September 16, 2026";

type Props = {
  appName: string;
  slug: string;
};

const AttendanceTerms = ({ appName, slug }: Props) => {
  const url = `https://whitelightventure.com/${slug}/terms`;

  return (
    <div className="min-h-screen bg-[hsl(20,30%,97%)]">
      <Helmet>
        <title>{appName} Terms of Use</title>
        <meta
          name="description"
          content={`Terms of use for ${appName}, operated by ${COMPANY_NAME}. An offline attendance app; data stays on your device.`}
        />
        <meta property="og:title" content={`${appName} Terms of Use`} />
        <meta
          property="og:description"
          content={`Terms for using ${appName} — an offline attendance and staff register app. Not a substitute for proper payroll practices.`}
        />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={`${appName} Terms of Use`} />
        <meta
          name="twitter:description"
          content={`Terms for using ${appName} — offline attendance app.`}
        />
        <link rel="canonical" href={url} />
      </Helmet>

      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[hsl(12,76%,52%)] via-[hsl(16,80%,58%)] to-[hsl(25,85%,60%)] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative container max-w-3xl mx-auto px-5 py-16 sm:py-24 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6"
          >
            <FileText className="w-8 h-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3"
          >
            Terms of Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-white/80 text-lg font-medium"
          >
            {appName}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-white/60 text-sm"
          >
            Last Updated: {LAST_UPDATED}
          </motion.p>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-3xl mx-auto px-5 py-12 sm:py-16 space-y-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-[hsl(12,76%,52%/0.15)] bg-white p-6 shadow-sm space-y-3"
        >
          <p className="text-[hsl(0,0%,30%)] leading-relaxed">
            Please read these Terms carefully before using {appName}.
          </p>
          <p className="text-[hsl(0,0%,30%)] leading-relaxed font-semibold">
            By using the App, you agree to these Terms. If you do not agree, please discontinue use of the
            App immediately. Your use of the App is also subject to our Privacy Policy.
          </p>
        </motion.div>

        {/* 1. Nature of the Service */}
        <Section icon={Database} title="1. Nature of the Service" index={1}>
          <p>
            {appName} is an offline attendance and staff register application. It stores the information
            you enter — such as employee names, attendance records, and salary information — locally on
            your device.
          </p>
          <ul className="space-y-2">
            <Bullet>Operates offline; no internet connection is required.</Bullet>
            <Bullet>Does not require an account or login.</Bullet>
            <Bullet>Stores your data locally on your device.</Bullet>
            <Bullet>Does not automatically sync or back up your data to our servers.</Bullet>
          </ul>
        </Section>

        {/* 2. User Responsibility */}
        <Section icon={UserCheck} title="2. User Responsibility" index={2}>
          <p>You are responsible for:</p>
          <ul className="space-y-2">
            <Bullet>The accuracy of the attendance and salary information you enter.</Bullet>
            <Bullet>Maintaining the security of your device and your own backups of the data.</Bullet>
            <Bullet>Obtaining any necessary consents from your employees before recording their information.</Bullet>
            <Bullet>Complying with applicable labour, wage, and data-protection laws.</Bullet>
          </ul>
        </Section>

        {/* 3. No Warranty */}
        <Section icon={ShieldAlert} title="3. No Warranty" index={3}>
          <p>
            The App is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
          </p>
          <ul className="space-y-2">
            <Bullet>Salary and attendance calculations depend on the accuracy of your inputs.</Bullet>
            <Bullet>The App is not a substitute for proper payroll, accounting, or professional advice.</Bullet>
            <Bullet>We do not warrant that the App will be error-free, secure, or uninterrupted.</Bullet>
          </ul>
        </Section>

        {/* 4. Limitation of Liability */}
        <Section icon={Scale} title="4. Limitation of Liability" index={4}>
          <p>
            To the maximum extent permitted by law, {COMPANY_NAME} shall not be liable for:
          </p>
          <ul className="space-y-2">
            <Bullet>Payroll or salary decisions made based on the App.</Bullet>
            <Bullet>Loss of data stored locally on your device (e.g., due to device loss, damage, or app uninstall).</Bullet>
            <Bullet>Indirect, incidental, or consequential damages.</Bullet>
          </ul>
          <p className="font-semibold text-[hsl(0,0%,12%)]">Your use of the App is at your own risk.</p>
        </Section>

        {/* 5. Google Play Disclaimer */}
        <Section icon={Smartphone} title="5. Google Play Disclaimer" index={5}>
          <p>If you downloaded the App from Google Play:</p>
          <ul className="space-y-2">
            <Bullet>Google is not responsible for the App.</Bullet>
            <Bullet>Google has no obligation to provide maintenance or support for the App.</Bullet>
            <Bullet>Google is a third-party beneficiary of these Terms.</Bullet>
          </ul>
        </Section>

        {/* 6. Subscriptions */}
        <Section icon={CreditCard} title="6. Subscriptions" index={6}>
          <p>
            {appName} offers paid subscriptions. Payments are processed through third-party payment gateways
            (Razorpay and/or PhonePe).
          </p>
          <ul className="space-y-2">
            <Bullet>Available plans may include a <strong className="text-[hsl(0,0%,12%)]">weekly subscription</strong> and an <strong className="text-[hsl(0,0%,12%)]">annual subscription</strong>.</Bullet>
            <Bullet>The annual subscription may include a <strong className="text-[hsl(0,0%,12%)]">free trial</strong> where offered.</Bullet>
            <Bullet>Payment is processed via Razorpay/PhonePe at the time of purchase.</Bullet>
            <Bullet>Where you authorize auto-debit, the subscription renews automatically unless cancelled before the next billing date.</Bullet>
            <Bullet>You can manage or cancel your subscription in the App&rsquo;s account settings.</Bullet>
            <Bullet>Refunds are handled in accordance with our refund policy and the applicable payment gateway&rsquo;s terms.</Bullet>
          </ul>
          <p className="text-sm italic text-[hsl(0,0%,45%)]">
            Payment instrument details (such as card or UPI credentials) are handled by the payment gateway;
            we do not store them.
          </p>
        </Section>

        {/* 7. Termination */}
        <Section icon={Power} title="7. Termination" index={7}>
          <ul className="space-y-2">
            <Bullet>You may stop using the App at any time.</Bullet>
            <Bullet>We reserve the right to modify, suspend, or discontinue the App (or any part of it) without notice.</Bullet>
            <Bullet>We may terminate or restrict access if you breach these Terms.</Bullet>
          </ul>
        </Section>

        {/* 8. Changes to Terms */}
        <Section icon={RefreshCw} title="8. Changes to Terms" index={8}>
          <p>
            We may update these Terms periodically. The updated version will be posted with a revised
            &ldquo;Last Updated&rdquo; date. Continued use of the App after such changes constitutes
            acceptance of the revised Terms.
          </p>
        </Section>

        {/* 9. Governing Law */}
        <Section icon={Globe} title="9. Governing Law" index={9}>
          <p>
            These Terms are governed by and construed in accordance with the laws of India.
          </p>
        </Section>

        {/* 10. Contact */}
        <Section icon={Mail} title="10. Contact" index={10}>
          <p>For questions regarding these Terms:</p>
          <div className="rounded-xl border border-[hsl(12,76%,52%/0.12)] bg-white p-4 space-y-1 text-[hsl(0,0%,30%)]">
            <p className="font-bold text-[hsl(0,0%,12%)]">{COMPANY_NAME}</p>
            <p>7th Floor, B-708, Twin Tower CHS</p>
            <p>2nd Cross Lane, Lokhandwala Complex</p>
            <p>Andheri West, Mumbai</p>
            <p>Mumbai Suburban, Maharashtra 400053</p>
            <p className="pt-1">
              Email:{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-[hsl(12,76%,52%)] underline underline-offset-2 hover:text-[hsl(12,76%,42%)] transition-colors"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-xl bg-[hsl(12,76%,52%)] text-white font-medium text-sm hover:bg-[hsl(12,76%,45%)] transition-colors shadow-md shadow-[hsl(12,76%,52%/0.25)]"
          >
            <Mail className="w-4 h-4" />
            {SUPPORT_EMAIL}
          </a>
        </Section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-[hsl(12,76%,52%/0.1)] pt-8 mt-12 text-center text-sm text-[hsl(0,0%,55%)]"
        >
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </motion.footer>
      </main>
    </div>
  );
};

export default AttendanceTerms;
