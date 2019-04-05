import React from 'react';
import GameRow from '../game-row/GameRow';
import {TGameList} from '../game.type';

import style from './game-list.module.scss';

const GameList: React.SFC<TGameList> = ({data}) => (
    <div className={style.gameList}>
        {data.map(game => <GameRow {...game}/>)}
    </div>
);

export default GameList;