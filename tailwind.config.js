/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sha: "shabnam",
        est: "Estedad",
        vaz: "vazir",
        vazY: "vazirYekan",
        BNa: "BNazanin",
        BTi: "BTitrBd",
        Ord: "Ordibehesht",
        irSans: "iranSans",
        irSBold: "iranSansBold",
        },
      colors:{
          mode : {50 :"#F1F5F9" , 100 :"#f6f6f6" , 200 : "#E6E6E6" ,300 : "#9ca3af"  , 700:"#707070"  ,800 :"#404042" , 900 : "#27272A"},
        DarkPallete : { 50 : "#bbf7d0" ,   100 : "#16A34A"},

    pallete : { 50 : "#fefce8" , 100 : "#fcbf49"   },
    secondPallete : {100 : "#9333ea"},
    error : {100 :"#ef4444"} ,
  
    // mode: {
    //   50: "var(--theme-mode50)",
    //   100: "var(--theme-mode100)",
    //   200: "var(--theme-mode200)",
    //   700: "var(--theme-mode700)",
    //   800: "var(--theme-mode800)",
    //   900: "var(--theme-mode900)",
    //   },

    //   pallete: {
    //     100: "var(--theme-pallete100)"},
    //    green : {
    //     100: " var(--theme-green100)" } ,

  
  },






      boxShadow: { ri: "0px 0px 10px black" },
      backgroundImage: {
        ham: "url(./src/assets/images/arrow-ng.png)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "20%": "20%",
        "15%": "15%",
        "10%": "10%",
        16: "4rem",
      },
    },
  },
  plugins: [],
};
//  zard : #fcbf49
//  tosi 1 : #707070
//  tosi 2 : #848484
//  tosi 3 : #e7e8ec
//  abi toosi : #f1f5f9
//  red :#f00000
//  kale ghaz : #334155