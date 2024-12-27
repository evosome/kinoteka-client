import { FC, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Modal,
  Stack,
  ToggleButton,
  Typography,
} from "@mui/material";

import { Seat, SessionTimeContainer } from "./styles";
import { SessionTimeProps } from "./types";
import { MovieTag } from "@app/components/movies/movie-tag";
import { useGetMe } from "@app/hooks/api/users";
import { SeatTypes } from "@app/types/movie";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const SEAT_DEFAULT_WIDTH = 50;
const SEAT_DEFAULT_HEIGHT = 50;

const SessionTime: FC<SessionTimeProps> = ({ session, movie }) => {
  const { datetime, hall, price } = session;

  const [modalOpen, setModalOpen] = useState(false);
  const { user, isLoading } = useGetMe();

  return (
    <>
      <SessionTimeContainer
        onClick={() => setModalOpen(true)}
        direction="column"
      >
        <Stack gap={1} direction="row" alignItems="center">
          <MovieTag label={session.format!} />
          <Typography>
            {datetime?.getUTCHours()}:{datetime?.getUTCMinutes()}{" "}
          </Typography>
        </Stack>
        <Typography noWrap>Зал: {hall}</Typography>
        <Typography noWrap>Цена: {price} RUB</Typography>
      </SessionTimeContainer>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Card sx={{ width: "400px" }}>
          <CardMedia sx={{ height: "128px" }} image={movie.coverUrl} />
          <CardContent>
            <Stack gap={1}>
              <Typography>
                {movie.name} ({movie.ageRestriction})
              </Typography>
              <Stack gap={1} direction="row">
                <MovieTag label={session.format!} />
                <MovieTag label={`Зал №${session.hall}`} />
                <MovieTag
                  label={`${session.datetime?.getHours()}:${session.datetime?.getMinutes()}`}
                />
              </Stack>
              <Stack>
                {isLoading ? (
                  <CircularProgress />
                ) : user ? (
                  <Stack>
                    <Stack
                      minHeight="256px"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        borderRadius: "8px",
                        boxShadow:
                          "0px 0px 8px 0px rgba(34, 60, 80, 0.2) inset",
                      }}
                    >
                      <TransformWrapper minScale={0.5} maxScale={1} initialScale={0.5} centerZoomedOut>
                        <TransformComponent wrapperStyle={{
                          width: '100%',
                          height: '100%'
                        }}>
                          <Stack>
                            {session.layout ? (
                              session.layout.rows.map((row, index) => (
                                <Stack
                                  alignItems="center"
                                  marginBottom={`${row.margin}px`}
                                  direction="row"
                                >
                                  <Typography color="#cdcdcd">
                                    {index}
                                  </Typography>
                                  <Stack flexGrow={1} direction="row">
                                    {row.seats.map((seat, index) => (
                                      <Seat
                                        sx={{
                                          width:
                                            seat.type === SeatTypes.LOVESEAT
                                              ? SEAT_DEFAULT_WIDTH * 2
                                              : SEAT_DEFAULT_WIDTH,
                                          height: SEAT_DEFAULT_HEIGHT,
                                        }}
                                        marginLeft={`${seat.marginLeft}px`}
                                      >
                                        {index}
                                      </Seat>
                                    ))}
                                  </Stack>
                                  <Typography color="#cdcdcd">
                                    {index}
                                  </Typography>
                                </Stack>
                              ))
                            ) : (
                              <Stack>
                                <Typography>
                                  Не удалось загрузить макет зала
                                </Typography>
                              </Stack>
                            )}
                          </Stack>
                        </TransformComponent>
                      </TransformWrapper>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                      <Stack flexGrow={1}>
                        <Typography variant="caption">
                          Вы оплачиваете билет с аккаунта:
                        </Typography>
                        <Stack gap={1} direction="row" alignItems="center">
                          <Avatar src={user?.details.avatarUrl} />
                          <Typography>
                            {user.name} {user.surname}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack>
                        <Button>Оплатить</Button>
                      </Stack>
                    </Stack>
                  </Stack>
                ) : (
                  <Stack minHeight="256px" justifyContent="center">
                    <Typography align="center">
                      Для покупки билета необходимо войти в аккаунт
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default SessionTime;
