import { useEffect, useState } from "react";

// configure your hostname to set baseUrl
// const baseUrl = `http://localhost/wordpress`;
const baseUrl = "https://ksc.iuu.mn";

const useFectch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const req = await fetch(`${baseUrl}${url}`, {
          cache: "no-cache",
        });
        const categories = await req.json();
        categories && setData(categories);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    getData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFectch;
