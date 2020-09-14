import styled, { css } from "styled-components";
import { circle } from "../../utils/mixin";

const variants = {
    dot: css`
    position: relative;
    padding: 5px;
    &::after {
        display: ${({ show }) => (show ? "block" : "none")};
        content: "";
        ${({ theme }) => circle(theme.red, "6px")}
        position: absolute;
        right: 0;
        top: 0;
    }
    `,
    default: css`
    ${({ theme }) => circle(theme.red, "26px")};
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ showZero, count }) => !showZero && count === 0 && `visibility: hidden`}
    `,
}

const Count = styled.div`
    font-size: ${({ theme }) => theme.normal};
    color: white;
`
const StyledBadge = styled.div`
    display: inline-block;
    ${({ variant }) => variants[variant]}
`;

export default StyledBadge;
export { Count };
