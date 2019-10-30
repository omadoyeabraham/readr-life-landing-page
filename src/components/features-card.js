import React from "react"

/**
 * Card in the features section on the homepage.
 */
export default props => (
  <div
    className={`flex flex-col bg-gray-100 rounded border border-gray-300 mx-3 my-2 p-5 shadow-lg ${props.className}`}
  >
    <div className="p-3 border rounded-full border-purple-500 w-12 bg-white">
      {props.icon}
    </div>
    <h3 className="pb-5 pt-8 font-normal">{props.headerText}</h3>
    <p className="text-gray-700 text-sm">{props.children}</p>
  </div>
)
