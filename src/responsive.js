// import { css } from "styled-components";

// export const mobile = (props) => {
//   return css`
//     @media only screen and (max-width: 580px) {
//       ${props}
//     }
//   `;
// };

import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 360px) {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.8rem;
      ${props}
    }
  `;
};


