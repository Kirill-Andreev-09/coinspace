export const APP_ID = 7983359;
export const GROUP_ID = 192779261; // дурка
export const NAME_PROJECT = "Coinspace";
export const NAME_PROJECT_LOWER_CASE = "COINSPACE";
export const APP_AVATAR = "";
// ждем ссылку на картинку для шаринга в историю
export const APP_IMG_SHARING = "";
// ждем ссылку на картинку для шаринга на стену
export const APP_IMG_SHARING_WALL = "";
// публичный ключ от киви
export const QIWI_PUBLIC_KEY = "";
// получение ID пользователя который зашел в приложение
export const USER_ID = Number(
  new URLSearchParams(document.location.search).get("vk_user_id")
);
export const routeUrl =
  process.env.NODE_ENV === "production" ? "/coinspace" : "";

export const vkValidationParams = globalThis.location.search;
