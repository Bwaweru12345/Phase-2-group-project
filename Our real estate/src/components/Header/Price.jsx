import React from "react"
import Heading from "./Heading"
import PriceCard from "./Pricecard"
import "./price.css"

const Price = () => {
  return (
    <div>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
          <PriceCard />
        </div>
      </section>
    </div>
  )
}

export default Price