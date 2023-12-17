import React from "react";

interface NewscardsProps {
  comment: string;
  date: string;
  category: string;
}
const Newscard:React.FC<NewscardsProps> = ({comment, date, category}) => {
    return (
        <div className="bg-gray-300 md:w-[33%] w-[50%] h-[90%] mr-2 shrink-0 relative hover:backdrop-blur-md hover:opacity-70 hover:transition hover:duration-300">
          <img src="" alt="" className="w-full h-full absolute"/>
            <div className="w-full h-full p-5 px-10 relative">
              <div className="bg-green-300 h-[1.5rem] rounded-sm flex items-center px-4 w-[6rem]">
                {category}
              </div>
              <div className="flex items-center absolute bottom-5 w-[80%] p-2 flex-col">
                <p className="w-full text-white text-[12px]">{date}</p>
                <p className="text-3xl group-hover:after:absolute group-hover:after:block 
                group-hover:after:w-full group-hover:after:h-1 group-hover:after:bg-blue-400 group-hover:after:content-[''] group-hover:after:bottom-0 group-hover:after:left-0 
                hover:after:transition-transform group-hover:after:duration-300 font-bold text-white cursor-pointer hover:underline">
                  {comment}
                </p>
                
              </div>
            </div>
          </div>
    )
}
export default Newscard;