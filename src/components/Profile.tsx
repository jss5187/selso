import React from "react";
import { motion } from "framer-motion";

const Profile: React.FC = () => {
  return (
    <motion.section
      className="profile-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container">
        <h2 className="section-title">프로필</h2>
        <div className="profile-content">
          <div className="profile-image">
            <div className="image-placeholder">
              <p>사진을 여기에 넣어주세요</p>
            </div>
          </div>
          <div className="profile-info">
            <h3 className="name">[이름]</h3>
            <div className="info-item">
              <span>서울 강서구</span>
            </div>
            <div className="info-item">
              <span>블록체인 개발자</span>
            </div>
            <p className="bio">
              안녕하세요! Node.js를 주로 사용하는 개발자입니다. 새로운 기술을
              배우는 것을 좋아하고, 사용자 경험을 개선하는 것에 관심이 많습니다.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
