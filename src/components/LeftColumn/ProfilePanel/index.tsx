import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars1.githubusercontent.com/u/14133479?s=460&u=0c97a641297da52ef753cfbff3b7ff474ab66fab&v=4"
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
