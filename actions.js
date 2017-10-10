import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMN_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const addComment = (text) => ({
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
});

const editComment = (text, id) => ({
        type: EDIT_COMMENT,
        text,
        id
});

const removeComment = (id) => ({
        type: REMOVE_COMMENT,
        id
});

const deleteComment = (id) => ({
        type: REMOVE_COMMENT,
        id
});

const thumbUpComment = (id) => ({
        type: THUMB_UP_COMMENT,
        id
});

const thumbDownComment = (id) => ({
        type: THUMN_DOWN_COMMENT,
        id
});
