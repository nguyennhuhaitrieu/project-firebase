import * as types from './../constants/ActionType';

export const actChangeNotify = (style,title, content) => {
    return {
        type: types.CHANGE_NOTIFY,
        style, title, content
    }
}

export const actHideNotify = () => {
    return {
        type: types.HIDE_NOTIFY,
    }
}