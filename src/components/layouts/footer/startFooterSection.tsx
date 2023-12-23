// import React, {useState, useEffect, useRef} from "react";
// import { useInView } from "react-intersection-observer";
// import { CountUp } from "countup.js";
const StartFooterSection: any = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [count, setCount] = useState(0);
  // const countRef = useRef(null);
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     setIsVisible(true);
  //   }
  // },[inView]);
  
  // useEffect(() => {
  //   const option = {
  //     startVal: 0,
  //     duration: 2,
  //   }
  //   const countup = new CountUp(countRef.current, 100, option)
  // },[])
    return (
      <>
        {/*the main section element */}
        <div className="w-full">
          <div className="w-full h-[100vh]">
            {/* first section's header: gratitude and sponsors logo */}
            <div className="w-full h-1/4 bg-gray-200 flex justify-center items-center">
              <div className="lg:w-[70%] w-full h-[70%] flex items-center justify-between flex-wrap">
                <div className="md:h-[90%] h-[30%] md:w-[20%] w-full flex items-center">
                  <p className="text-lg">
                    we are grateful to all our
                    <i className=""> awesome sponsors</i>. Thank you!
                  </p>
                </div>
                <div className="md:h-[90%] h-[70%] md:w-[70%] w-full flex items-center justify-center">
                  sponsor lists
                </div>
              </div>
            </div>
            {/* Aim and chart div */}
            <div className="w-full md:h-2/3 h-[45rem] flex justify-center">
              <div className="xl:w-[80%] w-full bg-green-500 relative">
              <img src="" alt="" className="absolute w-full h-full"/>
                <div className="w-full h-[60%] xl:px-20 lg:px-10 px-2 flex">
                  <div className="h-full w-[40%] border-solid border-b-2 border-b-gray-500 flex items-center text-3xl">
                    <p>
                      We believe that in everything we do, it is an active part
                      of social, cultural and environmental change.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[40%] xl:px-20 lg:px-10 px-2 md:flex-column flex flex-wrap items-center">
                  <div className="lg:w-[60%] md:w-[40%] w-full ">
                    we touch dozens of lifes of everyday people making real
                    differences to people's physical, mental and emotional
                    health. Here are a few stats:
                  </div>
                  <div className="lg:w-[13.2%] md:w-[20%] w-full ">
                    <p className="text-[50px] font-semibold py-3">5</p>
                    <p>indoor facilies for our members</p>
                  </div>
                  <div className="lg:w-[13.2%] md:w-[20%] w-full ">
                    <p className="text-[50px] font-semibold py-3">40+</p>
                    <p>community events per year</p>
                  </div>
                  <div className="lg:w-[13.2%] md:w-[20%] w-full ">
                    <p className="text-[50px] font-semibold py-3">24</p>
                    <p>community projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section one ended */}
      </>
    )
}
export default StartFooterSection;