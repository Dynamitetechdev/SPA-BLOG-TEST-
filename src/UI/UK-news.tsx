import { useEffect, useState } from "react";
import AllNews from "../component/allNews";
import Search from "../component/search";
import useFetch from "../component/useFetch";

const UkNews = () => {
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    if (data) {
      const newDataArr = data.slice(0, 11);
      setNewData(newDataArr);
    }
  }, [data]);

  return (
    <div className="wrapper">
      <Search />
      <AllNews newData={newData} isPending={isPending} error={error} />
    </div>
  );
};

export default UkNews;
