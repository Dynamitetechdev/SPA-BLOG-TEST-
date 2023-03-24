import { FC } from "react";

interface Props {
  newData: [];
  isPending: boolean;
  error: string | null;
}

const AllNews: FC<Props> = ({ newData, isPending, error }) => {
  return (
    <div className="all_news">
      {isPending && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {newData.map((item: any, index: number) => (
        <div className="eachNews" key={index}>
          <h1 className="news-title">{item.title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            doloremque ipsam suscipit architecto commodi quisquam quam! Dicta,
            quis est sequi eaque architecto excepturi dolorum sint sapiente...
          </p>
          <button>Read More</button>
        </div>
      ))}
      {newData.length <= 0 ? <h1>No Article</h1> : null}
    </div>
  );
};

export default AllNews;
