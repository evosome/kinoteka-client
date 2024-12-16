import { Navigation } from "../components/navigation";
import { FC } from "react";
import { Outlet } from "react-router";
import { OutletContainer } from "./styles";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";

const MainLayout: FC<{}> = () => {
  return (
    <>
      <Navigation />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
};

export default MainLayout;
