import React from "react";
import { motion } from "framer-motion";

const Hobbies: React.FC = () => {
  const hobbies = [
    {
      title: "사진 촬영",
      description: "여행할 때마다 사진을 찍는 것을 좋아해요",
      color: "#ff6b6b",
    },
    {
      title: "게임",
      description: "가끔 게임을 하면서 스트레스를 해소해요",
      color: "#4ecdc4",
    },
    {
      title: "요리",
      description: "새로운 레시피를 시도하는 것을 좋아해요",
      color: "#45b7d1",
    },
    {
      title: "독서",
      description: "기술 서적과 소설을 즐겨 읽어요",
      color: "#96ceb4",
    },
    {
      title: "음악",
      description: "다양한 장르의 음악을 듣는 것을 좋아해요",
      color: "#feca57",
    },
    {
      title: "여행",
      description: "새로운 곳을 탐험하는 것을 좋아해요",
      color: "#ff9ff3",
    },
  ];

  return (
    <motion.section
      className="hobbies-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="container">
        <h2 className="section-title">취미</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="hobby-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-description">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hobbies;
