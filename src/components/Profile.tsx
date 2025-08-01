import React, { useState } from "react";
import { motion } from "framer-motion";

const Profile: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

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
            <div className="image-container">
              {!imageError && (
                <img
                  src="/profile-image.jpg"
                  alt="프로필 사진"
                  className={`profile-photo ${imageLoaded ? "loaded" : ""}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              )}
              {imageError && (
                <div className="image-placeholder">
                  <p>사진을 여기에 넣어주세요</p>
                </div>
              )}
            </div>
          </div>
          <div className="profile-info">
            <h3 className="name">정성산</h3>
            <div className="info-item">
              <span>LG CNS 블록체인 개발자</span>
            </div>
            <div className="info-item">
              <span>블록체인 기술 전문가</span>
            </div>
            <p className="bio">
              안녕하세요! LG CNS에서 블록체인 개발자로 일하고 있는 정성산입니다.
              블록체인 기술을 통해 혁신적인 솔루션을 개발하는 것에 열정을 가지고
              있으며, 새로운 기술 트렌드를 탐구하고 학습하는 것을 즐깁니다.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
