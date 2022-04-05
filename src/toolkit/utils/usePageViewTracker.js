import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFilter } from "contexts/FilterContext";

export const usePageViewTracker = () => {
  const location = useLocation();
  const [lastLocation, setLastLocation] = useState("");
  const { dispatchFilter } = useFilter();

  useEffect(() => {
    if (lastLocation.pathname === "/notesfeed") dispatchFilter({ type: "CLEAR_ALL" });
    setLastLocation(location);
  }, [location]);

  return [location, lastLocation];
};
