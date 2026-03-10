import Logo from "@/assets/logo-svg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FlickeringGrid } from "../ui/flickring-grid";

export interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let loadedValue = 0;

    // Smooth counter for visual polish
    const updateDisplayProgress = (target: number) => {
      if (!isMounted) return;
      const step = () => {
        if (loadedValue < target && loadedValue < 100) {
          loadedValue += 1;
          setProgress(Math.min(loadedValue, 100));
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const initializeLoader = () => {
      // Find all images in the document
      const images = Array.from(document.querySelectorAll("img"));

      if (images.length === 0) {
        updateDisplayProgress(100);
        setTimeout(() => isMounted && setLoading(false), 800);
        return;
      }

      let loadedImages = 0;

      const incrementProgress = () => {
        loadedImages++;
        const targetPercent = Math.floor((loadedImages / images.length) * 100);
        updateDisplayProgress(targetPercent);

        if (loadedImages === images.length) {
          setTimeout(() => {
            if (isMounted) setLoading(false);
          }, 1000); // give the 100% text a moment to be seen
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          incrementProgress();
        } else {
          img.addEventListener("load", incrementProgress);
          img.addEventListener("error", incrementProgress); // don't block on error
        }
      });
    };

    // slight delay to let React finish mounting DOM nodes
    setTimeout(initializeLoader, 100);

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#040404]"
        >
          {/* <FlickeringGrid
            className="absolute inset-0 z-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          /> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-8 w-full max-w-lg px-10"
          >
            {/* Logo or loading text */}
            <div className="flex flex-col gap-12 justify-center items-center text-white text-3xl font-bold uppercase tracking-[0.3em]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Logo className="w-80" />
                </motion.div>
              </motion.div>

              <motion.div className="flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                {"Carregando".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4 + index * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-white/20 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Percentage */}
            <motion.div
              className="text-white/60 font-mono text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {progress}%
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
