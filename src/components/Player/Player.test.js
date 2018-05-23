import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania',
    playerComponent = shallow(<Player name={playerNamePassed} />),
    playerNameRendered = playerComponent.find('.Player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const scorePassed = 69,
    playerComponent = shallow(<Player score={scorePassed} />),
    playerScoreRendered = Number(playerComponent.find('.Player__score').text());

  expect(playerScoreRendered).toEqual(scorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn(),
    playerComponent = shallow(
      <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
    ),
    plusButton = playerComponent.find('.Player__button').first();

  plusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn(),
    playerComponent = shallow(
      <Player onPlayerScoreChange={mockedOnPlayerScoreChange} />
    ),
    plusButton = playerComponent.find('.Player__button').at(1);

  plusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call onPlayerDelete when minus button is clicked', () => {
  const mockedOnPlayerDelete = jest.fn(),
    playerComponent = shallow(<Player onPlayerDelete={mockedOnPlayerDelete} />),
    deleteButton = playerComponent.find('.Player__button').at(2);

  deleteButton.simulate('click');

  expect(mockedOnPlayerDelete).toBeCalledWith();
});
