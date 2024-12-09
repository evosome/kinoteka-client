
import { FC } from "react";
import { Outlet } from "react-router";
import { OutletContainer } from "./styles";

const ReactRouterOutlet: FC<{}> = () => {
    return (
        <OutletContainer>
            <Outlet/>
        </OutletContainer>
    )
}

export default ReactRouterOutlet;
