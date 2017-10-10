import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMN_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

addComment((text) => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
});

editComment ((text, id) => {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    };
});

removeComment((id) => {
    return {
        type: REMOVE_COMMENT,
        id: id
    };
});

deleteComment((id) => {
    return {
        type: REMOVE_COMMENT,
        id: id
    };
});

thumbUpComment((id) => {
    return {
        type: THUMB_UP_COMMENT,
        id: id
    };
});

thumbDownComment((id) => {
    return {
        type: THUMN_DOWN_COMMENT,
        id: id
    };
});
