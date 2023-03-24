import { useParams } from "react-router-dom";
import useFetch from "../component/useFetch";

const NewsDetails = () => {
  const { id } = useParams();

  const { data, isPending, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  console.log(data);
  return (
    <div className="wrapper">
      <div className="newsDetails">
        {isPending && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {data && (
          <>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsDetails;
