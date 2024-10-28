import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const languages = ['Python', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'C/C++', 'C#'];
const frameworks = ['React', 'Next'];
const tools = ['GitHub', 'Figma', 'Discord', 'VSCode'];

export default function SkillsList() {
  return (
    <Box 
    sx={{
        marginLeft: 4,
        }}>
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
        fontFamily="system-ui"
        fontWeight="fontWeightBold" 
        >
            My Skills
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom fontFamily="system-ui" fontWeight="fontWeightBold">
            Program Language
        </Typography>
        <List 
        disablePadding
        sx={{
            columns: 2,
            alignItems: "flex-start"
        }}>
            {languages.map((language, index) => (
                <ListItem key={index} sx={{padding: 0}}>
                    <Typography variant="body1" fontFamily="system-ui">{language}</Typography>
                </ListItem>
            ))}
        </List>

        <Typography variant="h5" component="h2" gutterBottom fontFamily="system-ui" fontWeight="fontWeightBold">
            Frameworks
        </Typography>
        <List disablePadding>
            {frameworks.map((framework, index) => (
                <ListItem key={index} sx={{padding: 0}}>
                    <Typography variant="body1" fontFamily="system-ui">{framework}</Typography>
                </ListItem>
            ))}
        </List>

        <Typography variant="h5" component="h2" gutterBottom fontFamily="system-ui" fontWeight="fontWeightBold">
            Tools
        </Typography>
        <List disablePadding>
            {tools.map((tool, index) => (
                <ListItem key={index} sx={{padding: 0}}>
                    <Typography variant="body1" fontFamily="system-ui">{tool}</Typography>
                </ListItem>
            ))}
        </List>
    </Box>
  );
}
