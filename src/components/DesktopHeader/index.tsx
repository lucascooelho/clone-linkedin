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
              <ProfileCircle src="https://avatars1.githubusercontent.com/u/14133479?s=460&u=0c97a641297da52ef753cfbff3b7ff474ab66fab&v=4" />
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
