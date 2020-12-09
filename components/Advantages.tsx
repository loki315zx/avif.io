import React from "react";
import { motion } from "framer-motion";

export default function Advantages() {
  return (
    <>
      <section id="avifbadge">
        <div className="white center badge__avif">
          <p className="bold">.AVIF</p>
          <motion.div
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              type: "scale",
              damping: 0,
              mass: 0.5,
            }}
            animate={{
              scale: [1, 1.5],
            }}
            className="badge__shadow"
          ></motion.div>
        </div>
      </section>
      <section id="avifadvantages">
        <div className="advantage__grid">
          <div className="advantage__grid__item">
            <div>
              usually{" "}
              <span className="advantage__important">reduces file size</span> of
              images by 20-90% for faster page loading.
            </div>
            <div className="visualizer" id="visualizer-1"></div>
          </div>
          <div className="advantage__grid__item">
            <div>
              <span className="advantage__important">
                decreases required bandwidth
              </span>{" "}
              for service providers.
            </div>
            <div className="visualizer" id="visualizer-2"></div>
          </div>
          <div className="advantage__grid__item">
            <div>
              is{" "}
              <span className="advantage__important">
                actively developed by tech giants
              </span>{" "}
              like Google, Apple, Facebook, Microsoft, Mozilla, Netflix &
              Nvidia.
            </div>
            <div className="visualizer" id="visualizer-3"></div>
          </div>
          <div className="advantage__grid__item">
            <div>
              is open to use and{" "}
              <span className="advantage__important">royalty-free</span> for
              everyone.
            </div>
            <div className="visualizer" id="visualizer-4"></div>
          </div>
          <div className="advantage__grid__item">
            <div>
              provides the{" "}
              <span className="advantage__important">
                highest quality to compression rate
              </span>{" "}
              ever achieved.
            </div>
            <div className="visualizer" id="visualizer-5"></div>
          </div>
          <div className="advantage__grid__item">
            <div>
              already{" "}
              <span className="advantage__important">
                supported by browsers
              </span>{" "}
              like Chrome, Opera and Firefox.
            </div>
            <div className="visualizer" id="visualizer-6"></div>
          </div>
          <div className="advantage__grid__item">
            <div>
              <span className="advantage__important">
                supports transparency
              </span>{" "}
              and is therefore a better version of PNG.
            </div>
            <div className="visualizer" id="visualizer-7"></div>
          </div>
          <div className="advantage__grid__item">
            <div>
              <span className="advantage__important">
                offers support for animated frames
              </span>{" "}
              and can replace GIFs as well as aPNGs.
            </div>
            <div className="visualizer" id="visualizer-8"></div>
          </div>
          <div className="advantage__grid__item">
            <div>
              <span className="advantage__important">
                embraces HDR and wide color gamut
              </span>{" "}
              for viewing images on a wider range of colors.
            </div>
            <div className="visualizer" id="visualizer-9"></div>
          </div>
        </div>
      </section>
    </>
  );
}
