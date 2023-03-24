import { useEffect, useState } from "react";

const useFetch = (
  url: string
): { data: any; isPending: Boolean; error: string | null } => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("could not fetch your requested server. try again");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        setData(false);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
