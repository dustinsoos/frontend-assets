import { useEffect, useState } from "react";

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem(window.location.pathname);

    if (hasLoaded) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem(window.location.pathname, "true");
      }, 2000);
    }
  }, []);

  return isLoading;
}
