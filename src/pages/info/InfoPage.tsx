import {
  Alert,
  Button,
  List,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { TextImage } from "./styles";
import { Link } from "@app/components/common/link";
import { Bookmark } from "@mui/icons-material";

const PageInfo: FC<{}> = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h5">Справочник</Typography>
      <Stack>
        <Typography variant="h6">Оглавление</Typography>
        <List>
          <Link forwardTo="/info" withHash="#main-page" withDecoration>
            <Stack gap={1} direction="row" alignItems="center">
              <Bookmark /> Главная страница
            </Stack>
          </Link>
          <Link forwardTo="/info" withHash="#auth" withDecoration>
            <Stack gap={1} direction="row" alignItems="center">
              <Bookmark /> Вход в личный кабинет
            </Stack>
          </Link>
          <Link forwardTo="/info" withHash="#movies" withDecoration>
            <Stack gap={1} direction="row" alignItems="center">
              <Bookmark /> Список фильмов
            </Stack>
          </Link>
          <Link forwardTo="/info" withHash="#sessions" withDecoration>
            <Stack gap={1} direction="row" alignItems="center">
              <Bookmark /> Список сеансов
            </Stack>
          </Link>
        </List>
      </Stack>
      <Stack component="div" id="main-page">
        <Typography variant="h6">Главная страница</Typography>
        <Stack gap={2} direction="row">
          <TextImage src="http://77.246.158.84:9000/images/main.png" />
          <Typography>
            Главная страница платформы доступна, как гостям, так и
            авторизованным пользователям. Здесь пользователь может
            авторизоваться, если требуется, а также перейти по наиболее важным
            вкладкам "Фильмы" и "Сеансы".
          </Typography>
        </Stack>
      </Stack>
      <Stack component="div" id="auth">
        <Typography variant="h6">Вход в личный кабинет</Typography>
        <Stack gap={2}>
          <Stack>
            <Typography>
              Пользователь может войти в свой аккаунт или создать новый при
              нажатии на кнопку "Войти" в панели навигации. При нажатии на
              кнопку перед пользователем откроется модальное окно с двумя
              вкладками "Регистрация" и "Войти" Во вкладке регистрации
              пользователю потребуется ввести свое имя, фамилию, логин и пароль.
              Во вкладке входа пользователю потребуется ввести только логин
              пароль для входа.
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" justifyContent="center">
            <TextImage src="http://77.246.158.84:9000/images/register.png" />
            <TextImage src="http://77.246.158.84:9000/images/authed.png" />
          </Stack>
          <Stack>
            <Typography>
              Чтобы перейти в личный кабинет пользователя, следует нажать на
              аватар пользователя, появившегося на месте кнопки "Войти".
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" justifyContent="center">
            <TextImage src="http://77.246.158.84:9000/images/profile.png" />
          </Stack>
          <Stack>
            <Typography>
              Здесь пользователь может увидеть свою личную информацию, а также
              редактировать ее, изменив значение полей. Также пользователь может
              просмотреть список купленных билетов.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack component="div" id="movies">
        <Typography variant="h6">Список фильмов</Typography>
        <Stack gap={2}>
          <Stack>
            <Typography>
              Помимо секции авторизации в навигационной панели также есть секция
              полезных ссылок, включающая: список фильмов, список сеансов,
              информация о разработчиках, справочник. Нажав на ссылку со списком
              фильмов, пользователь перейдет на страницу фильмов. Здесь
              пользователь может видет список текущих фильмов в прокате, и
              список будущих фильмов, которые выйдут совсем скоро.
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" justifyContent="center">
            <TextImage src="http://77.246.158.84:9000/images/movies.png" />
            <TextImage src="http://77.246.158.84:9000/images/movies-soon.png" />
          </Stack>
          <Stack>
            <Typography>
              А также при нажатии на обложку фильма, пользователь может видеть
              подробную информацию о фильме. Здесь пользователь может оставить
              комментарий о фильме и обслуживании в кинотеатре.
            </Typography>
            <Alert severity="warning">
              Стоит отметить, что писать и удалять комментарии могут только
              авторизованные пользователи.
            </Alert>
          </Stack>
          <Stack gap={2} direction="row" justifyContent="center">
            <TextImage src="http://77.246.158.84:9000/images/movie-details.png" />
          </Stack>
          <Typography>
            При желании пользователь может также удалить свой комментарий Нажав
            на соответствующую иконку "мусорной корзины".
          </Typography>
          <Stack>
            <Typography>
              Помимо написания своего собственного комментария, пользователь
              может просмотреть список комментариев, оставленных другими
              пользователями.
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" justifyContent="center">
            <TextImage src="http://77.246.158.84:9000/images/movie-details.png" />
          </Stack>
        </Stack>
      </Stack>
      <Stack component="div" id="sessions">
        <Typography variant="h6">Список сеансов</Typography>
        <Stack gap={2}>
          <Stack>
            <Typography>
              Нажав на вкладку "Сеансы" в навигационном меню, пользователь
              перейдет на страницу сеансов. Здесь пользователь может просмотреть
              список текущих сеансов в кинотеатре и выбрать понравившийся.
            </Typography>
          </Stack>
          <Stack>
            <Typography>
              Для оформления билета на понравившийся сеанс пользователь должен
              нажать на блок сеанса, в котором указаны все необходимые сведения
              о сеансе: время, зал и стартовая цена.
            </Typography>
          </Stack>
          <Stack>
            <Typography>
              После нажатия на блок сеанса, перед пользователем откроется
              модальное окно выбора мест и оформления билетов.
            </Typography>
            <Alert severity="warning">
              Стоит отметить, что выбирать места и оформлять билеты могут только
              авторизованные пользователи.
            </Alert>
          </Stack>
          <Stack>
            <Typography>
              Здесь пользователь может выбрать наиболее удобные для него места,
              если таковые доступны. А также, пользователь может ознакомиться с
              типами мест в легенде мест.
            </Typography>
          </Stack>
          <Stack>
            <Typography>
              После успешного приобретения билета перед пользователем
              откроется диалоговое окно, предлагающее перейти к списку сеансов
              или перейти в личный кабинет для просмотра купленного билета
              в списке билетов.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PageInfo;
