import React from 'react'

import style from "../../../../LayOut/layOut.module.css";
import { useSelector } from 'react-redux';


const GotoArticle = () => {

  const colorMode = useSelector((state) => state.theme.theme);


  return (
    <div className="flex flex-row-reverse justify-center items-center gap-[10px] max-lg:flex-col-reverse ">
      <div className="border-2 border-[#eaeaea] flex flex-row-reverse justify-start items-center    p-[10px] gap-[10px] rounded-full font-irSans text-slate-500 text-lg  max-lg:flex-col max-lg:rounded-t-md max-lg:rounded-b-3xl  ">
        <input
          type="radio"
          name="GoTO"
          className={colorMode=== "dark"  ? style.darkModeInp :  style.inp}
          id="intro1"
          onClick={()=> document.documentElement.scrollTop = "1200"}
        //   onChange={(e) => e.target.checked && setSort("addTime")}
        />
        <label htmlFor="intro1" className={style.sort}>
           معرفی
        </label>
        <input
          type="radio"
          name="GoTO"
          className={colorMode=== "dark"  ? style.darkModeInp :  style.inp}
          id="teachers1"
          onClick={()=> document.documentElement.scrollTop = "2100"}
        //   onChange={(e) => e.target.checked && setSort("like")}
        />
        <label htmlFor="teachers1" className={style.sort}>
           نویسنده ها
        </label>
        <input
          type="radio"
          name="GoTO"
          className={colorMode=== "dark"  ? style.darkModeInp :  style.inp}
          id="comment1"
          onClick={()=> document.documentElement.scrollTop = "2900"}
        //   onChange={(e) => e.target.checked && setSort("price")}
        />
        <label htmlFor="comment1" className={style.sort}>
           نظرات
        </label>
        <input
          type="radio"
          name="GoTO"
          className={colorMode=== "dark"  ? style.darkModeInp :  style.inp}
          id="relatedArticle"
          onClick={()=> document.documentElement.scrollTop = "4100"}
        //   onChange={(e) => e.target.checked && setSort("price")}
        />
        <label htmlFor="relatedArticle" className={style.sort}>
           مقالات مرتبط
        </label>
      </div>
    </div>
  )
}

export  {GotoArticle}