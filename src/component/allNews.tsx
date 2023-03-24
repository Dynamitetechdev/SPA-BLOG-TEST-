import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  newDataProp: [];
  isPendingProp: boolean;
  error: string | null;
}

const AllNews: FC<Props> = ({ newDataProp, isPendingProp, error }) => {
  return (
    <div className="all_news">
      {isPendingProp && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {newDataProp.map((item: any, index: number) => (
        <div className="eachNews" key={index}>
          <h1 className="news-title">{item.title}</h1>
          <p>{item.body.slice(0, 120)}...</p>
          <Link to={`/news/${item.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
      {newDataProp.length <= 0 ? <h1>No Article</h1> : null}
    </div>
  );
};

export default AllNews;
