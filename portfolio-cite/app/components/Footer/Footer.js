
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return(
        <>
        <Box
        sx = {{
            backgroundColor: "#446E72",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
            padding: "20px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        }}>
            <Link 
                href="https://twitter.com/manamun_prog"
                target = "_blank" 
                rel = "noopener noreferrer"
                sx = {{
                    color: "white",
                    margin: "0 15px",
                    fontSize: "2rem",
                    display: "flex",
                    alignContent: "center",
                    transition: "color 0.5s ease",
                    "&:hover": {color: "black"}
                }}>
                <XIcon fontSize="Large"/>
            </Link>
            <Link 
                href="https://www.instagram.com/Username_ld"
                target = "_blank"
                rel = "noopener noreferrer"
                sx = {{
                    color: "white",
                    margin: "0 15px",
                    fontSize: "2rem",
                    display: "flex",
                    alignContent: "center",
                    transition: "color 0.5s ease",
                    "&:hover": {color: "#E1306C"}
                }}>
                <InstagramIcon fontSize="Large"/>
            </Link>
            <Link
                href="https://github.com/manamun"
                target = "_blank"
                rel = "noopener noreferrer"
                sx = {{
                    color: "white",
                    margin: "0 15px",
                    fontSize: "2rem",
                    display: "flex",
                    alignContent: "center",
                    transition: "color 0.5s ease",
                    "&:hover": {color: "black"}
                }}>
                <GitHubIcon fontSize="Large"/>
            </Link>
        </Box>
        </>
    );
}