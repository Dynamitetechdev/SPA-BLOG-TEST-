import { FC, useState } from "react";
/**
 * @dev Interface For Search component
 * @dev value - the value that is been inputted or searched for
 */
interface Props {
  value: string;
  setValue: string;
}

/**
 * @dev This Function is to submit our form, might not be neccessarily needed, since it filters automatically
 */
const Search: FC<Props> = ({ value, setValue }) => {
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
