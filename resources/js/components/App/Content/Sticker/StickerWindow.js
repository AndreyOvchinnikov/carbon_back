import React, {Component} from 'react';
import style from  "./StickerWindow.module.css";
import StickerListContainer from "./StickerList/StickerListContainer";

class StickerWindow extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={style.sticker_content}>
                <StickerListContainer/>
            </div>
        );

    }
}


export default StickerWindow;



