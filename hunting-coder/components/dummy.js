import React from "react";

const Dummy = () => {
  return (
    <>
      <style jsx global>
        {`
          .dummy {
            background: red;
            justify-content: flex-start;
          }
        `}
      </style>
      <div className="dummy">I am a dummy component</div>
    </>
  );
};

export default Dummy;
