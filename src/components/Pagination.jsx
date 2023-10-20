import React from "react";
import ReactPaginate from "react-paginate";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Pagination = ({ currPage, pageCount, handleClick }) => {
  return (
    <ReactPaginate
      className="w-[500px] px-4 md:w-[1000px]  flex items-center justify-center fixed py-4 md:px-3 list-none bg-bgLight rounded-md   md:left-[20%] bottom-0 z-20"
      breakLabel={<span className="mx-4">...</span>}
      nextLabel={
        <span className="w-10 h-10 flex items-center justify-center bg-purple text-txtColor rounded-md">
          <ChevronRight/>
        </span>
      }
      onPageChange={handleClick}
      marginPagesDisplayed={4}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      forcePage={currPage}
      previousLabel={
        <span className="w-10 h-10 flex items-center justify-center bg-purple text-txtColor rounded-md mr-4">
          <ChevronLeft/>
        </span>
      }
      renderOnZeroPageCount={null}
      activeClassName="bg-[#A555EC] text-txtColor"
      previousClassName="previous-page"
      nextClassName="next"
      pageClassName="w-6 h-6 md:w-10 md:h-10  text-txtColor block border flex items-center cursor-pointer justify-center rounded-md mr-4 border-solid border-txtColor hover:border-softTxt"
    />
  );
};

export default Pagination;
