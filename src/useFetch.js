import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      // console.log("ran useEffect");
      fetch(url)
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error("Couldn't fetch the data from server");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisLoading(false);
        })
        .catch((err) => {
          // console.log(err.message);
          setisLoading(false);
          setError(err.message);
        });
    }, 500);
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
