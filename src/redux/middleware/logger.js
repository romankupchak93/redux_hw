export const logger = (store) => (next) => (action) => {
    console.log(`тип екшина: ${action.type}`);
    console.log(`додаткові дані екшина: ${JSON.stringify(action.payload)}`);
    console.log(`стан redux сховища: ${JSON.stringify(store.getState())}`);
    return next(action);
}
