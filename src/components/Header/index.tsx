import { NavLink } from "react-router-dom";

import { Timer, Scroll } from "phosphor-react";

import { HeaderContainer, LogoContainer } from "./styles";

import logoIgnite from "../../assets/logo-ignite.svg";

export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img src={logoIgnite} alt="" />
                <span>By Lucas Bercê de Jesus</span>
            </LogoContainer>

            <nav>
                <NavLink to="/" end title="Timer">
                    <Timer size={24} />
                </NavLink>

                <NavLink to="/history" end title="Histórico">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}