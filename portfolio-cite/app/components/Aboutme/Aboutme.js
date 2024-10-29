import Box from "@mui/material/Box";
import Image from "next/image";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React from "react";
import SkillsList from "./SkillList/SkillList";

export default function AboutMe() {
    return (
        <>
        <Box 
        sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
        }}
        >

        <Box
            sx = {{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
            }}>
            <img 
                src="./images/Icon.png"
                alt="My Icon"
                height="400"
            />
        <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
                maxWidth: "400px",
                width: "400px",
                display: "flex",
                justifyContent: "center",
                marginTop: 3,
                }}
            fontWeight="fontWeightBold"
            fontFamily="system-ui"
            letterSpacing={-4}
        >
            Manamun&apos;s Portfolio
        </Typography>
        <Typography 
            variant="body1"
            sx={{
                maxWidth: "400px",
                width: "400px",
                display: "flex",
                justifyContent: "center",
                marginTop: 3,
            }}
            fontFamily="system-ui"
        >
        情報系大学院生のまなむんです．<br/>
        大学院で「運動学習」という分野の研究を行っています．
        <br/>このページで私に興味を持ってくれる人がいればうれしいです．
        </Typography>
        </Box>
        </Box>
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
                        display: "flex",
                        justifyContent: "center",
                    }}>
                <Grid2  xs={12} md={6} 
                    sx={{
                        padding: 2,
                        width:"400px",
                    }}>
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
                            fontWeight="fontWeightBold"
                            fontFamily="system-ui"
                            letterSpacing={-2}
                        >
                            About Me
                        </Typography>
                        <List >
                            <ListItem disablePadding>
                            <Typography variant="h6" component="h2" gutterBottom fontFamily="system-ui" fontWeight="fontWeightBold">hobby</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                            <Typography variant="body1" fontFamily="system-ui">
                                FPSゲーム (APEX, VALORANT, OW, Splatoon)<br/>
                                スポーツ観戦<br/>
                                謎解き<br/>
                                料理
                            </Typography>
                            </ListItem>
                            <ListItem disablePadding>
                            <Typography variant="h6" component="h2" gutterBottom fontFamily="system-ui" fontWeight="fontWeightBold">Lisence</Typography>
                            </ListItem>
                            <Typography variant="body1" fontFamily="system-ui">
                                2022年3月 普通免許証 本免学科試験 不合格<br/>
                                ~ 人生で初めて試験に落ちる
                            </Typography>
                            <ListItem disablePadding>
                            <Typography variant="h6" component="h2" gutterBottom fontFamily="system-ui" fontWeight="fontWeightBold">Certification</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                            <Typography variant="body1" fontFamily="system-ui">
                                2022年5月 基本情報技術者試験 午前不合格<br/>
                                ~ その後立川の猫カフェで猫に慰めてもらう
                            </Typography>
                            </ListItem>
                            <ListItem disablePadding>
                            <Typography variant="body1" fontFamily="system-ui">
                                2022年10月 応用情報技術者試験 午前不合格<br/>
                                ~ 一緒に受けると約束した友人寝坊ぶっち
                            </Typography>
                            </ListItem>
                            <ListItem disablePadding>
                            <Typography variant="body1" fontFamily="system-ui">
                                2024年4月 応用情報技術者試験 午後58点で不合格<br/>
                                ~ ついに本気を出し，勉強したが撃沈<br/>
                                ~ 次回に期待
                            </Typography>
                            </ListItem>
                        </List>
                        
                </Grid2>
                <Grid2 
                    xs={12}
                    md={6}
                    sx={{
                        padding: 2,
                        width:"400px"
                    }}

                >
                    <SkillsList />
                </Grid2>
            </Grid2>
        </Box>
        </>
    );
}