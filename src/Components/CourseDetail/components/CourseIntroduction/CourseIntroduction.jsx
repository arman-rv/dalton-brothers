import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';



// import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

const CourseIntroduction = ({describe}) => {

//   const [text, setText] = useState('Your Persian text goes here');

//   const speakText = async () => {
//     const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your actual API key
//     const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

//     try {
//       const response = await axios.post(
//         url,
//         {
//           input: { text },
//           voice: { languageCode: 'fa-IR', name: 'fa-IR-Standard-A' }, // Persian language code and voice name
//           audioConfig: { audioEncoding: 'MP3' } // Audio format (MP3, WAV, etc.)
//         }
//       );

//       const audioContent = response.data.audioContent;
//       const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
//       audio.play();
//     } catch (error) {
//       console.error('Error synthesizing speech:', error);
//     }
//   };





  // const [text, setText] = useState('Your Persian text goes here');

  // const speakText = () => {
  //   const utterance = new SpeechSynthesisUtterance(text);
  //   utterance.lang = 'fa-IR'; // Set the language to Persian (Farsi)
  //   speechSynthesis.speak(utterance);
  // };


  return (
    <div>
      <div className=" w-full mt-10 ">
        {/* //////// main title /////// */}
        <h4 className=" w-full h-[50px] text-center md:text-2xl text-xl my-5 font-irSBold dark:text-DarkPallete-100 ">
          {" "}
          معرفی دوره{" "}
        </h4>
        <div className=" px-[40px] py-[10px] ">
          {/* <h5 className=" text-xl text-right font-bold"> پیش گفتار </h5> */}
          <p className="text-lg text-right my-[10px] text-gray-800 font-irSans dark:text-mode-200">
            {describe}
          </p>
        </div>

      </div>
      {/* <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={50}
      />
      <button onClick={speakText}>Speak</button> */}

    </div>
  );
};

export { CourseIntroduction };
