function starterForm() // форма задания размера таблицы
{
document.write('<div id = "formForTableSize"><form><div>Введите количество столбцов и количесвто строк в соответстующие поля</div><br>Количесвто строк <input type="number" min="1" max="100" value="" id ="getTableRows" onclick="document.getElementById(\'submitTableSize\').value = \'Построить таблицу\'"></input><br>Количество столбцов<input type="number" min="1" max="100" value="" id ="getTableColls" onclick="document.getElementById(\'submitTableSize\').value = \'Построить таблицу\'"></input><br><input type="button" onclick="getValues()" value="" id="submitTableSize"></input></form></div>');
}

function getValues() //вызывается в onclick в форме задания количества колонок и столбцов
{
  var rowsValue = document.getElementById("getTableRows").value;
  var collsValue = document.getElementById("getTableColls").value;
  document.getElementById('formForTableSize').remove();
  changeBorder();
  addHeader();
  deleteRow(rowsValue);
  randomChooser(rowsValue,collsValue);
  deleteTable();
  dising();
  document.write('<h1 align="center" id="tableHeader"></h1>');
  buidTable(rowsValue,collsValue);
}

function buidTable(rowsValue,collsValue) // вызывается в getValues для того, чтобы построить таблицы по заданным параметрам
{
  document.write('<div id="divMaintable"><table id="maintable" align="center" border ="3">');
  for (let i = 0;i<rowsValue;i++)
  {
    document.write('<tr>');
    for (let k = 0;k<collsValue;k++)
    {
      document.write('<td id="cellnum[',i,'][',k,']"><form id = "cell[',i,'][',k,']"><input type ="textarea" id="cellvalue[',i,'][',k,']"></input><input type="button" value="Сохранить" onclick ="saveValue(',i,',',k,')"></input></form></td>');
    }
    document.write('</tr>');
  }
  document.write('</table></div>');
  function saveValue(i,k) // вызывается в onclick в форме для сохранения значений в ячейках таблицы 
{
  let cellValue = document.getElementById(`cellvalue[${i}][${k}]`).value;
  document.getElementById(`cell[${i}][${k}]`).remove();
  document.getElementById(`cellnum[${i}][${k}]`).innerHTML = cellValue;
}
}

function changeBorder() // функция, которая задает форму для “Изменить границы таблицы” 
{
  document.write('<div id="functionForms"><div id ="preferencesFunction"><form id="preferences">Ширина таблицы: <input id="borderPX" type="number" min = "1" max ="999" onchange="document.getElementById(\'submitChangeBorder\').value = `Применить ${value} px и рамка ${document.getElementById(\'select\').value}`"></input>');
  let borderPX = document.getElementById('borderPX').value;

  document.write('<br>Вид рамки: <select id ="select" name="select" onchange="document.getElementById(\'submitChangeBorder\').value = `Применить ${document.getElementById(\'borderPX\').value} px и рамка ${value}`"><option value="Dotted">Dotted</option><option value="Dashed">Dashed</option><option value="Solid">Solid</option><option value="Double">Double</option><option value="Inset">Inset</option></select><br>');

  document.write('<input type="button" id ="submitChangeBorder" value="" onclick="tryChangeBorder()"></input></form></div>');
}

function tryChangeBorder() // вызывается в onclick в changeBorder() для того, чтобы применить оформления к таблице
{
  tableToChange = document.getElementById('maintable');
  tableToChange.style.border = `${document.getElementById('borderPX').value}px ${document.getElementById("select").value}`;
}

function addHeader() // функция добавляет заголовок для таблицы
{
document.write('<div id="changeHeaderFunction"><form  id="formForAddHeader">Введите заголовок: <input id="inputHeader" type="textarea" onclick="document.getElementById(\'submitheader\').value = \'Применить заголовок\'"></input>');
document.write('<br><input id="submitheader" type="button" value="" onclick="addHeaderOnPage()"></input></form></div>');
}

function addHeaderOnPage() // функция вызывается в onclick addHeader() 
{
let headerName = document.getElementById('inputHeader').value;
document.getElementById('tableHeader').innerHTML = headerName;
}

function deleteRow(rowsValue) // функция удаляет строку
{
  document.write('<div id="deleteRowFunction"><form>Удалить строку: <input type="number" id ="inputDeleteRow" min="1" max="',rowsValue,'" onclick="document.getElementById(\'submitDeleteRow\').value = \'Удалить строку\'"></input><br><input id ="submitDeleteRow" type="button" value="" onclick="deleteRowButton(document.getElementById(\'inputDeleteRow\').value\,',rowsValue,')"></input></form></div>');
}

var counter = 0;
  function deleteRowButton(deleteValue,rowsValue) // функция вызывается в onclick в deleteRow()
{
  rowsValue -= counter;
  if ((deleteValue <= rowsValue)&&(deleteValue>0)){
  var table = document.getElementById('maintable');
  table.deleteRow(deleteValue-1);
  counter+=1;
  }
  else alert('Введено неверное значение');
}

function randomChooser(rowsValue,collsValue) // функция magic
{
  document.write('<div id="magicFunction"><form><input type="button" id ="magicButton" value="Magic" onclick="magicHappens(',rowsValue,',',collsValue,')"></input></form></div>')
}

function magicHappens(rowsValue,collsValue) // вызывается в onclick в randomChooser()
{
  function randomInt(min,max)
  {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var i = randomInt(0,rowsValue-1);
  var k = randomInt(0,collsValue-1);
  document.getElementById(`cellnum[${i}][${k}]`).style.backgroundColor = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
  document.getElementById(`cellnum[${i}][${k}]`).style.color = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
  document.getElementById(`cellnum[${i}][${k}]`).style.fontSize = randomInt(15,25) + 'px';
  if (randomInt(0,1) == 0)
  {
    document.getElementById(`cellnum[${i}][${k}]`).innerHTML = `<form id = "cell[${i}][${k}]"><input type ="textarea" id="cellvalue[${i}][${k}]"></input><input type="button" value="Сохранить" onclick ="saveValue(${i},${k})"></input></form>`
  }
}

function deleteTable() // функция удаления таблицы
{
  document.write('<div id ="deleteTableFunction"><form><input type="button" value="Удалить таблицу" onclick="buttonDeleteTable()"></input></form></div></div>');
}

function buttonDeleteTable() // вызвается в onclick в deleteTable()
{
  document.getElementById('maintable').remove();
  starterForm();
  document.getElementById('functionForms').remove();
  document.getElementById('tableHeader').remove();
}

function dising() // дизайн блока с функциями
{
  document.getElementById('functionForms').style.backgroundColor = 'lightgreen';
  document.getElementById('functionForms').style.height = '100px';
  document.getElementById('preferencesFunction').style.float = 'left';
  document.getElementById('preferencesFunction').style.height = '80px';
  document.getElementById('preferencesFunction').style.backgroundColor = 'lightgreen';
  document.getElementById('changeHeaderFunction').style.float = 'left';
  document.getElementById('changeHeaderFunction').style.height = '80px';
  document.getElementById('changeHeaderFunction').style.backgroundColor = 'lightblue';
  document.getElementById('deleteRowFunction').style.float = 'left';
  document.getElementById('deleteRowFunction').style.height = '80px';
  document.getElementById('deleteRowFunction').style.backgroundColor = 'lightred';
  document.getElementById('magicFunction').style.float = 'left';
  document.getElementById('magicFunction').style.height = '80px';
  document.getElementById('magicFunction').style.backgroundColor = 'lightblue';
}

starterForm();