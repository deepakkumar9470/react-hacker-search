import React from 'react'
import { format } from "date-fns"
import { Link } from 'react-router-dom'

const NewsCard = ({news}) => {
  const { author, created_at,title, url } = news
    
  return (
  
    <div className="flex items-center  rounded-xl bg-softBg pt-4 px-5 my-5 transition-all duration-100 hover:scale-105 cursor-pointer shadow-md shadow-bgLight">
         <div className="flex justify-center flex-col py-2 px-6">
               <Link to={`/news/${news?.objectID}`}>
                   <h3 className="font-bold text-txtColor text-2xl mb-3">
                      {title}
                    </h3>
                    </Link>
               
                    <div className="flex items-center justify-between gap-4 py-4">
                      <p className="text-softTxt font-medium">
                        By <em>{author}</em>
                      </p>
                      <Link
                        to={url}
                        target="_blank"
                        rel="noopenner noreferrer"
                        className="border-b border-gray-700 text-txtColor text-lg hover:text-softTxt hover:border-gray-400"
                      >
                        Read More
                      </Link> 
                      <p className="text-softTxt">
                      {format(new Date(created_at), "dd MMM yyyy")}
                    </p>
                    </div>
           
                    
            </div>

    </div>
   
  )
}

export default NewsCard