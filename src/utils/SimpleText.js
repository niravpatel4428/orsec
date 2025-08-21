import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// hero banner animation with 1.5s delay

export const LoadingMainTitle = () => {
  gsap.fromTo(
    ".loadingWord",
    {
      opacity: 0,
      y: "100%",
    },
    {
      opacity: 1,
      y: "0%",
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    }
  );

  return null;
};

export const LoadingBottomFade = () => {
  gsap.utils.toArray(".loadingBottomFade").forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: "80%",
      },
      {
        opacity: 1,
        y: "0%",
        duration: 1,
        ease: "power3.out",
        delay: 1.6,
      }
    );
  });
};

export const LoadingSimpleText = () => {
  const tl = gsap.timeline({
    delay: 1.6, // overall delay before starting
    defaults: { ease: "power3.out", duration: 1 },
  });

  tl.fromTo(
    ".loadingAnimated-title *",
    { y: "100%", opacity: 0 },
    { y: "0%", opacity: 1, stagger: 0.3 } // 0.3 sec gap between spans
  );
};

export const LoadingBlurTextReveal = () => {
  gsap.utils.toArray(".loadingBlur-title").forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        filter: "blur(10px)",
        x: "-10px",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        x: "0px",
        duration: 1.5,
        ease: "power3.out",
        delay: 1.6,
      }
    );
  });
};

export const LoadingMultiParagraphDetails = () => {
  gsap.utils.toArray(".loadingMultiParagraph *").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: "20px" },
      {
        opacity: 1,
        y: "0px",
        duration: 1.5,
        ease: "power3.out",
        delay: 1.6,
      }
    );
  });
};

export const LoadingStepByStepShow = () => {
  gsap.utils.toArray(".loadingSoloBlockParent *").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 1.6,
      }
    );
  });
};

export const LoadingStepByStepBlock = () => {
  gsap.utils.toArray(".loadingStepByStepBlock").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1.6,
      }
    );
  });
};

// animation with scroll trigger

export const BottomFade = () => {
  gsap.utils.toArray(".bottomFade").forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: "80%",
      },
      {
        opacity: 1,
        y: "0%",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  });
};

export const SimpleText = () => {
  gsap.utils.toArray(".animated-title span").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: "60%", skewY: 3 },
      {
        opacity: 1,
        y: "0%",
        skewY: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};


export const BlurTextReveal = () => {
  gsap.utils.toArray(".blur-title").forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        filter: "blur(10px)",
        x: "-10px",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        x: "0px",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
          stagger: 0.1,
        },
      }
    );
  });
};

export const MultiParagraphDetails = () => {
  gsap.utils.toArray(".multiParagraph *").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: "20px" },
      {
        opacity: 1,
        y: "0px",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

export const StepByStepShow = () => {
  gsap.utils.toArray(".soloBlockParent *").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

export const StepByStepBlock = () => {
  gsap.utils.toArray(".StepByStepBlock").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};
