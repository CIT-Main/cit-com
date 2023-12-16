const StartFooterSection: any = () => {
    return (
        <>
                  {/*the main section element */}
      <div className="w-full bg-red-300">
      <div className="w-full h-[100vh] bg-red-300">
        {/* first section's header: gratitude and sponsors logo */}
        <div className="w-full h-1/3 bg-red-400 flex justify-center items-center">
          <div className="lg:w-[70%] w-full h-[70%] bg-green-300 flex items-center justify-between flex-wrap">
            <div className="md:h-[90%] h-[30%] md:w-[20%] w-full bg-yellow-300 flex items-center">
              <p>we are grateful to all our awesome sponsor. Thank you!</p>
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
                <p>We believe that in everything we do, it is an active part of social, cultural and environmental change.</p>
              </div>
            </div>
            <div className="w-full h-[40%] xl:px-20 lg:px-10 bg-green-600 px-2 md:flex-column flex flex-wrap items-center">
              <div className="lg:w-[60%] md:w-[40%] w-full ">
                we touch dozens of lifes of everyday people making real differences to people's physical, mental and emotional health. Here are a few stats:
              </div>
              <div className="lg:w-[13.2%] md:w-[20%] w-full ">
                <p>5</p>
                <p>indoor facilies for our members</p>
              </div>
              <div className="lg:w-[13.2%] md:w-[20%] w-full ">
                <p>40+</p>
                <p>community events per year</p>
              </div>
              <div className="lg:w-[13.2%] md:w-[20%] w-full ">
                <p>24</p>
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