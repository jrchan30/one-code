import { useEffect, useState } from 'react';

const PageNumber = ({ number, active, paginationHandler }) => {
  return (
    <button
      onClick={() => paginationHandler(number)}
      className={active && 'border-b-2 border-b-blue-300'}
    >
      {number}
    </button>
  );
};

const DashboardPagination = ({
  onChange,
  totalItems,
  paginationPerPage,
  page,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationHandler = (number) => {
    setCurrentPage(number);
    onChange(number);
  };

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  return (
    <div className="flex gap-x-4">
      <button
        disabled={currentPage <= 1}
        onClick={() => paginationHandler(currentPage - 1)}
        className="disabled:text-gray-200"
      >
        prev
      </button>
      {currentPage === 1 ? (
        <>
          <PageNumber paginationHandler={paginationHandler} number={1} active />
          <PageNumber paginationHandler={paginationHandler} number={2} />
          <PageNumber paginationHandler={paginationHandler} number={3} />
        </>
      ) : (
        <>
          <PageNumber
            paginationHandler={paginationHandler}
            number={Number(currentPage) - 1}
          />
          <PageNumber
            paginationHandler={paginationHandler}
            number={Number(currentPage)}
            active
          />
          <PageNumber
            paginationHandler={paginationHandler}
            number={Number(currentPage) + 1}
          />
        </>
      )}
      <button onClick={() => paginationHandler(currentPage + 1)}>next</button>
    </div>
  );
};

export default DashboardPagination;
