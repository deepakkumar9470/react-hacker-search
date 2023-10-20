import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import NewsCard from "./NewsCard";
import Search from "./Search";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mainText, setMainText] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [currPage, setCurrPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`,
        {
          params: { page: currPage },
        }
      );
      setNews(res.data.hits);
      setPageCount(res.data.nbPages);
      setMainText(res.data.hits[0]);
      setQuery("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrMsg("Oops error in fetching news");
    }
  };

  const handleClick = (e) => {
    setCurrPage(e.selected);
  };

  useEffect(() => {
    fetchNews();
  }, [currPage]);

  return (
    <div className="pt-10">
      <h1 className="text-5xl leading-3 text-txtColor text-center font-pattaya tracking-wide font-extraboldmt-4 mb-6">
        React Hacker Search App
      </h1>
      <Search
        query={query}
        setQuery={setQuery}
        searchData={fetchNews}
        isLoading={isLoading}
        errMsg={errMsg}
      />

      <p className="lg:text-3xl px-6 md:text-2xl mt-4 text-xl lg:p-3  font-black text-softTxt">
        {mainText?.title}
      </p>
      <span className="text-lg px-6 text-softTxt md:px-0 md:ml-3 font-semibold">
        Category : {query}
      </span>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
          {news?.map((item) => {
            return <NewsCard news={item} key={item.objectID} />;
          })}
        </div>
      )}

      {errMsg ? (
        <p className="text-red-700 text-xl font-semibold text-center">
          {errMsg}
        </p>
      ) : null}

      <ReactPaginate
        className="w-[1000px] flex items-center justify-center fixed py-4 px-3 list-none bg-bgLight rounded-md mx-auto left-[20%] bottom-0 z-20"
        breakLabel={<span className="mx-4">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-purple text-txtColor rounded-md">
            <ChevronRight />
          </span>
        }
        onPageChange={handleClick}
        marginPagesDisplayed={4}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={currPage}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-purple text-txtColor rounded-md mr-4">
            <ChevronLeft />
          </span>
        }
        renderOnZeroPageCount={null}
        activeClassName="bg-[#A555EC] text-txtColor"
        previousClassName="previous-page"
        nextClassName="next"
        pageClassName="w-10 h-10  text-txtColor block border flex items-center cursor-pointer justify-center rounded-md mr-4 border-solid border-txtColor hover:border-softTxt"
      />
    </div>
  );
};

export default Home;
