import { useNavigate } from "react-router-dom";

export function useHandleNavigate() {
  const navigate = useNavigate();

  const handleNavigate = (path, options = {}) => {
    if (!path) return;
    navigate(path, options);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return handleNavigate;
}
