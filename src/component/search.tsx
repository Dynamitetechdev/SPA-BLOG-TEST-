import { FC, useState } from "react";

interface Props {
  value: string;
  setValue: string;
}
const Search: FC<Props> = ({ value, setValue }) => {
  //   const [searchInput, setSearchInput] = useState(null);

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
          value={value ?? ""}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
