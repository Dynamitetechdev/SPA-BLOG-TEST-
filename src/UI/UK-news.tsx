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

  const [searchInput, setSearchInput] = useState<string | null>(null);

  const filteredData = newData.filter((news) =>
    news.title.toLowerCase().includes(searchInput)
  );
  return (
    <div className="wrapper">
      <div className="search-wrapper">
        <Search value={searchInput} setValue={setSearchInput} />
      </div>
      <AllNews
        newDataProp={searchInput == null ? newData : filteredData}
        isPendingProp={isPending}
        error={error}
      />
    </div>
  );
};

export default UkNews;
