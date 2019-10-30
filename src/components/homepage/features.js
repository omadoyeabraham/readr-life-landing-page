import React from "react"
import FeaturesCard from "../features-card"
import { TiThListOutline } from "react-icons/ti"
import { FiShare2 } from "react-icons/fi"
import { GoGraph } from "react-icons/go"

/**
 * Features section on the homepage
 */
export default () => {
  const data = [
    {
      title: "Manage reading lists",
      icon: <TiThListOutline className="icon"></TiThListOutline>,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non
      sint atque quibusdam soluta quia sed, perferendis facere. Ipsa, nisi
      natus? `,
    },
    {
      title: "Track reading history",
      icon: <GoGraph className="icon"></GoGraph>,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non
      sint atque quibusdam soluta quia sed, perferendis facere. Ipsa, nisi
      natus? `,
    },
    {
      title: "Share your journey",
      icon: <FiShare2 className="icon"></FiShare2>,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non
      sint atque quibusdam soluta quia sed, perferendis facere. Ipsa, nisi
      natus? `,
    },
  ]

  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <h1 className="pb-10">Features</h1>
        <div className="flex flex-col md:flex-row -mx-3">
          {data.map((cardData, index) => {
            return (
              <FeaturesCard
                icon={cardData.icon}
                headerText={cardData.title}
                className="features-card"
              >
                {cardData.text}
              </FeaturesCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
