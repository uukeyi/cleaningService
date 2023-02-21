import React from "react";

const BlueButton = ({ title, className ,  setIsOpen}) => (
   <div
   className={className}
      style={{
         backgroundImage:
            "url(https://thumb.tildacdn.com/tild3535-3362-4661-a337-626137333433/-/cover/448x102/center/center/-/format/webp/926a97bd-3b0b-45d7-9.png)",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "center center",
         borderColor: "transparent",
         borderStyle: "solid",
         cursor: "pointer",
         textAlign: "center",
         color: "white",
         textTransform: "uppercase",      }}
         onClick = {() => {
            document.body.style.overflow = 'hidden'
            setIsOpen(true)
         }}
   >
      {title}
   </div>
);
export default BlueButton;
