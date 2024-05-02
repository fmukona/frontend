const CONSTANTS = {
  cookieKey: 'faraisflowers.auth',
}

const isAuthed = () => {
  const cookiePattern = new RegExp('(?:^|;\\s*)' + cookieName + '=([^;]*)');
  const matched = document.cookie.match(cookiePattern);
  return matched ? true : false;
}

console.log("isAuthed", isAuthed());
