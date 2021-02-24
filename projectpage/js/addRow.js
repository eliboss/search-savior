var bool = document.getElementById("addR");
if (bool) {
  bool.addEventListener("click", addRow);
}

// If a new project was made on the index page, add it to the table
function addRow() {
  var table = document.getElementById("dataTable");
  var textName = table.rows[1].getElementsByTagName("input")[1].value;
  var setDate = table.rows[1].getElementsByTagName("input")[2].value;
  var textCategory = table.rows[1].getElementsByTagName("input")[3].value;

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var cell1 = row.insertCell(0);
  var element1 = document.createElement("input");
  element1.type = "checkbox";
  element1.name = "chkbox[]";
  cell1.appendChild(element1);

  var cell3 = row.insertCell(1);
  cell3.id = textName;
  cell3.innerHTML = "<a href=search.html>" + textName + "</a>";

  var cell4 = row.insertCell(2);
  var element3 = document.createElement("input");
  element3.type = "date";
  element3.name = "txtbox[]";
  cell4.innerHTML = setDate || element3;

  var cell5 = row.insertCell(3);
  var element4 = document.createElement("input");
  element4.type = "text";
  element4.name = "txtbox[]";
  cell5.innerHTML = textCategory || element4;
}

//if there are new trees added to sync storage, add them to the page

function addEntry(storageKey) {
  var projTable = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  // create rows and cells
  var newRow = projTable.insertRow();
  var newCheck = newRow.insertCell();
  var newTitle = newRow.insertCell();
  var newDate = newRow.insertCell();
  var newCategory = newRow.insertCell();

  // create elements to add to table
  var newText = document.createTextNode(storageKey);
  var newCheckEle = document.createElement("input");

  // set current date
  var d = new Date();
  var n = d.getDate();
  n += "-" + d.getMonth() + "-" + d.getFullYear();
  
  // create category text
  var date = document.createTextNode(n);
  var categoryText = document.createTextNode("searched for trees");
  newCheckEle.type = "checkbox";
  newText.type = "link";
  newTitle.id = storageKey;
 
  // append nodes to table
  newCheck.appendChild(newCheckEle);
  newTitle.appendChild(newText);
  newDate.appendChild(date);
  newCategory.appendChild(categoryText);

  // change innertext to link
  document.getElementById(storageKey).innerHTML =
    "<a href=search.html>" + storageKey + "</a>";
}