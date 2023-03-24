import { useEffect, useState } from "react";
import AllNews from "../component/allNews";
import Search from "../component/search";
import useFetch from "../component/useFetch";

/**
 *
 * @dev This page is for loading the UK based news
 * @dev Also implemented the filter functionality, to enable use search for news
 *
 */

interface News {
  title: string;
}

const UkNews = () => {
  const [searchInput, setSearchInput] = useState("");
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [newData, setNewData] = useState<News[]>([]);

  useEffect(() => {
    if (data) {
      const newDataArr = data.slice(11, 21);
      setNewData(newDataArr);
    }
  }, [data]);

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
