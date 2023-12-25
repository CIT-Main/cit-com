import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import logo  from "../../../app/assets/Images/Logo/CIT.jpg";





const footerNavs = [
  {
    label: 'Company',
    items: [
      {
        href: 'javascript:void()',
        name: 'Partners',
      },
      {
        href: 'javascript:void()',
        name: 'Blog',
      },
      {
        href: 'javascript:void()',
        name: 'Team',
      },
      {
        href: 'javascript:void()',
        name: 'Careers',
      },
    ],
  },
  {
    label: 'Resources',
    items: [
      {
        href: 'javascript:void()',
        name: 'contact',
      },
      {
        href: 'javascript:void()',
        name: 'Support',
      },
      {
        href: 'javascript:void()',
        name: 'Docs',
      },
      {
        href: 'javascript:void()',
        name: 'Pricing',
      },
    ],
  },
  {
    label: 'About',
    items: [
      {
        href: 'javascript:void()',
        name: 'Terms',
      },
      {
        href: 'javascript:void()',
        name: 'License',
      },
      {
        href: 'javascript:void()',
        name: 'Privacy',
      },
      {
        href: 'javascript:void()',
        name: 'About US',
      },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="text-gray-500 bg-gray-900 px-4 py-5  mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <img src={logo}  className="w-20 rounded-lg" />
            <p className="leading-relaxed mt-2  text-white text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo, quia, voluptatum
              voluptatem, voluptates fugit quibusdam quos. Quisquam, quia?
            </p>
          </div>
      
        </div>
        <div className="flex-1  text-white mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-white font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="hover:underline hover:text-indigo-600"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0 text-white">
          &copy; CIT All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border  text-white rounded-full flex items-center justify-center">
            <FaLinkedin />

            </li>

            <li className="w-10 h-10 border  text-white  rounded-full flex items-center justify-center">
            <BsTwitterX />

              
            </li>

            <li className="w-10 h-10 border  text-white rounded-full flex items-center justify-center">
            <FaFacebook />

            </li>
        {/*  the name of the game sis sodsfsd some  */}

          <section>
            <div className=" text-2xl   font">'

            </div>
          </section>
         
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer