import { useEffect, useState } from "react";

const useCustomHook = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
      
  }, []);
  return [packages, setPackages];
};

export default useCustomHook;
