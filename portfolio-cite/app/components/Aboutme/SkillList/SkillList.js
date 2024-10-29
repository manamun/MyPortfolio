import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const languageProficiency = {
    Python: 3,
    JavaScript: 3,
    HTML: 3,
    CSS: 2,
    TypeScript: 1,
    Unity : 3,
    Unity: 2,
  };
const frameworks = ['React', 'Next'];
const tools = ['GitHub', 'Figma', 'VSCode'];

export default function SkillsList() {
  return (
    <Box>
        <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom
        sx={{
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
            marginTop: 3,
        }}
        fontFamily="system-ui"
        fontWeight="fontWeightBold" 
        >
            Skills
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
            {Object.entries(languageProficiency).map(([language,level]) => (
                <ListItem key={language} sx={{padding: 0}}>
                    <Typography variant="body1" fontFamily="system-ui">{language}</Typography>
                    {[...Array(level)].map((_, index) => (
                        <>
                        <StarBorderIcon fontSize='verysmall' key={index}/>
                        </>
                    ))}
                    {[...Array(5-level)].map((_, index) => (
                        <>
                        <StarBorderIcon fontSize='verysmall' key={index} sx={{color: "white"}}/>
                        </>
                    ))}
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
