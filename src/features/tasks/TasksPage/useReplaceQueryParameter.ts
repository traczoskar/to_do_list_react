import { useLocation, useHistory } from "react-router-dom";

interface Query {
  key: string;
  value?: string;
}

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return ({ key, value }: Query) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
