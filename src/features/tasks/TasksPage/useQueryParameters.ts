import { useLocation } from "react-router-dom";

export const useQueryParameter = (key: string) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(key);
  return query;
};
