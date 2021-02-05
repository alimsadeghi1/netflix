import React, { useState, useContext, createContext } from 'react';
import { Container, Inner, Title, Item, Header, Body } from "./styles/accordion";

const OpenContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
};


Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    );
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [open, setOpen] = useState(false);

    return (
        <OpenContext.Provider value={{ open, setOpen }}>
            <Item {...restProps}>{children}</Item>
        </OpenContext.Provider>
    );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const {open, setOpen} = useContext(OpenContext);

    return (
        <Header onClick={() => setOpen(!open)} {...restProps}>
            {children}
            {
            open ? 
                (<img src="/images/icons/close-slim.png" alt="Close" />)
            : 
                (<img src="/images/icons/add.png" alt="Open" />)
            }
        </Header>
    );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const {open} = useContext(OpenContext);

    return (
        <Body className={open ? 'open' : 'closed'} {...restProps}>{children}</Body>
    );
};




