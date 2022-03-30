import { atom, selector } from 'recoil';

export const loginInfo = atom({
    key: 'login',
    default: selector({
        key: 'loginInfoSetDefault',
        get: () =>
            sessionStorage.getItem('userInfos')
                ? JSON.parse(sessionStorage.getItem('userInfos'))
                : {},
    }),
});
