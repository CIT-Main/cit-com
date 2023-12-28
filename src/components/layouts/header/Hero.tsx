import { useEffect, useRef, useState } from 'react'
import { images } from '../../../entities/Constants/Slide'

// GLOBAL VARIABLE
let count: number = 0
let slideInterval: any

const Hero = (): JSX.Element => {
  // Use State for the current index
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  // Use Ref for the current index
  const slideRef = useRef<HTMLDivElement>(null)

  // Remove Animation
  const removeAnimation = (): void => {
    slideRef.current!.classList.remove('slide-anim')
  }

  // Use Effect for the current index and pause start slider and remove animation using mouse enter and mouse leave
  useEffect(() => {
    slideRef.current?.addEventListener('animationend', removeAnimation)

    startSlider()

    return () => {
      pauseSlider()
    }
    // eslint-disable-next-line
  }, [])

  // Start Slider function with set interval. This will be called when the slider start in every 3 seconds
  const startSlider = (): void => {
    slideInterval = setInterval(() => {
      handleOnNextClick()
    }, 4000)
  }

  // This will be called when the slider is paused
  const pauseSlider = (): void => {
    clearInterval(slideInterval)
  }

  // Handle on next click
  const handleOnNextClick = (): void => {
    count = (count + 1) % images.length
    setCurrentIndex(count)
    slideRef.current!.classList.add('slide-anim')
  }

  // Handle on previous click

  return (
    <>
      <div className="slide-container lg:h-[35rem] overflow-hidden ">
        <div ref={slideRef} className="w-full relative select-none">
          <div className="">
            <img
              className=" w-full h-auto object-cover  object-center  filter brightness-50 blur-xs"
              src={images[currentIndex].image}
              alt="images"
            />
          </div>

          <div className="absolute   inset-0 flex items-center justify-center text-center px-3 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold lg:text-6xl text-center text-gray-200 animate-fadeIn">
                {images[currentIndex].title}
              </h2>
              <p className="text-gray-100  lg:text-4  lg:text-2xl lg:mx-20 text-sm text-center animate-fadeIn">
                {images[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
