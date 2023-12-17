const EndFooter: any = () => {
    return (
        <div className="w-full bg-gray-400">
        <div className="h-[7rem] bg-gray-500 w-full flex items-center p-2 text-2xl text-white font-extrabold justify-center">
          <div className="w-full lg:w-[70%] h-[70%] flex items-center">
            <p>Dedicated Community Club</p>
          </div>
          <div className="md:flex hidden">logo</div>
        </div>
        <div className="md:h-[30rem] bg-gray-400 w-full flex p-2 justify-center">
          <div className="w-full lg:w-[70%] h-[100%] flex flex-col md:flex-row lg:items-center justify-between items-center">
            {/* footer quick links */}
            <div className="md:w-[40rem] w-full md:h-[24rem] p-2 " >
              <h4 className="uppercase mb-5">Unitypress</h4>
              <p>Whether your community club is
                focused on sports, hobbies, leisure activities,
                or neighborhood gatherings,Child IN Tech 
                provides a versatile foundation that adapts effortlessly to your unique needs
              </p>
              <div className="flex h-[3rem] mt-10 border-solid border-2 border-gray-500">
                <input type="text"  className="h-full outline-none px-4 focus:bg-transparent"/>
                <button className="p-3 bg-blue-500">search</button>
              </div>
            </div>
            {/* footer quick links */}
            <div className="md:w-[20rem] w-full md:h-[24rem] p-2" >
              <h4 className="uppercase mb-5">Quick Links</h4>
              <div className="flex flex-col">
                <a href="" className="py-2 border-solid border-b-2 border-gray-500">hello</a>
                <a href="" className="py-2 border-solid border-b-2 border-gray-500">hello</a>
                <a href="" className="py-2 border-solid border-b-2 border-gray-500">hello</a>
              </div>
            </div>
            {/* footer quick links */}
            <div className="md:w-[20rem] w-full md:h-[24rem] p-2" >
              <h4 className="uppercase mb-5">Categories</h4>
              <div className="flex flex-col">
                <a href="" className="py-2 border-solid border-b-2 border-gray-500">hello</a>
                <a href="" className="py-2 border-solid border-b-2 border-gray-500">hello</a>
                <a href="" className="py-2 border-solid border-b-2 border-gray-500">hello</a>
              </div>
            </div>
            {/* footer quick links */}
            <div className="md:w-[20rem] w-full h-[24rem] p-2" >
              <h4 className="uppercase mb-5">Recent News</h4>
              <div className="flex flex-col">
                <a href="" className="py-2 border-solid border-b-2 border-gray-500">hello</a>
                <a href="" className="py-2 border-solid border-b-2 border-gray-500">hello</a>
                <a href="" className="py-2 border-solid border-b-2 border-gray-500">hello</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg p-2 flex justify-center">
          <div className="w-full lg:w-[70%] flex items-center">
            <a href="#" className="mr-2 px-2 border-solid border-r-gray-500 border-r-2">Home</a>
            <a href="#" className="mr-2 px-2 border-solid border-r-gray-500 border-r-2">About Us</a>
            <a href="#" className="mr-2 px-2 border-solid border-r-gray-500 border-r-2">Contact</a>
            <a href="#" className="mr-2 px-2 border-solid border-r-gray-500 border-r-2">Donate Now</a>
          </div>
        </div>
        <div className="bg-gray-600 text-white p-2 flex justify-center h-[5rem]">
          <div className="w-full lg:w-[70%] flex items-center justify-between">
            <p>copyright 2023 - Ghana</p>
            <div className="flex">
              <button className="rounded-full border-white border-2 p-2 border-solid hover:bg-blue-700 hover:text-white mr-4">Twitter tt</button>
              <button className="rounded-full border-white border-2 p-2 border-solid hover:bg-blue-700 hover:text-white mr-4">Twitter tt</button>
            </div>
          </div>
        </div>
      </div>
    )
}
export default EndFooter;