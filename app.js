let select = document.querySelectorAll(".currency")

console.log(select);

fetch('http://api.frankfurter.app/currencies')
    .then((response) => response.json())
    .then((result) => displayDropDown(result))


function displayDropDown(result) {

    let currencies = Object.entries(result)

    for (let i = 0; i < currencies.length; i++) {
        let option = `<option value="${currencies[i][0]}"> ${currencies[i][0]}</option>`

        select[0].innerHTML += option
        select[1].innerHTML += option
    }
}

let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let cur1 = select[0].value
    let cur2 = select[1].value
    // let money = document.getRootNode('input').value
    let money = input.value

    if (cur1 == cur2) {
        alert("Choose different currency as they are same.")
    } else {
        convert(cur1, cur2, money)
    }
})


function convert(cur1, cur2, money) {
    const host = 'api.frankfurter.app'
    fetch(`https://${host}/latest?amount=${money}&from=${cur1}&to=${cur2}`)
        .then(resp => resp.json())
        .then((data) => {
            document.getElementById('result').value = Object.values(data.rates)[0]
        });
}