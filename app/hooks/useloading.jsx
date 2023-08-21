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
      }, 3000); // Set the duration in milliseconds (3 seconds in this example).
    }
  }, []);

  return isLoading;
}
