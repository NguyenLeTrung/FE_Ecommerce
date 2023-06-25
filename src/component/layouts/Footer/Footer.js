import React from 'react';

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
      },
      {
        name: "About Us",
      },
      {
        name: "Careers",
      },
      {
        name: "Press",
      },
      {
        name: "Corporate Information",
      },
    ]
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
      },
      {
        name: "Shipping",
      },
      {
        name: "Cancellation & Returns",
      },
      {
        name: "FAQ",
      }
    ]
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy"
      },
      {
        name: "Terms Of Use",
      },
      {
        name: "Security"
      },
      {
        name: "Privacy"
      },
      {
        name: "Sitemap"
      },
      {
        name: "EPR Compliance",
      },
    ]
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
      },
      {
        name: "Twitter",
      },
      {
        name: "YouTube",
      }
    ]
  }
]

const Footer = () => {

  return (
    <>
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}

            </div>

            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Mail Us:</h2>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Registered Office Address:</h2>
              </div>
            </div>

          </footer>
        </>
    </>
  )
};

export default Footer;