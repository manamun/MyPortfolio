import React from 'react';
import {Box, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';

export default function WorkCard({ image, title, description, githubLink }) {
  return (
    <Box 
    sx ={{
        display: "flex",
        justifyContent: "center"
    }}>
        <Card 
        sx={{
            width: "350px",
            height: "300px",
            }}>
          <CardActionArea href={githubLink} target="_blank" rel="noopener noreferrer">
            <CardMedia
              component="img"
              height="150"
              image={image}
              alt={title}
              sx={{
                width: '200px',
                height: '150px',
                display: "block",
                margin: "auto"
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" fontFamily="system-ui">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="system-ui">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> 
    </Box>
  );
}
