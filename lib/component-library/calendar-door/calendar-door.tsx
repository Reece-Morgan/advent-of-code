'use client';

import styled from "styled-components";
import { ReactNode, useState } from 'react';
import Link from "next/link";

interface Props {
    children: ReactNode;
    link: string;
    isStarted: boolean;
    status: 'n/a' | 'silver' | 'gold'
}

export const CalendarDoor = ({ children, link, isStarted, status }: Props) => {
    const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);

    return (
        <Wrapper>
            {isStarted ? (
                <DoorFrame>
                    <Door onClick={() => setIsDoorOpen(!isDoorOpen)} isOpen={isDoorOpen}>{children}</Door>
                    <StyledLink href={link}>
                        {status === 'gold' ? <StyledImg src="/gold-star.png" alt="Gold Star" /> : (
                            <>
                            {status === 'silver' ? <StyledImg src="/silver-star.png" alt="Silver Star" /> : <StyledImg src="/empty-star.png" alt="No Star" />}
                            </>
                        )}
                    </StyledLink>
                </DoorFrame>
            ) : (
            <DisabledDoor>
                {children}
            </DisabledDoor>
            )}
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-weight: 800;
    margin: 15px;
`;

const StyledImg = styled.img`
    width: 90%;
    height: 90%;
`;

const DoorFrame = styled.div`
    position: relative;
    perspective: 150px;
    width: 175px;
    height: 175px;
    cursor: pointer;

    @media (max-width: 640px) {
        width: 100px;
        height: 100px;
    }
`;

const Door = styled.div<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #db1212;
    height: 100%;
    width: 100%;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    border: 5px solid #fff;

    transform: rotateY(0deg);
    transform-origin: 0;
    transition-property: all;
    transition-duration: 0.5s;

    ${(props) => props.isOpen ? `
        transform: rotateY(-120deg);
        transform-origin: 0 50% 0;
        width: 15%;
        font-size: 0;
    ` : `
        transform: rotateY(0deg);
        transform-origin: 0;
        width: 100%;
        font-size: 5em;

        @media (max-width: 640px) {
            font-size: 3em;
        }
    `}
`;

const StyledLink = styled(Link)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #1f9c0e;
    height: 100%;
    width: 100%;
    font-size: 3em;
    cursor: pointer;
    border: 5px dashed #fff;
`;

const DisabledDoor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6a6e69;
    background-color: #414540;
    width: 175px;
    height: 175px;
    cursor: not-allowed;
    z-index: 1;
    font-size: 5em;

    @media (max-width: 640px) {
        width: 100px;
        height: 100px;
        font-size: 3em;
    }
`;