import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors.js";
import nextArrow from "../../assets/nextArrow.png"
import previewArrow from "../../assets/previewArrow.png"

const CarouselContainer = styled.div`
  position:relative;
  width: 100%;
  height: 25.9rem;
  margin-top: 1rem;
  @media screen and (max-width: 800px) {
        height: 18.5rem;
      }
    & img{
      box-shadow: rgba(149 157 165 /20%) 0px 8px 24px;
      position:absolute;
      inset: 0px;
      border-radius: 1.5rem;
      width:100%;
      height:100%;
      object-fit:cover;
      @media screen and (max-width: 800px) {
        width:100%;
        margin: auto;
        height: 255px;
        margin-top:32px;
      }
    }
`;

const ArrowContainer = styled.div`
position:absolute;
  z-index:1;
  top:50%;
  transform:translateY(-50%);
  background-color: transparent;
  width:46.68px; 
  height:79.2px; 
  cursor:pointer;
   &.nextArrow{
    right:8px;
     @media screen and (max-width: 800px) {
        transform:translateY(-50%);
     right:-7px;

      } 
  }
   &.previewArrow {
    left:8px;
      @media screen and (max-width: 800px) {
        transform:translateY(-50%);
       left:-7px;

      }  
  } 
  & img {
        @media screen and (max-width: 800px) {
          width:24px;
          height:24px;
      }    
  }
  }
`;

const IndexInfoContainer = styled.p`
  position:relative;  
  z-index:1;
  top: 350px;
  text-align:center;
  color:${colors.secondary};
  font-size:18px;
  line-height:25.67px;
    @media screen and (max-width: 800px) {
      top: 232px;  
      margin-bottom: 0px;
    }
  }
`;

function Carousel({ pictures }) {
  const [imageIndex, setImageIndex] = useState(1);

  function toggleImage(indexPayload) {

    setImageIndex(state => {
      if (indexPayload + state > pictures.length) {
        return 1;
      } else if (indexPayload + state < 1) {
        return pictures.length;
      } else {
        return state + indexPayload;
      }
    })
  }
  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 3000)
    return () => clearInterval(intervalID)
  }, [])

  return (
    <CarouselContainer >
      <IndexInfoContainer >{imageIndex}/{pictures.length}</IndexInfoContainer>
      <img src={pictures[imageIndex - 1]} alt="room's image" />
      <ArrowContainer
        onClick={() => toggleImage(-1)}
        className="previewArrow">
        <img src={previewArrow} alt="previewArrow image" />
      </ArrowContainer>
      <ArrowContainer
        onClick={() => toggleImage(1)}
        className=" nextArrow">
        <img src={nextArrow} alt="nextArrow image" />
      </ArrowContainer>
    </CarouselContainer>
  )
}

export default Carousel;
