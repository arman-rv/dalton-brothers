import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { onSortChange } from "../../../../Redux/sort";

import style from "../../layOut.module.css";
import { onorderChange } from "../../../../Redux/order";

const LaySort = () => {
  const [Order, setOrder] = useState("DESC")
  const store = useSelector((state) => state.sort);
  const colorMode = useSelector((state) => state.theme.theme);


  const handleOrder = () => {
// console.log(Order);
    if(Order == "DESC"){
      setOrder("ASC")
    dispatch(onorderChange("ASC"))
    }
    else{
      setOrder( "DESC")
    dispatch(onorderChange("DESC"))

    }
  }
  // console.log(store)
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row-reverse justify-center items-center gap-[10px] max-lg:flex-col-reverse  ">
      <div className="border-2 border-[#eaeaea] dark:bg-mode-200 dark:border-none flex flex-row-reverse justify-start items-center    p-[10px] gap-[10px] rounded-r-[999px] rounded-l-[300px] font-irSans text-slate-500 text-lg  max-lg:flex-col max-lg:rounded-t-md max-lg:rounded-b-3xl  ">
        <input
          type="radio"
          name="sort"
          className={colorMode === "dark" ? style.darkModeInp : style.inp}
          id="newest"
          onChange={(e) =>
            e.target.checked && dispatch(onSortChange("lastUpdate"))
          }
          defaultChecked
        />
        <label htmlFor="newest" className={style.sort}>
          جدید ترین
        </label>
        <input
          type="radio"
          name="sort"
          className={colorMode === "dark" ? style.darkModeInp : style.inp}
          id="mostView"
          onChange={(e) =>
            e.target.checked && dispatch(onSortChange("courseRate"))
          }
        />
        <label htmlFor="mostView" className={style.sort}>
          امتیاز
        </label>
        <input
          type="radio"
          name="sort"
          className={colorMode === "dark" ? style.darkModeInp : style.inp}
          id="mostFavorite"
          onChange={(e) =>
            e.target.checked && dispatch(onSortChange("likeCount"))
          }
        />
        <label htmlFor="mostFavorite" className={style.sort}>
          محبوب ترین
        </label>
        <input
          type="radio"
          name="sort"
          className={colorMode === "dark" ? style.darkModeInp : style.inp}
          id="cheapest"
          onChange={(e) => e.target.checked && dispatch(onSortChange("cost"))}
        />
        <label htmlFor="cheapest" className={style.sort}>
          قیمت
        </label>
      </div>
      <div className="flex justify-center items-center rounded-l-[999px] rounded-r-[300px] font-irSBold text-mode-50 text-lg py-[28px] px-[70px] bg-pallete-100 dark:bg-DarkPallete-100  max-lg:rounded-t-3xl max-lg:rounded-b-md" onClick={()=> handleOrder()}>
        ترتیب ها
      </div>
    </div>
  );
};

export { LaySort };
