"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import {Link as RouterLink} from "react-router-dom";
import React from "react";


export default function Header() {
    return(
    <>
    <Box
        component="nav"
        sx={{
           display: "flex",
           justifyContent: "space-between",
           width: "100%",
           backgroundColor: "#446E72",
           zIndex: "2",
        }}
    >
    </Box>
    </>
    );
}