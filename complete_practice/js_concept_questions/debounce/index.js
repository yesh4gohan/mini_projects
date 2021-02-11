const searchBar = document.getElementById('search');
const listContainer = document.getElementById('list');
const normal_div = document.getElementById('normal_count');
const debounce_div = document.getElementById('debounce_count');

let normal_count = 0;
let debounce_count = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    searchBar.focus();
});

const makeAPICall = async key => {
    const res_raw = await fetch(`https://demo.dataverse.org/api/search?q=${key}`)
    const res = await res_raw.json();
    populateDOM(res.data.items);
}

const debounce = (cb, delay) => {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(async () => {
            const searchKey = searchBar.value;
            await cb.apply(context, [...args, searchKey])
            debounce_count++;
            debounce_div.innerHTML = debounce_count;
        }, delay);
    }
}
const deBouncer = debounce(makeAPICall, 1000);
searchBar.addEventListener('keyup', () => {
    normal_count++;
    normal_div.innerHTML = normal_count;
    deBouncer();
})

const populateDOM = data => {
    let listStr = ''
    Array.isArray(data) &&
        data.length &&
        data.map(each => {
            listStr += `<li>${each.name}</li>`
        })
    listContainer.innerHTML = listStr;
}

