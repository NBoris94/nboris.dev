const titleAnimation = {
  hidden: {
    y: "100%"
  },
  show: {
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.7,
      delay: 0.3
    }
  }
}

const btnAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
      delay: 0.3
    }
  }
}

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 1.1
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.08, 0.58, 0, 0.98],
      duration: 2,
      delay: 0.3
    }
  }
}

const textAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
      delay: 0.3
    }
  }
}

export { titleAnimation, btnAnimation, imageAnimation, textAnimation }
