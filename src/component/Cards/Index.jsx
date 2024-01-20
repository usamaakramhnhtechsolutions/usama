import React from 'react'

const Index = ({title,peragraph,Icon}) => {
  return (
    <>
     <div className="flex flex-col items-center justify-center text-center">
              <div>
                <Icon  style={{ fontSize: "20px",
                color:" #2e7eed",
                display: "inline-block",
                marginBottom: "10px"}}/>
              </div>
              <h4 style={{fontFamily: "Open Sans sansserif",color: "#434549",
               fontWeight: "300;"}}>{title}</h4>
              <div className="text-sm  font-serif leading-6" style={{color:"#808080",fontFamily:"Open Sans, sans-serif"}}>
                {peragraph}
              </div>
            </div>
    </>
  )
}
export default Index