"use client";
import { ChevronLeft, ChevronRight, CloseIcon } from "@/components/Icons";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import Lightbox from "react-spring-lightbox";

const images = [
  {
    src: "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
    alt: "Windows 10 Dark Mode Setting",
  },
  {
    src: "https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png",
    alt: "macOS Mojave Dark Mode Setting",
  },
  {
    src: "https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg",
    alt: "Android 9.0 Dark Mode Setting",
  },
];

const ImageSlider = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);
  return (
    <Lightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
      onClose={onClose}
      renderHeader={() => (
        <div className="flex justify-end p-2">
          <Button isIconOnly onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
      )}
      renderPrevButton={() => (
        <Button
          isIconOnly
          onClick={gotoPrevious}
          isDisabled={currentImageIndex === 0}
          className="z-10"
        >
          <ChevronLeft />
        </Button>
      )}
      renderNextButton={() => (
        <Button
          isIconOnly
          onClick={gotoNext}
          isDisabled={currentImageIndex === images.length - 1}
        >
          <ChevronRight />
        </Button>
      )}
      className="bg-black/80"
    />
  );
};

export default ImageSlider;
