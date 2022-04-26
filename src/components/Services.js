import React from 'react'
import {GiWaterfall, GiWaterSplash, GiWoodCabin, GiPartyPopper } from 'react-icons/gi'
import {MdPool, MdRestaurant} from 'react-icons/md'


const Services = () => {
  return (
    <section className='h-full w-screen bg-gradient-to-br from-pink-50 to-indigo-100 p-8'>
      <h1 className="text-center font-bold text-4xl text-black"> PLACES WE RENDER OUR SERVICES </h1>

      <div className="container m-auto px-6 mt-20 text-gray md:px-12 xl:px-0">
        <div className='grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10'>
          {/* Card 1 */}
          <div className='bg-sky-500 rounded-lg border shadow-md max-w-x md:max-w-none overflow-hidden'>
            <div className="mb space-y-4 p-6 text-white">
            <GiWaterfall className='text-8xl'/>
              <h3 className="text-2xl font-semibold ">
                Waterslides
              </h3>
              <p className="mb-6 paragraph-normal">
                Huge variety of sleep and gentle slides for harmless fun or extreme.
              </p>
            <a href="facebook.com" className='block font-bold text-white '>MAKE ENQUIRY</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-blue-900 rounded-lg border shadow-md max-w-x md:max-w-none overflow-hidden'>
            <div className="mb space-y-4 p-6 text-white">
            <GiWaterSplash className='text-8xl'/>
              <h3 className="text-2xl font-semibold ">
                River Rides
              </h3>
              <p className="mb-6 paragraph-normal">
                We offer an excellent range of river cruise packages for any taste
              </p>
            <a href="facebook.com" className='block font-bold text-white '>MAKE ENQUIRY</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-black rounded-lg border shadow-md max-w-x md:max-w-none overflow-hidden'>
            <div className="mb space-y-4 p-6 text-white">
              <MdPool className='text-8xl'/>
                <h3 className="text-2xl font-semibold ">
                  Pools
                </h3>
                <p className="mb-6 paragraph-normal">
                  Swim 50m lanes, gentle widths or enjoy a great happy family day
                </p>
              <a href="facebook.com" className='block font-bold text-white '>MAKE ENQUIRY</a>
              </div>
          </div>


          {/* Card 4 */}
          <div className='bg-blue-900 rounded-lg border shadow-md max-w-x md:max-w-none overflow-hidden'>
          <div className="mb space-y-4 p-6 text-white">
            <GiWoodCabin className='text-8xl'/>
              <h3 className="text-2xl font-semibold ">
                Cabanas
              </h3>
              <p className="mb-6 paragraph-normal">
                Swim 50m lanes, gentle widths or enjoy a great happy family day
              </p>
            <a href="facebook.com" className='block font-bold text-white '>MAKE ENQUIRY</a>
            </div>
        </div>

        {/* Card 5 */}
        <div className='bg-black rounded-lg border shadow-md max-w-x md:max-w-none overflow-hidden'>
        <div className="mb space-y-4 p-6 text-white">
          <MdRestaurant className='text-8xl'/>
            <h3 className="text-2xl font-semibold ">
              Restaurant
            </h3>
            <p className="mb-6 paragraph-normal">
              Swim 50m lanes, gentle widths or enjoy a great happy family day
            </p>
          <a href="facebook.com" className='block font-bold text-white '>MAKE ENQUIRY</a>
          </div>
      </div>

      {/* Card 6 */}
      <div className='bg-sky-500 rounded-lg border shadow-md max-w-x md:max-w-none overflow-hidden'>
      <div className="mb space-y-4 p-6 text-white">
        <GiPartyPopper className='text-8xl'/>
          <h3 className="text-2xl font-semibold ">
            Events
          </h3>
          <p className="mb-6 paragraph-normal">
            Swim 50m lanes, gentle widths or enjoy a great happy family day
          </p>
        <a href="facebook.com" className='block font-bold text-white '>MAKE ENQUIRY</a>
        </div>
    </div>
   

          </div>
    </div>
    </section>
    
    
  )
}

export default Services