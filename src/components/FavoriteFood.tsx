import React from "react";
import { motion } from "framer-motion";

const FavoriteFood: React.FC = () => {
  const foods = [
    {
      name: "피자",
      description: "치즈가 듬뿍 들어간 마르게리타 피자를 좋아해요",
      color: "#ff6b6b",
    },
    {
      name: "햄버거",
      description: "양파와 피클이 들어간 클래식 햄버거를 선호해요",
      color: "#feca57",
    },
    {
      name: "커피",
      description: "아메리카노와 라떼를 즐겨 마셔요",
      color: "#8b4513",
    },
    {
      name: "아이스크림",
      description: "바닐라와 초콜릿 맛을 가장 좋아해요",
      color: "#87ceeb",
    },
    {
      name: "회",
      description: "신선한 회를 즐겨 먹어요",
      color: "#4682b4",
    },
    {
      name: "샐러드",
      description: "건강한 샐러드도 자주 먹어요",
      color: "#90ee90",
    },
  ];

  return (
    <motion.section
      className="favorite-food-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="container">
        <h2 className="section-title">좋아하는 음식</h2>
        <div className="food-grid">
          {foods.map((food, index) => (
            <motion.div
              key={food.name}
              className="food-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
            >
              <h3 className="food-name">{food.name}</h3>
              <p className="food-description">{food.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FavoriteFood;
