let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   
   let area = length * width;
   document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let item1
let item2
let item3

function groceryTracker() {
    item1 = parseFloat(document.getElementById('item1').value);
    item2 = parseFloat(document.getElementById('item2').value);
    item3 = parseFloat(document.getElementById('item3').value);

    let totalAmount = item1 + item2 + item3;
    document.getElementById('total').innerHTML = `total amount is $${totalAmount}`; 
}


