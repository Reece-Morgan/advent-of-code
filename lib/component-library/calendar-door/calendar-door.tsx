import styled from "styled-components";
import { ReactNode, useState } from 'react';
import Link from "next/link";

interface Props {
    children: ReactNode;
    link: string;
    isComplete: boolean;
}

export const CalendarDoor = ({ children, link, isComplete }: Props) => {
    const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);

    return (
        <Wrapper>
            {isComplete ? (
                <DoorFrame>
                    <Door onClick={() => setIsDoorOpen(!isDoorOpen)} isOpen={isDoorOpen}>{children}</Door>
                    <StyledLink href={link}>
                        {children}
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

const DoorFrame = styled.div`
    position: relative;
    perspective: 150px;
    width: 175px;
    height: 175px;
    cursor: pointer;

    @media (max-width: 640px) {
        width: 100px;
        height: 75px;
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
        height: 75px;
        font-size: 3em;
    }
`;