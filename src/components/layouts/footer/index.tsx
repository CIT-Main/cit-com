

const Footer = () => {
  return (
    <footer>
      {/*the main section element */}
      <div className="w-full bg-red-300">
        <div className="w-full h-[100vh] bg-red-300">
          {/* first section's header: gratitude and sponsors logo */}
          <div className="w-full h-1/3 bg-red-400 flex justify-center items-center">
            <div className="lg:w-[70%] w-full h-[70%] bg-green-300 flex items-center justify-between flex-wrap">
              <div className="md:h-[90%] h-[30%] md:w-[20%] w-full bg-yellow-300 flex items-center">
                a
              </div>
              <div className="md:h-[90%] h-[70%] md:w-[70%] w-full bg-yellow-400 flex items-center justify-center">
                a
              </div>
            </div>
          </div>
          {/* Aim and chart div */}
          <div className="w-full h-2/3 bg-red-500 flex justify-center">
            <div className="xl:w-[80%] w-full">
              <div className="w-full h-[60%] xl:px-20 lg:px-10 bg-green-400 px-2 flex">
                <div className="h-full w-[40%] bg-red-300 border-b-gray-200 flex items-center">
                  the writings
                </div>
              </div>
              <div className="w-full h-[40%] xl:px-20 lg:px-10 bg-green-600 px-2 md:flex-column flex flex-wrap items-center">
                <div className="lg:w-[60%] md:w-[40%] w-full ">
                  we touch dozens of life
                </div>
                <div className="lg:w-[13.2%] md:w-[20%] w-full ">1</div>
                <div className="lg:w-[13.2%] md:w-[20%] w-full ">2</div>
                <div className="lg:w-[13.2%] md:w-[20%] w-full ">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section one ended */}
      {/* start of section two (2) */}
      <div className="w-full h-[90vh] bg-yellow-300 flex flex-col justify-start lg:items-center py-20 px-2">
        {/* 2nd section's header */}
        <div className="flex md:flex-row flex-col lg:w-[70%] bg-white w-full md:justify-between items-center">
          <div className="w-full md:h-[10rem] h-[5rem] bg-green-300 flex items-center">
            Latest com
          </div>
          <div className="md:w-[20rem] w-full md:h-[10rem] h-[5rem] bg-green-300 flex items-center">
            Latest com
          </div>
        </div>
        {/* Showcase image category div */}
        <div className="lg:w-[70%] w-full bg-blue-200 h-[80vh] flex justify-center items-center">
          <div className="bg-red-300 w-[45%] h-[90%]">
            <div className="w-full h-full p-5 px-10 relative">
              <div className="bg-green-300 h-10 flex items-center px-4 w-[10rem]">
                cat
              </div>
              <div className="bg-white flex items-center absolute bottom-5 w-[80%] p-2">
                hello world
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
          <div className="w-full md:w-[50%] h-full bg-red-200 flex justify-center items-center">a</div>
          <div className="w-full md:w-[50%] h-full bg-red-200 flex justify-center items-center">a</div>
        </div>
      </div>
      {/* end of 3rd section */}
      {/* start of 4th section */}
      <div className="w-full h-[100rem] bg-gray-400">
        <div className="h-[7rem] bg-gray-500 w-full flex items-center p-2"> dedicated com</div>
        <div className="h-[20rem] bg-gray-400 w-full flex p-2"> dedicated com</div>
      </div>
    </footer>
  )
}


export default Footer