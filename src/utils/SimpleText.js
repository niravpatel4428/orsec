import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Bottom Fade
export const BottomFade = () => {
  gsap.fromTo(
    ".bottomFade",
    {
      opacity: 0,
      y: "80%",
    },
    {
      opacity: 1,
      y: "0%",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bottomFade", // element to watch
        start: "top 80%", // when top of element hits 80% of viewport
        toggleActions: "play none none reverse", // re-animate on scroll back
      },
    }
  );
};

// Simple Text
export const SimpleText = () => {
  gsap.fromTo(
    ".animated-title span",
    {
      opacity: 0,
      y: "60%",
    },
    {
      opacity: 1,
      y: "0%",
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".animated-title span",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Blur Text Reveal
export const BlurTextReveal = () => {
  gsap.fromTo(
    ".blur-title",
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
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".blur-title",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Multi Paragraph Details
export const MultiParagraphDetails = () => {
  gsap.fromTo(
    ".multiParagraph * ",
    {
      opacity: 0,
      y: "20px",
    },
    {
      opacity: 1,
      y: "0px",
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".multiParagraph * ",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// StepByStepShow
export const StepByStepShow = () => {
  gsap.fromTo(
    ".soloBlockParent * ",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.7,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".soloBlock * ",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

// StepByStepShow
export const StepByStepBlock = () => {
  gsap.fromTo(
    ".StepByStepBlock",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.7,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".StepByStepBlock",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};
