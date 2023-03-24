import { useParams } from "react-router-dom";
import useFetch from "../component/useFetch";

/**
 *
 * @dev This is for the detailed describtion of our news/blogs
 * @dev I used the `id` to match each item collected fromthe API call and i loaded them dyamicaly
 */
const NewsDetails = () => {
  const { id } = useParams();

  const { data, isPending, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
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
