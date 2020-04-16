// 1. створити три map-а у першому {'виробник':'назва продукту'}, у другому {'вартість':'виробник'}, у третьому {'час доставки':'виробник'}
// 2. вивести в об'єкт товар із найменшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}
// 3. вивести в об'єкт товар із найменшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}
// 4. вивести в об'єкт товар із найбільшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}
// 5. вивести в об'єкт товар із найбільшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}

// Товари мають повторюватись

var map1 = new Map();
var map2 = new Map();
var map3 = new Map();


var arrFirm = [];
var arrGoods = [];
var arrPrice = [];
var arrTime = [];


var obj_1 = new Object();
var obj_2 = new Object();
var obj_3 = new Object();
var obj_4 = new Object();


map1.set('Valve', 'dota2');
map1.set('Bugbear', 'Unbounded');
map1.set('Wargaming', 'word_of_tanks');
map1.set('Hidden_Path', 'csgo');

map2.set(000, 'Valve');
map2.set(450, 'Bugbear');
map2.set(300, 'Wargaming');
map2.set(200, 'Hidden_Path');

map3.set(2, 'Valve');
map3.set(4, 'Bugbear');
map3.set(9, 'Wargaming');
map3.set(3, 'Hidden_Path');

map1.forEach((value, key) => {
  arrGoods.push(value);
  arrFirm.push(key);
});

map2.forEach((value,key) => {
  arrPrice.push(key)
});

map3.forEach((value,key) => {
  arrTime.push(key)
});

function max(myArray) {
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
function min(myArray) {
  var index = 0;
  var min = myArray[0];
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i] < min) {
      min = myArray[i];
      index = i;}
    
  }
  return index;
}
var min1 = min(arrPrice);
var min2 = min(arrTime);
var max1 = max(arrPrice);
var max2 = max(arrTime);

obj_1[arrGoods[min1]] = `Цена:${arrPrice[min1]}, Производитель: ${arrFirm[min1]}, Время доставки: ${arrTime[min1]}`;
obj_2[arrGoods[min2]] = `Цена:${arrPrice[min2]}, Производитель: ${arrFirm[min2]}, Время доставки: ${arrTime[min2]}`;
obj_3[arrGoods[max1]] = `Цена:${arrPrice[max1]}, Производитель:${arrFirm[max1]}, Время доставки: ${arrTime[max1]}`;
obj_4[arrGoods[max2]] = `Цена:${arrPrice[max2]}, Производитель: ${arrFirm[max2]}, Время доставки: ${arrTime[max2]}`;

console.log(obj_1);
console.log(obj_2);
console.log(obj_3);
console.log(obj_4);

