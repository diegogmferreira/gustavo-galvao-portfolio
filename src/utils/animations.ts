const animationEasing: [number, number, number, number] = [0.6, -0.05, 0.01, 0.99];

export const animationStagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.4,
      staggerDirection: 1
    }
  }
}

export const invertedAnimationStagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.4,
      staggerDirection: -1
    }
  }
}

export const animationFadeInDown = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.4, ease: animationEasing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      // delay: 0.5,
      ease: animationEasing
    }
  }
};

export const animationFadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6, ease: animationEasing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      // delay: 0.5,
      ease: animationEasing
    }
  }
};

export const btnGroupAnimation = {
  initial: {
    y: -60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: animationEasing
    }
  }
};

export const titleStrokeAnimation = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: animationEasing
    }
  }
};

export const titleFillAnimation = {
  initial: {
    y: -60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: animationEasing
    }
  }
};

export const cardFillAnimation = {
  initial: {
    y: -60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 2.0,
      ease: animationEasing
    }
  }
};