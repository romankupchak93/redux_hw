import actions from './types';

export const add = name => ({
    type: actions.SAVE_USER_NAME,
    payload: name
});

export const remove = () => ({
    type: actions.REMOVE_USER_NAME,
    payload: ''
});
