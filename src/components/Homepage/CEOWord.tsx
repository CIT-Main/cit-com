import CTOImage from '../../app/assets/Images/Homepage/CE0-image.jpg'

const CEOWord = () => {
  return (
    <>
      <section className="relative py-28 bg-gray-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <figure>
              <blockquote>
                <p className="text-white text-xl font-semibold sm:text-2xl">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  et est hendrerit, porta nunc vitae, gravida justo. Nunc
                  fermentum magna lorem, euismod volutpat arcu volutpat et.“
                </p>
              </blockquote>
              <div className="mt-6">
                <img
                  src={CTOImage}
                  className="w-40 h-40  object-cover  mx-auto rounded-full"
                />
                <div className="mt-3">
                  <span className="block text-[#F6BE00] font-semibold">
                    Martin escobar
                  </span>
                  <span className="block text-white italic text-sm mt-0.5">
                    CEO at Child in Tech (CIT)
                  </span>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}

export default CEOWord
