import { FC, useState } from "react";

interface Props {
  newData: [];
}
const Search: FC<Props> = ({ newData }) => {
  const [searchInput, setSearchInput] = useState(null);

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
  };
  return (
    <div className="search-wrapper">
      <form action="" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="search news"
          value={searchInput ?? ""}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <p>{searchInput}</p>
    </div>
  );
};

export default Search;
