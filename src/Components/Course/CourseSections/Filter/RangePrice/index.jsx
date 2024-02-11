import { useRef } from "react";
import { useDispatch } from "react-redux";

import {
  onMaxPriceChange,
  onMinPriceChange,
} from "../../../../../Redux/Filter/priceFilter";

const RangeSlider = ({
  minVal,
  maxVal,
  min,
  max,
  step,
  priceCap,
  className,
}) => {
  const dispatch = useDispatch();
  const progressRef = useRef(null);

  const handleMin = (e) => {
    if (maxVal - minVal >= priceCap && maxVal <= max) {
      if (parseInt(e.target.value) > parseInt(maxVal)) {
      } else {
        dispatch(onMinPriceChange(parseInt(e.target.value)));
      }
    } else {
      if (parseInt(e.target.value) < minVal) {
        dispatch(onMinPriceChange(parseInt(e.target.value)));
      }
    }
  };

  const handleMax = (e) => {
    if (maxVal - minVal >= priceCap && maxVal <= max) {
      if (parseInt(e.target.value) < parseInt(minVal)) {
      } else {
        dispatch(onMaxPriceChange(parseInt(e.target.value)));
      }
    } else {
      if (parseInt(e.target.value) > maxVal) {
        dispatch(onMaxPriceChange(parseInt(e.target.value)));
      }
    }
  };

  return (
    <>
      <div className={className}>
        <div className="absolute left-[-7%] top-[-500%] my-2 mx-auto w-[103%]">
          <div className="flex justify-between rounded-md mb-1">
            <input
              onChange={(e) =>
                dispatch(onMinPriceChange(parseInt(e.target.value)))
              }
              type="text"
              value={minVal}
              className="w-[100px] text-center px-2 focus:outline-none focus:border-b-2 focus:border-[#33466b]  bg-transparent dark:text-mode-100"
            />
            <input
              onChange={(e) =>
                dispatch(onMaxPriceChange(parseInt(e.target.value)))
              }
              type="text"
              value={maxVal}
              className="w-[100px] text-right px-2 focus:outline-none focus:border-b-2 focus:border-[#33466b]  bg-transparent dark:text-mode-100"
            />
          </div>
        </div>
        <div className="mb-4 my-4 w-[95%] ">
          <div className="relative h-2 rounded-lg  w-[95%]">
            <div className="h-2 bg-amber-400 rounded dark:bg-DarkPallete-100" ref={progressRef}></div>
          </div>
          <div className="relative" style={{ direction: "ltr" }}>
            <input
              onChange={handleMax}
              type="range"
              value={maxVal}
              min={min}
              step={step}
              max={max}
              className="absolute -top-2 z-10 w-[95%] h-1 bg-transparent appearance-none pointer-events-auto cursor-zoom-in"
            />
            <input
              onChange={handleMin}
              type="range"
              value={minVal}
              min={min}
              step={step}
              max={max}
              className="absolute w-[95%] -top-2 h-1 bg-transparent appearance-none pointer-events-auto cursor-zoom-out "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { RangeSlider };
