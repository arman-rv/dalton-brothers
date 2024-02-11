import React, { useState } from "react";

const ShowMoreData = ({ initialShowCount, stepCount, data, content }) => {
  const [showCount, setShowCount] = useState(initialShowCount);
  const handleShowMore = () => {
    setShowCount(showCount + stepCount);
  };
  return (
    <>
      {data &&
        data.slice(0, showCount).map((item, index) => content(item, index))}
        <div className="w-max mx-auto">
            {data?.length > showCount ? (<button className="mx-auto w-10  h-6 bg-red-300 " onClick={handleShowMore}></button>) : null}
        </div>
    </>
  );
};

export default ShowMoreData;
