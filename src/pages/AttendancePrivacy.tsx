import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Target,
  Database,
  Share2,
  Trash2,
  Lock,
  Users,
  RefreshCw,
  UserCheck,
  Mail,
  ShieldCheck,
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

const AttendancePrivacy = ({ appName, slug }: Props) => {
  const url = `https://whitelightventure.com/${slug}/privacy`;

  return (
    <div className="min-h-screen bg-[hsl(20,30%,97%)]">
      <Helmet>
        <title>{appName} Privacy Policy</title>
        <meta
          name="description"
          content={`Privacy policy for ${appName}, operated by ${COMPANY_NAME}. An offline attendance app — your employee and attendance data stays on your device.`}
        />
        <meta property="og:title" content={`${appName} Privacy Policy`} />
        <meta
          property="og:description"
          content={`${appName} works offline and stores your data locally on your device. No accounts, no server uploads.`}
        />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={`${appName} Privacy Policy`} />
        <meta
          name="twitter:description"
          content={`Offline attendance app. Your data stays on your device.`}
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
            <Shield className="w-8 h-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3"
          >
            Privacy Policy
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
            {appName} is operated by {COMPANY_NAME} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;).
            We recognize that your privacy is important and take it seriously. This Privacy Policy
            describes how {appName} collects, uses, and protects information when you use our mobile
            application (the &ldquo;App&rdquo;).
          </p>
          <p className="text-[hsl(0,0%,30%)] leading-relaxed">
            By using {appName}, you agree to this Privacy Policy.
          </p>
        </motion.div>

        {/* 1. Information We Collect */}
        <Section icon={FileText} title="1. Information We Collect" index={1}>
          <p>{appName} is designed to operate primarily <strong className="text-[hsl(0,0%,12%)]">offline</strong>.</p>
          <p>
            The App <strong className="text-[hsl(0,0%,12%)]">does not require you to create an account</strong> or
            sign in using Google, Facebook, or any other third-party authentication service.
          </p>
          <p>The information you enter into the App, such as:</p>
          <ul className="space-y-2">
            <Bullet>Employee names</Bullet>
            <Bullet>Attendance records</Bullet>
            <Bullet>Salary information</Bullet>
            <Bullet>Business name</Bullet>
            <Bullet>Other work-related information</Bullet>
          </ul>
          <p>is stored <strong className="text-[hsl(0,0%,12%)]">locally on your device</strong> to provide the App&rsquo;s functionality.</p>
          <p>
            We do <strong className="text-[hsl(0,0%,12%)]">not</strong> collect your passwords, phone number,
            OTPs, contacts, messages, or other personal information unless you voluntarily provide it when
            contacting our support team.
          </p>
        </Section>

        {/* 2. How We Use Your Information */}
        <Section icon={Target} title="2. How We Use Your Information" index={2}>
          <ul className="space-y-2">
            <Bullet>Manage employee attendance.</Bullet>
            <Bullet>Calculate salaries and wages.</Bullet>
            <Bullet>Generate attendance and payroll reports.</Bullet>
            <Bullet>Improve your experience while using the application.</Bullet>
          </ul>
          <p>Since the App operates offline, your information remains on your device.</p>
        </Section>

        {/* 3. Data Storage */}
        <Section icon={Database} title="3. Data Storage" index={3}>
          <p>
            All attendance records, salary information, employee details, and other data entered into
            {" "}{appName} are stored locally on your device using secure local storage.
          </p>
          <p>
            We do <strong className="text-[hsl(0,0%,12%)]">not</strong> upload, synchronize, or back up your
            data to our servers.
          </p>
        </Section>

        {/* 4. Data Sharing */}
        <Section icon={Share2} title="4. Data Sharing" index={4}>
          <p>{appName} operates entirely offline.</p>
          <p>
            We do <strong className="text-[hsl(0,0%,12%)]">not</strong> sell, transmit, upload, or share your
            attendance records, salary information, employee details, or business data with any third party.
          </p>
          <p>Your data remains under your control on your own device.</p>
          <p>We may disclose information only if required by applicable law or a valid legal process.</p>
        </Section>

        {/* 5. Data Deletion */}
        <Section icon={Trash2} title="5. Data Deletion" index={5}>
          <p>
            Since {appName} stores your information locally on your device, you have complete control over
            your data.
          </p>
          <ul className="space-y-2">
            <Bullet>Clear the application&rsquo;s storage from your device settings, or</Bullet>
            <Bullet>Uninstall the application.</Bullet>
          </ul>
          <p>Once deleted, the data cannot be recovered unless you have created your own backup.</p>
        </Section>

        {/* 6. Security */}
        <Section icon={Lock} title="6. Security" index={6}>
          <p>
            We implement reasonable security measures to protect the application and your locally stored
            information. However, no method of electronic storage is completely secure. Users are
            responsible for maintaining the security of their devices.
          </p>
        </Section>

        {/* 7. Children's Privacy */}
        <Section icon={Users} title="7. Children's Privacy" index={7}>
          <p>
            {appName} is intended for users aged <strong className="text-[hsl(0,0%,12%)]">18 years and above</strong>.
            We do not knowingly collect personal information from children.
          </p>
        </Section>

        {/* 8. Changes to This Privacy Policy */}
        <Section icon={RefreshCw} title="8. Changes to This Privacy Policy" index={8}>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be published with
            a revised &ldquo;Last Updated&rdquo; date. Continued use of {appName} constitutes acceptance of
            the updated Privacy Policy.
          </p>
        </Section>

        {/* 9. Grievance Officer */}
        <Section icon={UserCheck} title="9. Grievance Officer" index={9}>
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
          <p>The Grievance Officer will acknowledge complaints within 3 business days and resolve them within 30 days.</p>
        </Section>

        {/* 10. Contact Us */}
        <Section icon={Mail} title="10. Contact Us" index={10}>
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

        {/* Compliance */}
        <Section icon={ShieldCheck} title="Compliance" index={11}>
          <p>This Privacy Policy complies with:</p>
          <ul className="space-y-2">
            <Bullet>Google Play User Data Policy</Bullet>
            <Bullet>Google Play Data Safety Requirements</Bullet>
            <Bullet>Google Play Data Deletion Requirements</Bullet>
            <Bullet>Information Technology Act, 2000</Bullet>
            <Bullet>
              Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal
              Data or Information) Rules, 2011
            </Bullet>
          </ul>
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

export default AttendancePrivacy;
