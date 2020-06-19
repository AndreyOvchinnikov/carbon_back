import React from 'react';
import * as axios from 'axios';
import style from './StickerList.module.css'
import StickerList from "./StickerList";
import loader from '../../../../../../images/loader.gif';
class StickerListAPIComponent extends React.Component {

    componentDidMount() {
        axios.get('/api/stickers')
            .then((response) => {
                this.props.setStickers(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <div className={style.loader_container}><img src={loader}/></div> : null }
            <StickerList stickers={this.props.stickers}/>
        </>
    }
}

export default StickerListAPIComponent;
