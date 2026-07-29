import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { contactInfo, socialLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const icons = {
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  location: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  external: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  ),
};

const ContactCard = ({ icon, label, value, subValue, href, index }) => (
  <motion.a
    href={href}
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="green-pink-gradient p-[1px] rounded-2xl shadow-card block group"
  >
    <div className="bg-black-100 rounded-2xl p-6 h-full flex items-start gap-4 transition-colors duration-300 group-hover:bg-tertiary">
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-tertiary flex items-center justify-center text-[#915EFF] group-hover:scale-110 transition-transform duration-300">
        {icons[icon]}
      </div>
      <div className="min-w-0">
        <p className="text-secondary text-[14px] uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-white text-[17px] font-semibold truncate group-hover:text-[#915EFF] transition-colors duration-300">
          {value}
        </p>
        {subValue && (
          <p className="text-secondary text-[15px] mt-2">{subValue}</p>
        )}
      </div>
    </div>
  </motion.a>
);

const SocialCard = ({ name, handle, link, icon, index }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="green-pink-gradient p-[1px] rounded-2xl shadow-card block group"
  >
    <div className="bg-black-100 rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 group-hover:bg-tertiary">
      <div className="w-14 h-14 rounded-full bg-tertiary flex items-center justify-center text-white group-hover:text-[#915EFF] group-hover:scale-110 transition-all duration-300">
        {icons[icon]}
      </div>
      <div>
        <p className="text-white font-semibold text-[16px]">{name}</p>
        <p className="text-secondary text-[14px] mt-1">{handle}</p>
      </div>
      <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {icons.external}
      </span>
    </div>
  </motion.a>
);

const FindMe = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Connect with me</p>
        <h2 className={styles.sectionHeadText}>Find Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {contactInfo.tagline}
      </motion.p>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        <ContactCard
          icon="email"
          label="Email"
          value={contactInfo.email}
          href={`mailto:${contactInfo.email}`}
          index={0}
        />
        <ContactCard
          icon="phone"
          label="Phone"
          value={contactInfo.phone}
          subValue={contactInfo.location}
          href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
          index={1}
        />
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 0.75)}
        className="mt-16"
      >
        <p className="text-white text-[20px] font-bold mb-8">Social Profiles</p>
        <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <SocialCard key={social.name} index={index} {...social} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.4, 0.75)}
        className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-secondary text-[15px]">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            <span className="text-[#915EFF]">dev</span>Abraham
          </span>
          . All rights reserved.
        </p>
        <p className="text-secondary text-[14px]">
          Crafting thoughtful digital experiences
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(FindMe, "findme");
