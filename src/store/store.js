import { atom,selector } from 'recoil';
// , selectorFamily
// import lodash from 'lodash';
// import axios from 'axios';
// import { loginInfo } from './loginStore';

export const shoppingCartArr = atom({
    key: 'shoppingCart', // unique ID (with respect to other atoms/selectors)
    default: []
});

export const userAddress = atom({
    key: 'userAddr',
    default: selector({
        key:'userAddre',
        get: () => sessionStorage.getItem('userAddress') || '' 
    })
})

/* selector({
        key: 'loginInfoSetDefault',
        get: () =>
            sessionStorage.getItem('userInfos')
                ? JSON.parse(sessionStorage.getItem('userInfos'))
                : {},
    }), */

/* default: selector({
        key: 'loginInfoSetDefault',
        get: () => sessionStorage.getItem('userInfos') ? JSON.parse(sessionStorage.getItem('userInfos')) : {}
    }), */

// export const scItemAmountChanging = selectorFamily({
//     key: 'scItemModifing',
//     // scArr[mIndex].items[iIndex].amount;
//     get:
//         ({ itemId, mId }) =>
//         ({ get }) =>{
//             // get(shoppingCartArr)[mIndex].items[iIndex].amount;
//             const scArr = get(shoppingCartArr);
//             let merchant;
//             for (let i = 0; i < scArr.length; i++) {
//                 if(scArr[i][0].merchantId === mId){
//                     merchant = scArr[i];
//                     break;
//                 }               
//             }
//             for (let i = 0; i < merchant.length; i++) {
//                 const item = merchant[i];
//                 if(item.id === itemId){
//                     return item.quantity;
//                 }
//             }
//         },
//     set:
//         ({ itemId, mId }) =>
//         ({ get, set }, actionType) => {
//             let scArr = lodash.cloneDeep(get(shoppingCartArr));
//             let itemNeedModify;
//             for (let i = 0,merchant; i < scArr.length; i++) {
//                 if(scArr[i][0].merchantId === mId){
//                     merchant = scArr[i];
//                     for (let i = 0; i < merchant.length; i++) {
//                         const item = merchant[i];
//                         if(item.id === itemId){
//                             itemNeedModify = item;
//                         }
//                     }
//                 }               
//             }
            
//             switch (actionType) {
//                 case 'addOne':
//                     const oriSC = lodash.cloneDeep(get(shoppingCartArr));
//                     itemNeedModify.quantity += 1;
//                     axios.post('/api/v1/shoppingcart/update',{
//                         userId:get(loginInfo).id,
//                         productId: itemNeedModify.id,
//                         quantity: itemNeedModify.quantity
//                     }).then(res => {
//                         console.log("addOne",res.data);
//                         // console.log(typeof res.data.code);
//                         try {
//                             if(res.data.code === 400){
//                                 set(shoppingCartArr, oriSC);
//                                 throw new Error("Add quantity failed");
//                             }
//                         } catch (error) {
//                             console.error(error);
//                         }
                        
//                     }).catch(err => {
//                         console.error(err);
                        
//                     })
//                     set(shoppingCartArr, scArr);
//                     break;
//                 case 'minusOne':
                    
//                     break;
            
//                 default:
//                     break;
//             }
//             // console.log(iIndex,mIndex);
//             // let items = newSC[mIndex].items;
//             // newAmount === 0
//             //     ? items.splice(iIndex, 1)
//             //     : (items[iIndex].amount = newAmount);
//             // items.length === 0 && newSC.splice(mIndex, 1);
//             // set(shoppingCartArr, newSC);
//         },
// });
