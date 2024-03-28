import { memo } from "react";
import "./Pagination.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface PaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
}
const Pagination = memo(({ total, pageSize, currentPage }: PaginationProps) => {
  const pages = [];
  const totalPages = Math.ceil(total / pageSize);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page) => (
        <Link
          to={page === 1 ? "/" : `/?page=${page}`}
          key={page}
          className={classNames('pagination__page', { "pagination__page--active": page === currentPage })}
        >
          {page}
        </Link>
      ))}
    </div>
  );
});

export default Pagination;
