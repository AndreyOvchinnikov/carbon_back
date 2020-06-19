import React from 'react';
import StickerList from "./StickerList";
import {connect} from 'react-redux';
import {setStickersAC, stickerListGetStickersActionCreator} from "../../../../../redux/stickerReducer";
import StickerListAPIComponent from "./StickerListAPIComponent";



let mapStateToProps  = (state) => {
    return {
        stickers : state.stickerPage.stickers,
        isFetching: state.stickerPage.isFetching
    }
};

let mapDispatchToProps  = (dispatch) => {
    return {
        setStickers : (stickers) => dispatch(setStickersAC(stickers)),
        setStickerLink : (sticker) => dispatch(setStickerLinkAC(sticker)),
    }
};

export default  connect(mapStateToProps, mapDispatchToProps)(StickerListAPIComponent);
