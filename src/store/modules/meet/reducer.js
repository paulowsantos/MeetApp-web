import produce from 'immer';

const INITIAL_STATE = {
  meetchanged: false,
  renderBanner: false,
  page: 1,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meet/CHANGE_MEET': {
        draft.meetchanged = !draft.meetchanged;
        break;
      }
      case '@meet/SAVE_BANNER': {
        draft.renderBanner = action.payload.data;
        break;
      }
      case '@meet/CHANGE_PAGE': {
        draft.page = action.payload.data;
        break;
      }
      default:
    }
  });
}
