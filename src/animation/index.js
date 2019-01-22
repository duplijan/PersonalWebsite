import posed from "react-pose";

export const AnimatedAppContainer = posed.div({
  enter: {opacity: 1, delay: 200, beforeChildren: true},
  exit: {opacity: 0}
});
export const AnimatedContainer = posed.div({
  enter: {staggerChildren: 50, beforeChildren: true}
});
export const AnimatedText = posed.div({
  enter: {y: 0, opacity: 1},
  exit: {y: 50, opacity: 0}
});
export const AnimatedTitle = posed.div({
  enter: {y: 0, opacity: 1},
  exit: {y: -50, opacity: 0}
});
export const AnimatedIcon = posed.div({
  enter: {y: 0, opacity: 1},
  exit: {y: 50, opacity: 0}
});
export const AnimatedCard = posed.div({
  enter: {x: 0, opacity: 1},
  exit: {x: 100, opacity: 0}
});
