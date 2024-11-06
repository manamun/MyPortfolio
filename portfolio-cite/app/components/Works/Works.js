import { Box, Grid2, Typography} from '@mui/material';
import WorkCard from '../WorkCard/WorkCard';
import FadeIn from '../FadeIn/FadeIn';

export default function Works() {

    const works =[
        {
          image: './images/sports.png',
          title: '運動軌道計測システム',
          description: '学部時代の卒業論文で作成したシステムです．3DSystems社の"Phantom Premium 1.5HF"を使用しており，到達運動時の手先の運動軌道・力のプロファイルを取得できます．',
          githubLink: 'https://github.com/manamun/Thesis-experiment-move-condition-',
        },
        {
          image: './images/webpage.png',
          title: 'My Portfolio Page',
          description: 'このページ自体です．自分自身のスキルや作品について知ってもらうためのページです．Github Pagesの仕様で静的ですが，これからもアップデートしていく予定です．',
          githubLink: 'https://github.com/manamun/MyPortfolio',
        },
      ];

      return (
        //Fadeinにすることも可能
        <>
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
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
                    Works
                </Typography>
            </Box>
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: 10
            }}>
                <Box 
                    sx={{
                    flexGrow: 1, 
                    padding: 2,
                    maxWidth: "900px",
                }}>
                    <Grid2 container spacing={6} justifyContent="center">
                        {works.map((work, index) => (
                            <Grid2 item xs={12} sm={6} md={4} key={index} >
                                <WorkCard
                                    image={work.image}
                                    title={work.title}
                                    description={work.description}
                                    githubLink={work.githubLink}
                                />
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
            </Box>
        </>
      );
}