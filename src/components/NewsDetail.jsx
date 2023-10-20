import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://hn.algolia.com/api/v1/items/${id}`)
      .then((res) => {
        console.log(res.data)
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="w-full  mt-40">
      <h1 className="text-2xl font-extrabold m-4 text-black mb-4">
      {data?.title} :-
      </h1>
      <div className="flex items-center justify-center flex-col gap-6 m-4 bg-black rounded-md p-20">
        
        <h1 className="text-2xl font-extrabold text-white mb-4">
          {data?.title}
        </h1>
        <p className="text-gray-600 font-medium">By : {data?.author}</p>

        
        <div className="flex items-center justify-between gap-4 py-4">
          <p className="text-gray-600 font-medium">Points : {data?.points}</p>
        </div>
        <div className="flex gap-4 flex-wrap">
          {data?.children?.map((c)=>(
          
               <p className="text-white text-sm bg-gray-700 px-2 rounded-sm">{c.author}</p>
            
          ))}
        </div>
        <Link className="text-white cursor-pointer" to="/">
          Go Back
        </Link>
      </div>
     
    </div>
  );
};

export default NewsDetail;
