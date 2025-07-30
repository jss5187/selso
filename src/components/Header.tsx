import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="header-content">
        <h1 className="title">안녕하세요! 👋</h1>
        {/* <p className="subtitle">개발자 [이름]의 소개페이지입니다</p> */}
      </div>
    </motion.header>
  );
};

export default Header;
