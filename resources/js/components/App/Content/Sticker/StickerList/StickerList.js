import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './StickerList.module.css'

let StickerList = (props) => {
    return props.stickers.map(s =>
        <NavLink className={style.link_sticker} key={s.id}
                 activeClassName={style.active_link_sticker}
                 to={`/stickers/${s.link}`}> {s.name}
        </NavLink>
    );
};

export default StickerList;
