import { Navigation } from "../components/navigation";
import { FC } from "react";
import { Outlet } from "react-router";
import { OutletContainer } from "./styles";
import ScrollToAnchor from "./ScrollToAnchor";

const MainLayout: FC<{}> = () => {
  return (
    <>
      <ScrollToAnchor />
      <Navigation />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
};

export default MainLayout;
