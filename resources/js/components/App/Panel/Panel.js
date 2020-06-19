import React, {Component} from 'react';
import {NavLink, Router} from 'react-router-dom';

import style from "./Panel.module.css";

class Panel extends Component {
    render() {
        return (
            <div className={style.panel_content}>
                <div className={style.panel_links}>
                    <NavLink exact activeClassName={style.active_panel_link_item} className={style.panel_link_item}
                             to={'/'}>Home</NavLink>
                    <NavLink activeClassName={style.active_panel_link_item} className={style.panel_link_item}
                             to={'/stickers'}>Stickers</NavLink>
                    <NavLink activeClassName={style.active_panel_link_item} className={style.panel_link_item}
                             to={'/snippets'}>Snippets</NavLink>
                    <NavLink activeClassName={style.active_panel_link_item} className={style.panel_link_item}
                             to={'/community/'}>Community</NavLink>
                </div>
            </div>
        );
    }
}

export default Panel;
