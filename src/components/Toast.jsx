import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const toastStyles = {
  success: {
    border: "green-pink-gradient",
    iconBg: "bg-[#00cea8]/20",
    iconColor: "text-[#00cea8]",
    title: "Message sent!",
  },
  error: {
    border: "bg-gradient-to-r from-[#f12711] to-[#f5af19]",
    iconBg: "bg-[#f12711]/20",
    iconColor: "text-[#f5af19]",
    title: "Something went wrong",
  },
  info: {
    border: "bg-gradient-to-r from-[#915EFF] to-[#bf61ff]",
    iconBg: "bg-[#915EFF]/20",
    iconColor: "text-[#915EFF]",
    title: "Notice",
  },
};

const icons = {
  success: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
  ),
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  ),
};

const Toast = ({ message, type = "success", show, onClose }) => {
  const style = toastStyles[type] || toastStyles.info;

  useEffect(() => {
    if (!show) return undefined;

    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: -20, x: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, x: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="fixed top-24 right-4 sm:right-8 z-[100] w-[calc(100%-2rem)] max-w-md"
        >
          <div className={`${style.border} p-[1px] rounded-2xl shadow-card`}>
            <div className="bg-black-100 rounded-2xl p-5 flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl ${style.iconBg} ${style.iconColor} flex items-center justify-center`}
              >
                {icons[type]}
              </div>

              <div className="flex-1 min-w-0 pt-0.5">
                <p className="text-white font-semibold text-[16px] mb-1">
                  {style.title}
                </p>
                <p className="text-secondary text-[14px] leading-relaxed">
                  {message}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Dismiss notification"
                className="flex-shrink-0 text-secondary hover:text-white transition-colors duration-200 p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
