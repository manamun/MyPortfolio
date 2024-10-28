import { Box, Grid2} from '@mui/material';
import WorkCard from '../WorkCard/WorkCard';
import FadeIn from '../FadeIn/FadeIn';

export default function Works() {

    const works =[
        {
          image: '/images/BachelorSystem.jpg',
          title: '運動軌道計測システム',
          description: '学部時代の卒業論文で作成したシステムです．3DSystems社の"Phantom Premium 1.5HF"を使用しており，到達運動時の手先の運動軌道・力のプロファイルを取得できます．',
          githubLink: 'https://github.com/manamun/Thesis-experiment-move-condition-',
        },
        {
          image: '/images/WebCite.jpg',
          title: 'My Portfolio Cite',
          description: 'このサイト自体です．自分自身のスキルや作品について知ってもらうためのサイトです．これからもアップデートしていく予定です．',
          githubLink: 'https://github.com/manamun/MyPortfolio',
        },
      ];

      return (
        <FadeIn>
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
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
        </FadeIn>
      );
}