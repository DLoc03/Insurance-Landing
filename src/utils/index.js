import { useNavigate } from "react-router-dom";

import { items } from "@/datas/service.json";

export function useHandleNavigate() {
  const navigate = useNavigate();

  const handleNavigate = (path, options = {}) => {
    if (!path) return;
    navigate(path, options);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return handleNavigate;
}

export const getServiceByKeyword = (keyword) => {
  const lowerKeyword = keyword.toLowerCase();
  return items.filter(
    (item) => item.name && item.name.toLowerCase().includes(lowerKeyword)
  );
};

// animations.js
export const fadeIn = (direction = "up", delay = 0, duration = 0.6) => {
  let x = 0,
    y = 0;
  if (direction === "left") x = -100;
  if (direction === "right") x = 100;
  if (direction === "up") y = 100;
  if (direction === "down") y = -100;

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay, duration, ease: "easeOut" },
    },
  };
};

export const scaleUp = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const rotateIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, rotate: -180, scale: 0.5 },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { delay, duration, type: "spring" },
  },
});

export const bounceIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration, type: "spring", bounce: 0.5 },
  },
});

export const zoomIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: "easeInOut" },
  },
});
