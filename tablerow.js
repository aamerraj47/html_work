function addTable(){
  let studentName = document.getElementById("name").value;
  // document.getElementById("name").autofocus;
  let studentMarks = document.getElementById("marks").value;
  let result = "NA" ; 

  if(isNaN (studentMarks) || (studentName) == ""){
    alert("input can't be Empty")
    return;
  }
  
   let addRow = document.getElementById("table1");
   let Row = table1.rows.length;
   let newRow = addRow.insertRow(Row);
   newRow.id = `row_${Row}`;
   let sr_no = Row;
   
  //  let cell = newRow.cells.length;
   let newCell1 = newRow.insertCell(0);
   newCell1.innerHTML = sr_no;
   newCell1.id = `row_${Row}_sr_no`;
   
   let newCell2 = newRow.insertCell(1);
   newCell2.innerHTML = studentName;
   newCell2.id = `row_${Row}_name`;
   document.getElementById("name").value= null;
   
   let newCell3 = newRow.insertCell(2);
   newCell3.innerHTML = studentMarks;
   newCell3.id = `row_${Row}_marks`;
   document.getElementById("marks").value = null;


   let newCell4 = newRow.insertCell(3);
   newCell4.innerHTML = result;
   newCell4.id = `row_${Row}_result`;

    // document.getElementById("table2").reset();
}
function evaluateResults(){
  let table1 = document.getElementById("table1");
  for (let i =1 ; i < table1.rows.length; i++){
    let marks = document.getElementById(`row_${i}_marks`).innerHTML;
    if (marks < 15){
      document.getElementById(`row_${i}_result`).innerHTML = "Fail";
    } else {
      document.getElementById(`row_${i}_result`).innerHTML = "Pass";
    }
  }

}
