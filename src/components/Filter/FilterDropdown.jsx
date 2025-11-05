import React, { memo, useMemo } from "react";
import {
  FilterContainer,
  Dropdown,
  DropdownLabel,
} from "./FilterDropdown.styled";

const FilterDropdown = memo(
  ({
    data,
    selectedAuthor,
    onAuthorChange,
    placeholder = "All Authors",
    label = "Filter by Author",
  }) => {
    // Get unique authors from data
    const authors = useMemo(() => {
      const uniqueAuthors = [...new Set(data.map((item) => item.author))];
      return uniqueAuthors.sort();
    }, [data]);

    const handleChange = (event) => {
      onAuthorChange(event.target.value || "");
    };

    return (
      <FilterContainer>
        <DropdownLabel>{label}</DropdownLabel>
        <Dropdown
          value={selectedAuthor}
          onChange={handleChange}
          aria-label={label}
        >
          <option value="">{placeholder}</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </Dropdown>
      </FilterContainer>
    );
  }
);

FilterDropdown.displayName = "FilterDropdown";
export default FilterDropdown;
