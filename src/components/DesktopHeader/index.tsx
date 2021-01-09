import React from "react";

import {
  Container,
  Wrapper,
  LinkedinIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from "./styles";

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Search" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Home</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notifications</span>
            </button>
            <button>
              <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D35AQH6Lnku_FoaTQ/profile-framedphoto-shrink_400_400/0/1597350426883?e=1610298000&v=beta&t=MStHb6OZjn2o46Nu0uF2A_Bzj59TO_AsnvIRsGEmolA" />
              <span>
                Me <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
