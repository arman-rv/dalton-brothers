import React, { useEffect } from 'react'
import { ModalComponent } from '../../../Common/modal-package/Modal'
import { Map } from '../mapPackage'



import { useSelector } from 'react-redux';



const MapModal = ({isOpen, closeModal , openModal  }) => {


  const colorMode = useSelector((state) => state.theme.theme);


  const customStyles = {
    // Add your custom styles here
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      
      padding: "20px",
      borderRadius: "8px",
      outline: "none",
      // Add more custom styles as needed
      height: "740px",
      width: "80%",
      // display : "flex",
      // justifyContent: 'center',
      // alignItems: 'center',
     backgroundColor: colorMode === "dark" ?   "#404042"  :  " white " ,
     borderColor: colorMode  === "dark" ?   "#404042"  :  " white " ,
     
    },
  };



  return (
    <div className="app hidden"  >
    <h1> </h1>
    <button onClick={openModal}></button>
    <ModalComponent isOpen={isOpen} closeModal={closeModal}  title={"آکادمی برنامه نویسی بحر العلوم"} style={  customStyles}  >
    <Map />
    </ModalComponent>
  </div>
  )
}

export  {MapModal}