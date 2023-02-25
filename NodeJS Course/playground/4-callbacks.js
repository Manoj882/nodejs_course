// setTimeout(()=>{
//     console.log('Two seconds are up')
// }, 2000);

// const names = ['Manoj', 'Prem', 'Kiran', 'Man'];
// const shortNames = names.filter((personName)=> {
//     return personName.length < 4;
// });

// const geoCode = (address, callback) => {
//     setTimeout(()=>{
//         const data = {
//         latitude: 0,
//         longitude : 0,
//     };
//     // return data;
//     callback(data);
//     },2000);
    
// };

// geoCode('Philadelphia', (data) => {
//     console.log(data);
// });


const add = (a,b, callback) =>{
    setTimeout(() => {
        callback( a + b);
    }, 2000);

};


add(3,4, (sum)=>{
    console.log(sum);
});
