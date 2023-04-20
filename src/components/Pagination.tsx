import { FC } from "react";
import styled from "styled-components";

import { usePagination, DOTS } from "../hooks/usePagination";

type Props = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
};

const StyledPagination = styled.ul`
  display: flex;
  margin: 20px 0;

  li {
    padding: 8px 12px;
    margin: 5px;
    display: flex;
    align-items: center;
    border-radius: 50%;

    &.dots:hover {
      background-color: transparent;
      cursor: default;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }

    &.selected {
      background-color: #30d5c8;
    }

    .arrow {
      &::before {
        position: relative;
        content: "";
        display: inline-block;
        width: 5px;
        height: 5px;
        border-right: 2px solid gray;
        border-top: 2px solid gray;
      }

      &.left {
        transform: rotate(-135deg) translate(-50%);
      }

      &.right {
        transform: rotate(45deg);
      }
    }

    &.disabled {
      pointer-events: none;

      .arrow::before {
        border-right: 2px solid lightgray;
        border-top: 2px solid lightgray;
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
  }
`;

const Pagination: FC<Props> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange!.length < 1) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  return (
    <StyledPagination>
      <li className={currentPage === 1 ? "disabled" : ""} onClick={onPrevious}>
        <div className="arrow left" />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={pageNumber === currentPage ? "selected" : ""}
              onClick={() => onPageChange(+pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={currentPage === lastPage ? "disabled" : ""}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </StyledPagination>
  );
};

export default Pagination;
