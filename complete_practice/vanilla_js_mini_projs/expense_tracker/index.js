const expense_amt = document.getElementById('expense_amt');
const expense_text = document.getElementById('expense_text');
const submit_button = document.getElementById('submit_button');
document.addEventListener('DOMContentLoaded',()=>{
    //logicc to fetch expenses
})

const validateDetails = (title,amt) => {
    return !!title && !!amt && title !== "" && amt !== "" && !isNaN(amt)
}
const mockAPIPostCall = async payload => {
    const expenseData = JSON.parse(localStorage.getItem(expenseData)) || {};
    expenseData[payload.id] = payload;
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            localStorage.setItem(JSON.stringify(expenseData));
            resolve(expenseData)
        }, 1000);
    })
}
const addExpense = async payload => {
    const data = await mockAPIPostCall(payload)
    return data;
}

const modifyUI = data => {
    const 
}
submit_button.addEventListener('click',async e=>{
    const title = expense_amt.value;
    const amt = expense_text.value;
    if(validateDetails(title,amt)){
        const payload = {
            title,
            amt,
            id:`id_${Math.floor(Math.random()*100000)}`
        }
        await addExpense(payload);
        modifyUI(payload);
    }
    else {
        alert('please enter correct values')
    }
})

