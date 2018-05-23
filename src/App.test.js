import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('update player score', () => {
  const app = shallow(<App />),
    players = [
      {
        name: 'Kunegunda',
        score: 5
      },
      {
        name: 'Antoś',
        score: 0
      }
    ],
    onScoreUpdate = app.find('PlayersList').prop('onScoreUpdate');
  app.setState({ players });
  onScoreUpdate(0, 5);
  const playersAfterUpdate = app.state().players;
  expect(playersAfterUpdate[0].score).toEqual(10);
});

it('add player', () => {
  const app = shallow(<App />),
    onPlayerAdd = app.find('AddPlayer').prop('onPlayerAdd');
  onPlayerAdd('Ania');
  const players = app.state('players');
  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});

it('delete player', () => {
  const app = shallow(<App />),
    players = [
      {
        name: 'Kunegunda',
        score: 5
      },
      {
        name: 'Antoś',
        score: 0
      }
    ],
    onPlayerDelete = app.find('PlayersList').prop('onDelete');
  app.setState({ players });
  onPlayerDelete(0);
  const playersAfterUpdate = app.state('players');
  expect(playersAfterUpdate.length).toEqual(1);
  expect(playersAfterUpdate[0].name).toEqual('Antoś');
  expect(playersAfterUpdate[0].score).toEqual(0);
});
