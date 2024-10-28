import Box from "@mui/material/Box";
import Image from "next/image";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import React from "react";
import SkillsList from "./SkillList/SkillList";
import MyIcon from "./Icon.png";

export default function AboutMe() {
    return (
        <>
        <Box
            sx={{
                padding: "30px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                
            }}
        >
            <Grid2 container spacing={2} 
                    sx={{
                        justifyContent: "center",
                    }}>
                <Grid2 item xs={12} md={6} maxWidth="400px">
                    <Image
                        src = {MyIcon}
                        alt="My Icon"
                        sx = {{
                            width: "100%",
                            height: "auto"
                        }}
                    />
                        <Typography 
                            variant="h4" 
                            component="h1" 
                            gutterBottom
                            sx={{
                                maxWidth: "400px",
                                width: "400px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                            fontWeight="fontWeightBold"
                            fontFamily="system-ui"
                            letterSpacing={-2}
                        >
                            Manamun`s Portfolio
                        </Typography>
                        <Typography 
                            variant="body1"
                            sx={{
                                maxWidth: "400px",
                                width: "400px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                            fontFamily="system-ui"
                        >
                        I am a student engineer.
                        You can see my past works and programs.
                        You can jump to github by clicking on my works.
                        I am looking forward to creating more and more interesting things in the future.
                        </Typography>
                </Grid2>
                <Grid2 
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    maxWidth="400px"
                >
                    <SkillsList />
                </Grid2>
            </Grid2>
        </Box>
        </>
    );
}