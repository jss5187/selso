import React from "react";
import { motion } from "framer-motion";

const Personality: React.FC = () => {
  const personalityTraits = [
    {
      trait: "모험적",
      description: "새로운 경험과 도전을 두려워하지 않아요",
      color: "#ff6b6b",
    },
    {
      trait: "실용적",
      description: "현실적이고 구체적인 해결책을 선호해요",
      color: "#feca57",
    },
    {
      trait: "적응력",
      description: "변화하는 상황에 빠르게 적응하는 편이에요",
      color: "#4ecdc4",
    },
    {
      trait: "에너지 넘침",
      description: "활발하고 긍정적인 에너지를 가지고 있어요",
      color: "#45b7d1",
    },
    {
      trait: "직관적",
      description: "순간적인 판단력과 직감이 뛰어나요",
      color: "#96ceb4",
    },
    {
      trait: "친화적",
      description: "사람들과 쉽게 친해지고 대화를 잘해요",
      color: "#ff9ff3",
    },
  ];

  return (
    <motion.section
      className="personality-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      <div className="container">
        <h2 className="section-title">성격 & MBTI</h2>

        <div className="personality-content">
          <div className="mbti-section">
            <h3>MBTI: ESTP</h3>
            <p className="mbti-description">
              ESTP는 "모험가" 타입으로, 활발하고 실용적인 성격을 가지고 있어요.
              새로운 경험을 좋아하고 순간적인 판단력이 뛰어나며, 변화하는 상황에
              빠르게 적응하는 능력이 있어요. 사람들과의 만남을 즐기고 현실적인
              문제 해결을 선호해요.
            </p>
          </div>

          <div className="traits-section">
            <h3>성격 특성</h3>
            <div className="traits-grid">
              {personalityTraits.map((trait, index) => (
                <motion.div
                  key={trait.trait}
                  className="trait-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="trait-name">{trait.trait}</h4>
                  <p className="trait-description">{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Personality;
