import EndFooter from "./endFooterSection"
import Newscard from "./newscard"
import StartFooterSection from "./startFooterSection"


const Footer = () => {
  return (
    <footer>
      <StartFooterSection/>
      {/* start of section two (2) */}
      <div className="w-full h-[90vh] flex flex-col justify-start lg:items-center py-20 px-2">
        {/* 2nd section's header */}
        <div className="flex md:flex-row flex-col lg:w-[70%] w-full md:justify-between items-center">
          <div className="w-full md:h-[10rem] h-[5rem] flex items-center text-3xl font-bold">
            Latest Community Club News
          </div>
          <div className="md:w-[30rem] w-full md:h-[10rem] h-[5rem] flex items-center">
            On these pages, we inform about plans for trips and events, as well 
            as gain insgiht and feedback from members of the club
          </div>
        </div>
        {/* Showcase image category div */}
        <div className="lg:w-[70%] w-full h-[80vh] flex justify-center items-center overflow-x-scroll">
          {/* newscard */}
          <Newscard comment="The army has asigned a sniper to kill me" date="20th June, 2024" category="Finance"/> 
          <Newscard comment="The army has asigned a sniper to kill me" date="20th June, 2024" category="Finance"/> 
          <Newscard comment="The army has asigned a sniper to kill me" date="20th June, 2024" category="Finance"/> 
        </div>
        <div className="lg:w-[70%] w-full mt-5">
          <button className="bg-gray-500 p-2 w-[10rem] text-white">More news</button>
        </div>
      </div>
      {/* end of second section */}
      {/* start of 3rd section */}
      <div className="w-full h-[30vh] bg-gray-300 p-2 flex justify-center items-center ">
        <div className="w-full lg:w-[70%] h-[70%] flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] h-full flex flex-col justify-center mr-4">
            <p className="text-2xl font-bold py-3">Sign up for the Child in Tech Club newsletter.</p>
            <p>Receive emails containing events annoucements, contests & special offers.</p>
          </div>
          <div className="w-full md:w-[50%] h-full  flex flex-col justify-center items-start">
            <div className="bg-white h-[3rem] mb-3 flex">
              <input type="email" name="email" id="mail" placeholder="YOUREMAILADDRESS@EMAIL.COM" className="text-[13px] outline-none w-full h-full p-5 flex justify-center items-center bg-white focus:bg-white"/>
              <button type="button" className="bg-blue-300 px-10 text-[13px]">send</button>
            </div>
            <p className="text-[12px]">Don't worry! We won't spam you!</p>
          </div>
        </div>
      </div>
      {/* end of 3rd section */}
      {/* start of 4th section */}
      <EndFooter/>
    </footer>
  )
}


export default Footer