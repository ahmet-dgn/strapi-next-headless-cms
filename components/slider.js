import Image from "next/image";
import Button from "@/components/ui/buttons";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Slider({ data, backendUrl }) {
  const slides = data.Content; //Api'den gelen slider verileri

  //##########Slider Settings#########
  const sliderSettings = {
    autoPlay: false,
    duration: 5000,
  };

  //##################################
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderForward = (event) => {
    event.preventDefault();
    if (currentIndex >= slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const sliderBackward = (event) => {
    event.preventDefault();
    if (currentIndex <= 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  //Slider Auto Play
  useEffect(() => {
    let intervalId;

    const stopAutoPlay = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };

    const startAutoPlay = () => {
      if (sliderSettings.autoPlay === true) {
        intervalId = setInterval(() => {
          if (currentIndex >= slides.length - 1) {
            setCurrentIndex(0);
          } else {
            setCurrentIndex(currentIndex + 1);
          }
        }, sliderSettings.duration);
      }
    };

    const sliderContainer = document.getElementById("sliderContainer");

    if (sliderContainer) {
      sliderContainer.addEventListener("mouseenter", stopAutoPlay);
      sliderContainer.addEventListener("mouseleave", startAutoPlay);
      sliderContainer.addEventListener("touchstart", stopAutoPlay);
      sliderContainer.addEventListener("touchend", startAutoPlay);
    }

    startAutoPlay(); // İlk başta otomatik oynatımı başlat

    return () => {
      if (sliderContainer) {
        sliderContainer.removeEventListener("mouseenter", stopAutoPlay);
        sliderContainer.removeEventListener("mouseleave", startAutoPlay);
        sliderContainer.removeEventListener("touchstart", stopAutoPlay);
        sliderContainer.removeEventListener("touchend", startAutoPlay);
      }

      stopAutoPlay(); // Component unmount olduğunda interval'i temizle
    };
  }, [currentIndex, setCurrentIndex, sliderSettings.autoPlay, slides.length]);

  const [touchPosition, setTouchPosition] = useState(null);
  const touchRef = useRef(null);

  const handleTouchStart = (e) => {
    setTouchPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchPosition || !e.touches?.[0]) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      // Swiped left
      sliderForward(e);
    } else if (diff < -5) {
      // Swiped right
      sliderBackward(e);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    const sliderContainer = document.getElementById("sliderContainer");

    if (sliderContainer) {
      sliderContainer.addEventListener("touchstart", handleTouchStart);
      sliderContainer.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      if (sliderContainer) {
        sliderContainer.removeEventListener("touchstart", handleTouchStart);
        sliderContainer.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [handleTouchStart, handleTouchMove]);

  return (
    <div
      className="w-full relative h-[600px] lg:h-[750px] group select-none"
      ref={touchRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      s
    >
      <div className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="bg-white/20 hover:bg-black/60  transition duration-300 ease-linear p-1 lg:p-2 absolute bottom-2/4 z-20 left-4 rounded-full cursor-pointer"
          onClick={sliderBackward}
        >
          <svg
            className="fill-white/75 "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0019 2.98505C16.5119 2.49505 15.7219 2.49505 15.2319 2.98505L6.92186 11.2951C6.53186 11.6851 6.53186 12.3151 6.92186 12.7051L15.2319 21.0151C15.7219 21.5051 16.5119 21.5051 17.0019 21.0151C17.4919 20.5251 17.4919 19.7351 17.0019 19.2451L9.76186 11.9951L17.0119 4.74505C17.4919 4.26505 17.4919 3.46505 17.0019 2.98505Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className=" bg-white/20 hover:bg-black/60 p-1 lg:p-2 absolute bottom-2/4 z-20 right-4 rotate-180 rounded-full cursor-pointer"
          onClick={sliderForward}
        >
          <svg
            className="fill-white/75"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.0019 2.98505C16.5119 2.49505 15.7219 2.49505 15.2319 2.98505L6.92186 11.2951C6.53186 11.6851 6.53186 12.3151 6.92186 12.7051L15.2319 21.0151C15.7219 21.5051 16.5119 21.5051 17.0019 21.0151C17.4919 20.5251 17.4919 19.7351 17.0019 19.2451L9.76186 11.9951L17.0119 4.74505C17.4919 4.26505 17.4919 3.46505 17.0019 2.98505Z" />
          </svg>
        </div>
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full h-full flex items-center ${
            index === currentIndex
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } absolute top-0 left-0`}
        >
          <Link
            href={slide.Link || ""}
            className=" absolute top-0 left-0 w-full h-full "
          >
            <Image
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII="
              src={`${backendUrl}${slide.Image.data.attributes.url}`}
              alt={slide.Title || "slider"}
              fill
              sizes="100vw"
              className=" object-cover  brightness-[0.35]"
              priority={index === currentIndex ? true : undefined}
            />
          </Link>

          {slide.Title ||
          slide.OverLineText ||
          slide.Description ||
          slide.Link ? (
            <div className="container mx-auto px-2 sm:px-0">
              <div
                className={`relative  w-full sm:max-w-xs md:max-w-2xl flex flex-col justify-center p-8 rounded h-full `}
                //Buzlu cam efeği için bu clasları ekle: "bg-gray-100/40 backdrop-blur-lg"
              >
                {slide.OverLineText && (
                  <p className="text-small-regular md:text-normal-regular mb-2 text-white uppercase">
                    {slide.OverLineText}
                  </p>
                )}
                {slide.Title && (
                  <h3 className="text-h4 md:text-h3 text-white ">
                    {slide.Title}
                  </h3>
                )}
                {slide.Description && (
                  <p className=" mt-4 text-white text-small-regular md:text-normal-regular ">
                    {slide.Description}
                  </p>
                )}
                {slide.Link && (
                  <div className="mt-4">
                    <Button
                      href={slide.Link || "#"}
                      passHref
                      textColor={slide.ButtonTextColor}
                      bgColor={slide.ButtonBgColor}
                      type="solid"
                      color="red"
                    >
                      {" "}
                      {slide.ButtonName || "İncele"}{" "}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
