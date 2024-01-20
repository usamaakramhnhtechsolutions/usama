import React from 'react'
import Section1 from './Section1'
import Homecard from './Homecard'


const Section = () => {
  return (
    <>
    <section className="HomeSectioncss mb-56">
     <Section1 />
      <div className="HomeCardcss">
        <Homecard/>
    </div>
    </section>
    </>
  )
}

export default Section