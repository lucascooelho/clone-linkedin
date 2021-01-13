import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Most discussed subjects</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Twitter-Clone from Lucascooelho</span>
              <span className="subtext">1d ago • 316 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Twitch-Clone from Lucascooelho</span>
              <span className="subtext">1d ago • 316 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Pinterest-Clone from Lucascooelho</span>
              <span className="subtext">1d ago • 316 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Discord-Clone from Lucascooelho</span>
              <span className="subtext">1d ago • 316 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Twitter-Clone from Lucascooelho</span>
              <span className="subtext">1d ago • 316 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Twitch-Clone from Lucascooelho</span>
              <span className="subtext">1d ago • 316 readers</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
