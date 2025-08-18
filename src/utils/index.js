import { useNavigate } from "react-router-dom";

export function useHandleNavigate() {
  const navigate = useNavigate();

  const handleNavigate = (path, options = {}) => {
    if (!path) return;
    navigate(path, options);
  };

  return handleNavigate;
}
