import React, { memo, useMemo, useCallback } from "react";
import * as S from "./FilterDropdown.styled";

const FilterDropdown = memo(
  ({
    data = [],
    selectedAuthor,
    onAuthorChange,
    placeholder = "All Authors",
    label = "Filter by Author",
  }) => {
    const authors = useMemo(() => {
      const uniqueAuthors = Array.from(new Set(data.map(item => item.author))).sort();
      return uniqueAuthors;
    }, [data]);

    const handleChange = useCallback(
      (e) => onAuthorChange(e.target.value || ""),
      [onAuthorChange]
    );

    return (
      <S.FilterContainer>
        <S.DropdownLabel htmlFor="author-dropdown">{label}</S.DropdownLabel>

        <S.Dropdown
          id="author-dropdown"
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
        </S.Dropdown>
      </S.FilterContainer>
    );
  }
);

FilterDropdown.displayName = "FilterDropdown";
export default FilterDropdown;
