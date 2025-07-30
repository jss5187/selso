import React from "react";
import { motion } from "framer-motion";

const Interests: React.FC = () => {
  const personalInterests = [
    {
      name: "여행",
      description: "새로운 곳을 탐험하는 것을 좋아해요",
      color: "#ff6b6b",
    },
    {
      name: "음악",
      description: "다양한 장르의 음악을 즐겨 들어요",
      color: "#4ecdc4",
    },
    {
      name: "영화",
      description: "감동적인 스토리를 가진 영화를 좋아해요",
      color: "#45b7d1",
    },
    {
      name: "요리",
      description: "새로운 레시피를 시도하는 것을 즐겨해요",
      color: "#96ceb4",
    },
    {
      name: "운동",
      description: "건강한 라이프스타일을 추구해요",
      color: "#feca57",
    },
    {
      name: "독서",
      description: "좋은 책을 읽으며 마음의 여유를 찾아요",
      color: "#ff9ff3",
    },
  ];

  const lifestyleInterests = [
    "카페 탐방하기",
    "맛집 찾아다니기",
    "사진 촬영하기",
    "새로운 취미 배우기",
    "친구들과 만나기",
    "자연 속에서 힐링하기",
  ];

  return (
    <motion.section
      className="interests-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="container">
        <h2 className="section-title">관심사 & 라이프스타일</h2>

        <div className="interests-content">
          <div className="personal-interests">
            <h3>개인적 관심사</h3>
            <div className="interests-grid">
              {personalInterests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  className="interest-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="interest-name">{interest.name}</h4>
                  <p className="interest-description">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lifestyle-interests">
            <h3>일상의 즐거움</h3>
            <div className="lifestyle-grid">
              {lifestyleInterests.map((interest, index) => (
                <motion.div
                  key={interest}
                  className="lifestyle-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <span>✨ {interest}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Interests;
