import React from 'react';
import logo from '../../logo.svg';
import {TGame} from '../game.type';

import style from './game-row.module.scss';

const GameRow: React.SFC<TGame> = ({title, description}) => (
    <div className={style.gameRow}>
        <div className={style.gameRowImg}>
            <img src={logo} alt=""/>
        </div>
        <div className={style.gameRowInformations}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

export default GameRow;