// 1. створити три map-а у першому {'виробник':'назва продукту'}, у другому {'вартість':'виробник'}, у третьому {'час доставки':'виробник'}
// 2. вивести в об'єкт товар із найменшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}
// 3. вивести в об'єкт товар із найменшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}
// 4. вивести в об'єкт товар із найбільшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}
// 5. вивести в об'єкт товар із найбільшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}

// Товари мають повторюватись

var map_a = new Map();
var map_b = new Map();
var map_c = new Map();
var arrfirm = [];
var arrgoods = [];
var arrprice = [];
var arrtime = [];
var obj_1 = new Object();
var obj_2 = new Object();
var obj_3 = new Object();
var obj_4 = new Object();
map_a.set('f1', 'tovar');
map_a.set('f2', 'tovar2');
map_a.set('f3', 'tovar');
map_a.set('f4', 'tovar2');

map_b.set(11, 'f1');
map_b.set(111, 'f2');
map_b.set(1111, 'f3');
map_b.set(1, 'f4');

map_c.set(2, 'f1');
map_c.set(22222, 'f2');
map_c.set(222, 'f3');
map_c.set(22, 'f4');

map_a.forEach((value, key) => {
  arrgoods.push(value);
  arrfirm.push(key);
});

map_b.forEach((value,key) => {
  arrprice.push(key)
});

map_c.forEach((value,key) => {
  arrtime.push(key)
});

function maxElement(myArray) {
  var index = 0;
  var min = myArray[0];
  var max = min;
  for (i = 0; i < myArray.length; ++i) {
    if (myArray[i] > max) {
      max = myArray[i];
      index = i;
    }  
  }
  return index;
}
function minElement(myArray) {
  var index = 0;
  var min = myArray[0];
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i] < min) {
      min = myArray[i];
      index = i;}
    
  }
  return index;
}
var min1 = minElement(arrprice);
var min2 = minElement(arrtime);
var max1 = maxElement(arrprice);
var max2 = maxElement(arrtime);

obj_1[arrgoods[min1]] = `${arrprice[min1]}, ${arrfirm[min1]}, ${arrtime[min1]}`;
obj_2[arrgoods[min2]] = `${arrprice[min2]}, ${arrfirm[min2]}, ${arrtime[min2]}`;
obj_3[arrgoods[max1]] = `${arrprice[max1]} ${arrfirm[max1]} ${arrtime[max1]}`;
obj_4[arrgoods[max2]] = `${arrprice[max2]} ${arrfirm[max2]} ${arrtime[max2]}`;
console.log(obj_1);
console.log(obj_2);
console.log(obj_3);
console.log(obj_4);

