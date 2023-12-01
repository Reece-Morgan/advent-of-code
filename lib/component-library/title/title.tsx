import styled from "styled-components";
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    colour?: string;
}

export const Title = ({ children, colour }: Props) => {
    return (
        <StyledH1 colour={colour}>{children}</StyledH1>
    )
}

const StyledH1 = styled.h1<{colour?: string}>`
    text-align: center;
    font-size: 3em;
    color: ${(props) => props.colour? props.colour : '#fff'};

    @media (max-width: 640px) {
        font-size: 1.5em;
    }
`;
