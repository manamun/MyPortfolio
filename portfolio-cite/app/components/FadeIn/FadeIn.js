"use client"

import React, {useRef, useEffect, useState} from "react";
import { Box } from "@mui/material";

export default function({children}){
    const[isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    },[]
    
    );

    return (
        <Box
            ref = {ref}
            sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(40px)",
                transition: "opacity 1s ease-out, transform 1s ease-out"
            }}
            >
                {children}
            </Box>
    );
}