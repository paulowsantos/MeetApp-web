export function changeMeet() {
  return {
    type: '@meet/CHANGE_MEET',
  };
}

export function changePage(data) {
  return {
    type: '@meet/CHANGE_PAGE',
    payload: { data },
  };
}

export function saveBanner(data) {
  return {
    type: '@meet/SAVE_BANNER',
    payload: { data },
  };
}
