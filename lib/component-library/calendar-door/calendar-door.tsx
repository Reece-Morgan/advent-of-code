import styled from "styled-components";
import { ReactNode } from 'react';
import Link from "next/link";

interface Props {
    children: ReactNode;
    link: string;
    isComplete: boolean;
}

export const CalendarDoor = ({ children, link, isComplete }: Props) => {
    return (
        <Wrapper>
            {isComplete ? (
            <StyledLink href={link}>
                {children}
            </StyledLink>
            ) : (
            <DisabledLink>
                {children}
            </DisabledLink>
            )}
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100px;
    width: 75px;
    font-size: 3em;
    font-weight: 800;
    margin: 15px;
`;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1f9c0e;
    background-color: #db1212;
    border-radius: 50px 50px 0 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
`;

const DisabledLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6a6e69;
    background-color: #414540;
    border-radius: 50px 50px 0 0;
    height: 100%;
    width: 100%;
    cursor: not-allowed;
`;