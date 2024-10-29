
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faXTwitter);
library.add(faGithub);
library.add(faInstagram);

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
                    // transition: "color 0.5s ease",
                    // "&:hover": {color: "black"}
                }}>
                <FontAwesomeIcon icon={faXTwitter}/>
            </Link>
            <Link 
                href="https://www.instagram.com/Username_ld"
                target = "_blank"
                rel = "noopener noreferrer"
                sx = {{
                    color: "white",
                    margin: "0 15px",
                    fontSize: "2rem",
                    // transition: "color 0.5s ease",
                    // "&:hover": {color: "#E1306C"}
                }}>
                <FontAwesomeIcon icon={faInstagram}/>
            </Link>
            <Link
                href="https://github.com/manamun"
                target = "_blank"
                rel = "noopener noreferrer"
                sx = {{
                    color: "white",
                    margin: "0 15px",
                    fontSize: "2rem",
                    // transition: "color 0.5s ease",
                    // "&:hover": {color: "black"}
                }}>
                <FontAwesomeIcon icon={faGithub}/>
            </Link>
        </Box>
        </>
    );
}