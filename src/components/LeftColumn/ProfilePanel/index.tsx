import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D35AQH6Lnku_FoaTQ/profile-framedphoto-shrink_400_400/0/1597350426883?e=1610298000&v=beta&t=MStHb6OZjn2o46Nu0uF2A_Bzj59TO_AsnvIRsGEmolA"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Lucas Coelho</h1>
        <h2>Software Developer @ lucascooelho</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.234</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">321</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
