import { API_ROUTES } from "@app/routes";
import { useFetch } from "./reactQuery";
import {
  createMap,
  createMapper,
  forMember,
  mapFrom,
  mapWith,
} from "@automapper/core";
import { pojos } from "@automapper/pojos";
import { User, UserDetails } from "@app/types/user";
import { useMemo, useState } from "react";
import { api } from "./axios";

export interface UserDto {
  userId: number;
  name: string;
  surName: string;
  email: string;
  username: string;
  telephoneNumber: string;
  userImage?: string | undefined;
}

const MAPPER = createMapper({
  strategyInitializer: pojos(),
});

createMap<UserDto, User>(
  MAPPER,
  "UserDto",
  "User",
  forMember(
    (destination) => destination.details,
    mapFrom((source) => ({
      login: source.username,
      telephoneNumber: source.telephoneNumber,
      avatarUrl: source.userImage,
    }))
  ),
  forMember(
    (destination) => destination.id,
    mapFrom((source) => source.userId)
  ),
  forMember(
    (destination) => destination.name,
    mapFrom((source) => source.name)
  ),
  forMember(
    (destination) => destination.surname,
    mapFrom((source) => source.surName)
  )
);

export const useGetMe = () => {
  const { data, isLoading } = useFetch<UserDto>(
    `${API_ROUTES.users}/me`,
    {},
    {
      retry: false,
    }
  );

  const user = useMemo(
    () =>
      !isLoading
        ? MAPPER.map<UserDto, User>(data!, "UserDto", "User")
        : undefined,
    [data, isLoading]
  );

  return { isLoading, user };
};

export const useLogin = () => {
  const [status, setStatus] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<User | undefined>(undefined);

  return {
    data,
    status,
    isError,
    doLogin: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      api
        .post<UserDto>(API_ROUTES.login, formData)
        .catch(() => {
          setIsError(true);
        })
        .then((responce) => {
          if (responce) {
            setData(MAPPER.map(responce.data, "UserDto", "User"));
            setStatus(responce.status === 204);
          }
        });
    },
  };
};

export const useLogout = () => {
  const [status, setStatus] = useState<boolean>(false);

  return {
    status,
    doLogout: () => {
      api
        .get<UserDto>(API_ROUTES.logout)
        .catch((reason) => {
          setStatus(true);
        })
        .then((responce) => {
          setStatus(true);
        });
    },
  };
};

export const useRegister = () => {
  const [status, setStatus] = useState<boolean>(false);

  return {
    status,
    doRegister: ({
      username,
      password,
      name,
      surname,
    }: {
      username: string;
      password: string;
      name: string;
      surname: string;
    }) => {
      api
        .post(API_ROUTES.logout, { username, password, name, surName: surname })
        .then((responce) => {
          setStatus(true);
        });
    },
  };
};
