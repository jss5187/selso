import React from "react";
import { motion } from "framer-motion";

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/niceonesanny",
      color: "#e4405f",
    },
    {
      name: "GitHub",
      url: "https://github.com/jss5187",
      color: "#333",
    },
  ];

  return (
    <motion.section
      className="social-links-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="container">
        <h2 className="section-title">연락처 & 소셜</h2>
        <p className="contact-description">
          더 자세한 이야기를 나누고 싶으시다면 아래 링크로 연락해주세요! 💬
        </p>

        <div className="social-links-grid">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              style={{ "--hover-color": link.color } as React.CSSProperties}
            >
              <span className="social-name">{link.name}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="footer-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
        >
          <p>함께 이야기 나누고 싶어요! 😊</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SocialLinks;
