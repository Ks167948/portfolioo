import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);
  const [imageErrors, setImageErrors] = useState({});

  const cardUrls = {
    experience: "https://leetcode.com/",
    clients: "https://codeforces.com/",
    projects: "https://www.codechef.com/",
    retention: "https://github.com/adrianhajdin?tab=stars",
  };

  const cardIcons = {
    experience: "/images/leetcode.svg",
    clients: "/images/code-forces.svg",
    projects: "/images/icons8-codechef.svg",
    retention: "/images/icons8-puzzle-500.svg",
  };

  const handleImageError = (urlKey) => {
    console.error(`Failed to load image for ${urlKey}: ${cardIcons[urlKey]}`);
    setImageErrors((prev) => ({ ...prev, [urlKey]: true }));
  };

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => {
          const urlKey = item.key;

          return (
            <a
              key={index}
              href={cardUrls[urlKey]}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => el && (countersRef.current[index] = el)}
              className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center hover:bg-zinc-800 transition-colors duration-300"
            >
              <div className="mb-4">
                {imageErrors[urlKey] ? (
                  <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                    <span className="text-white-50 text-xl">⚠️</span>
                  </div>
                ) : (
                  <img
                    src={cardIcons[urlKey]}
                    alt={`${urlKey} icon`}
                    className="w-12 h-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    onError={() => handleImageError(urlKey)}
                  />
                )}
              </div>
              <div className="counter-number text-white-50 text-5xl font-bold mb-2">
                0{item.suffix}
              </div>
              <div className="text-white-50 text-lg">{item.label}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCounter;
