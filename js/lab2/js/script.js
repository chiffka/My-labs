alert('Начать?');

var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i]= prompt('Введите имя');
}

console.log (arr);

var name = prompt('Введите имя пользователя');

for (var i = 0; i < arr.length; i++) {
  if (arr[i] == '') {
    alert('Пустой массив');
    break;
  }
  if (arr[i] == name) {
    console.log(name + ', вы успешно вошли');
    break;
  } else if ((i == arr.length - 1) && (arr[i] != name)) {
    alert('Ошибка');
  }
}
