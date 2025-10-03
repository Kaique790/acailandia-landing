"use client";

import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { ComboCard } from "./combo-card";
import { combos } from "@/data/combos";

export function CombosCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: "auto",
      spacing: 22,
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="mt-10space-y-6 relative">
      <div className="navigation-wrapper flex w-full max-w-screen items-center justify-center gap-4 pb-8">
        {loaded && instanceRef.current && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
              className="not-disabled:hover:bg-secondary not-disabled:hover:text-primary bg-dark/60 cursor-pointer rounded-md p-2 text-white duration-200 disabled:cursor-not-allowed"
            >
              <ArrowLeftIcon
                size={20}
                weight="bold"
                aria-label="Slide anterior"
              />
            </button>

            <div className="dots flex gap-2">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length,
                ).keys(),
              ].map((idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  aria-label={`Ir para o slide ${idx + 1}`}
                  className={cn(
                    "h-4 w-4 rounded-full",
                    currentSlide === idx
                      ? "bg-primary"
                      : "border-primary border",
                  )}
                />
              ))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              className="not-disabled:hover:bg-secondary not-disabled:hover:text-primary bg-dark/60 cursor-pointer rounded-md p-2 text-white duration-200 disabled:cursor-not-allowed"
            >
              <ArrowRightIcon
                size={20}
                weight="bold"
                aria-label="Próximo slide"
              />
            </button>
          </>
        )}
      </div>
      <div className="bg-dark absolute top-[270px] right-0 h-[150px] w-screen" />
      <div
        ref={sliderRef}
        className="keen-slider mx-auto max-w-[1064px] px-6 py-4"
      >
        {combos.map((combo, i) => (
          <div
            key={combo.title}
            className={cn(
              `keen-slider__slide number-slide${i + 1} min-w-[328px] rounded-md`,
              currentSlide === i && "translate-x-2 scale-102",
            )}
          >
            <ComboCard
              title={combo.title}
              subheader={combo.subheader}
              link={combo.link}
              image={combo.image}
              attributes={combo.attributes}
              index={i}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
