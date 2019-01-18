import {css} from "styled-components";

const sizes = {
  phone: 320,
  largePhone: 425,
  tablet: 768,
  laptop: 992
};

export const media = Object.keys(sizes).reduce((finalMedia, size) => {
  finalMedia[size] = (...args) => css`
    @media (max-width: ${sizes[size] / 16}em) {
      ${css(...args)}
    }
  `;

  return finalMedia;
}, {});
