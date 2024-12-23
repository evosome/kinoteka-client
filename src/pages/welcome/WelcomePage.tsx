import { FC } from "react";
import { WelcomePageContainer, WelcomePageFooterContainer } from "./styles";
import { Divider, Stack, Typography } from "@mui/material";
import { WelcomeText } from "./components/welcome-text";
import { EasterEgg } from "./components/easter-egg";
import { LocationCity } from "@mui/icons-material";

const WelcomePage: FC<{}> = () => {
  return (
    <>
      <WelcomePageContainer>
        <Stack gap="8px">
          <WelcomeText />
        </Stack>
      </WelcomePageContainer>
      <WelcomePageFooterContainer
        id="footer-section"
        gap={4}
        direction="row"
        alignItems="center"
      >
        <Stack>
          <Typography variant="poster" color="#fff">
            Kinoteka
          </Typography>
          <Typography variant="h6" color="#fff">
            Семейный кинотеатр, 2024
          </Typography>
          <EasterEgg></EasterEgg>
        </Stack>
        <Divider flexItem orientation="vertical" />
        <Stack gap={4} direction="row" justifyContent="top">
          <Stack gap={2}>
            <Stack>
              <Typography variant="h6" color="#fff">
                Разработчики:
              </Typography>
              <Typography variant="caption" color="#fff">
                Александр Чибизов - Frontend
              </Typography>
              <Typography variant="caption" color="#fff">
                Сергей Ткачев - Frontend
              </Typography>
              <Typography variant="caption" color="#fff">
                Егор Аксенов - Backend
              </Typography>
              <Typography variant="caption" color="#fff">
                Павел Конарев - мотиватор
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <LocationCity htmlColor="#fff" />
              <Typography variant="caption" color="#fff">
                Россия, г. Самара, ул. Московское шоссе, 34А
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h6" color="#fff">
              Руководитель проекта:
            </Typography>
            <Typography variant="caption" color="#fff">
              Зеленко Лариса Сергеевна
            </Typography>
          </Stack>
        </Stack>
      </WelcomePageFooterContainer>
    </>
  );
};

export default WelcomePage;
