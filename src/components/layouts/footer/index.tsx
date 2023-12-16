import StartFooterSection from "./startFooterSection"


const Footer = () => {
  return (
    <footer>
      <StartFooterSection/>
      {/* start of section two (2) */}
      <div className="w-full h-[90vh] bg-yellow-300 flex flex-col justify-start lg:items-center py-20 px-2">
        {/* 2nd section's header */}
        <div className="flex md:flex-row flex-col lg:w-[70%] bg-white w-full md:justify-between items-center">
          <div className="w-full md:h-[10rem] h-[5rem] bg-green-300 flex items-center">
            Latest Community Club News
          </div>
          <div className="md:w-[20rem] w-full md:h-[10rem] h-[5rem] bg-green-300 flex items-center">
            On these pages, we inform about plans for trips and events, as well 
            as gain insgiht and feedback from members of the club
          </div>
        </div>
        {/* Showcase image category div */}
        <div className="lg:w-[70%] w-full bg-blue-200 h-[80vh] flex justify-center items-center">
          <div className="bg-red-300 w-[45%] h-[90%]">
            <div className="w-full h-full p-5 px-10 relative">
              <div className="bg-green-300 h-[1.5rem] rounded-sm flex items-center px-4 w-[6rem]">
                cat
              </div>
              <div className="bg-white flex items-center absolute bottom-5 w-[80%] p-2">
                A series of non-competitive cycling rides that are popular
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[70%] w-full">
          <button className="bg-white p-2 w-[10rem]">More news</button>
        </div>
      </div>
      {/* end of second section */}
      {/* start of 3rd section */}
      <div className="w-full h-[30vh] bg-gray-300 p-2 flex justify-center items-center ">
        <div className="w-full lg:w-[70%] h-[70%] bg-red-950 flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] h-full bg-red-200 flex flex-col justify-center ">
            <p>Sign up for the CIT-com Clun newsletter.</p>
            <p>Receive emails containing events annoucements, contests & special offers.</p>
          </div>
          <div className="w-full md:w-[50%] h-full bg-red-200 flex flex-col justify-center items-start">
            <div className="bg-white h-[3rem] mb-5 flex">
              <input type="email" name="email" id="mail" placeholder="YOUREMAILADDRESS@EMAIL.COM" className="text-[13px] outline-none w-full h-full p-5 flex justify-center items-center bg-white"/>
              <button type="button" className="bg-blue-300 px-10 text-[13px]">send</button>
            </div>
            <p>Don't worry! We won't spam you!</p>
          </div>
        </div>
      </div>
      {/* end of 3rd section */}
      {/* start of 4th section */}
      <div className="w-full bg-gray-400">
        <div className="h-[7rem] bg-gray-500 w-full flex items-center p-2 text-2xl justify-center">
          <div className="w-full lg:w-[70%] h-[70%] flex items-center">
            <p>Dedicated Community Club</p> 
          </div>
        </div>
        <div className="h-[30rem] bg-gray-400 w-full flex p-2 justify-center">
          <div className="w-full lg:w-[70%] h-[100%] flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="w-full h-full bg-white" >1</div>
            <div className="w-full h-full bg-white" >1</div>
            <div className="w-full h-full bg-white" >1</div>
            <div className="w-full h-full bg-white" >1</div>
          </div>
        </div>
        <div className="bg-yellow-300 p-2 flex justify-center">
          <div className="w-full lg:w-[70%] flex items-center">
            <a href="#" className="mr-2 px-2 border-r-blue-800 border-r-2">home</a>
          </div>
        </div>
        <div className="bg-yellow-400 p-2 flex justify-center">
          <div className="w-full lg:w-[70%] flex items-center justify-between">
            <p>copyright 2023 - Ghana</p>
            <div>
              <div className="rounded-lg border-black border-[2rem]">a</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer