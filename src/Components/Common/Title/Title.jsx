import React from "react";

const Title = ({ topic, style }) => {
  return (
    <div
      className={`min-[500px]:text-2xl min-[500px]:px-[20px] text-2xl px-2 py-[10px] h-20 flex justify-start items-center font-irS text-[#808080] ${style}`}
    >
      {topic}
    </div>
  );
};

export { Title };
