import { atom, selectorFamily } from 'recoil';
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
        // {
        //     merchantName: 'Cactus Club Cafe',
        //     items: [
        //         {
        //             name: 'lalalaDddddd',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //     ],
        // },
        // {
        //     merchantName: 'Cactus Club Cafe',
        //     items: [
        //         {
        //             name: 'lalalaDddddd',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //     ],
        // },
        // {
        //     merchantName: 'Cactus Club Cafe',
        //     items: [
        //         {
        //             name: 'lalalaDddddd',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //         {
        //             name: 'lalala',
        //             price: '10.69',
        //             amount: 1,
        //         },
        //     ],
        // },
    ], // default value (aka initial value)
});

export const scItemAmountChanging = selectorFamily({
    key: 'scItemModifing',
    // scArr[mIndex].items[iIndex].amount;
    get: ({iIndex,mIndex}) => ({ get }) => get(shoppingCartArr)[mIndex].items[iIndex].amount,
    set: ({iIndex, mIndex}) => ({ get, set }, newAmount) => {
        let newSC = lodash.cloneDeep(get(shoppingCartArr));
        // console.log(iIndex,mIndex);
        let items = newSC[mIndex].items;
        newAmount === 0 ? items.splice(iIndex,1) : items[iIndex].amount = newAmount ;
        items.length === 0 && newSC.splice(mIndex,1);
        set(shoppingCartArr, newSC);
    },
});
