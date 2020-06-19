export const STICKER_LIST_DELETE_STICKERS = 'STICKER_LIST_DELETE_STICKERS';
export const STICKER_LIST_GET_STICKERS = 'STICKER_LIST_GET_STICKERS';
export const SET_STICKERS = 'SET_STICKERS';

export const stickerListDeleteStickersActionCreator = (id) => ({type: STICKER_LIST_DELETE_STICKERS , id});
export const setStickersAC = (stickers) => ({type: SET_STICKERS, stickers});


let stickerListDeleteStickers = (state, id) => {
    (async () => {
        await axios.delete('/api/sticker/' + id)
            .then((res) => {
                let stickers = state.stickers;
                stickers = stickers.filter(
                    sticker => parseInt(sticker.id) !== parseInt(id)
                );
            })
            .catch((error) => {
                console.log(error)
            });
    })();
};



let stickerState = {
    stickers: [],
    isFetching: true
};

const stickerReducer = (state = stickerState, action) => {

    switch (action.type) {

        case SET_STICKERS:
            return { ...state, stickers: [ ...action.stickers]};
        case STICKER_LIST_DELETE_STICKERS:
            stickerListDeleteStickers(state, action.id);
            break;
        case STICKER_LIST_GET_STICKERS:
        default:
            return state;
    }
};

export default stickerReducer;
