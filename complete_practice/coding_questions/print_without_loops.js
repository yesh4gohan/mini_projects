// const print = () => {
//     let counter = 1;
//     const scheduler = setInterval(() => {
//         if(counter === 6){
//             clearInterval(scheduler)
//         }
//         else {
//             console.log(counter)
//         }
//         counter++;

//     }, 0);
// }
function print1(n){
    let c=0;
    const print = function(){
        if(c===n){
            return;
        }
        console.log(c++)
        print();
    }
    print()
}

print1(10)


