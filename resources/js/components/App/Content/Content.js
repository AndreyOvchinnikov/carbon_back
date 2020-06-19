import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import StickerWindow from "./Sticker/StickerWindow";
import SnippetWindow from "./Snippet/SnippetWindow";
import CommunityWindow from "./Community/CommunityWindow";
import HomeWindow from "./Home/HomeWindow";
import style from "./Content.module.css";


class Content extends Component {
    render() {
        return (
            <div className={style.window_content}>
                <Switch>
                {/*<Route exact path='/' render={() => <HomeWindow/>}/>*/}
                {/*<Route path='/snippets' render={() => <SnippetWindow />}/>*/}
                    <Route path='/stickers' ><StickerWindow/></Route>
                    <Route path='/stickers/:slug' ><StickerWindow/></Route>
                {/*<Route exact path='/community' render={() => <CommunityWindow/>}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Content;


