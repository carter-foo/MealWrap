import { atom, selector } from 'recoil';
import lodash from 'lodash';

export const shoppingCartArr = atom({
    key: 'sc', // unique ID (with respect to other atoms/selectors)
    default: [
        {
            merchantName: 'Cactus Club Cafe',
            items: [
                {
                    name: 'lalalaDddddd',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
            ],
        },
        {
            merchantName: 'Cactus Club Cafe',
            items: [
                {
                    name: 'lalalaDddddd',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
            ],
        },
        {
            merchantName: 'Cactus Club Cafe',
            items: [
                {
                    name: 'lalalaDddddd',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
            ],
        },
        {
            merchantName: 'Cactus Club Cafe',
            items: [
                {
                    name: 'lalalaDddddd',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
                {
                    name: 'lalala',
                    price: '10.69',
                    amount: 1,
                },
            ],
        },
    ], // default value (aka initial value)
});

export const scItemAmountChanging = selector({
    key: 'scItemModifing',
    get: ({ get }) => get(shoppingCartArr),
    set: ({ get, set }, { iIndex, mIndex, newAmount }) => {
        // let items = (get(shoppingCartArr)[mIndex].items);
        // console.log("items:",items);
        let newSC = lodash.cloneDeep(get(shoppingCartArr));
        // let newSC = [...get(shoppingCartArr)];
        console.log(iIndex,mIndex);
        let items = newSC[mIndex].items;
        newAmount === 0 ? items.splice(iIndex,1) : items[iIndex].amount = newAmount ;
        items.length === 0 && newSC.splice(mIndex,1);
        set(shoppingCartArr, newSC);
    },
});
