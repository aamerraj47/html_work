
const STUDENTS_DATA = [{
    name: 'Loki',
    marks: 15,
    result: 'NA',
},
{
    name: 'Thor',
    marks: 20,
    result: 'NA',
},
{
    name: 'Thanos',
    marks: 200,
    result: 'NA',
},
{
    name: 'Iron Man',
    marks: 500,
    result: 'NA',
}];

function addCellsToRow(studentData, row, rowIndex) {
    for(let prop in studentData) {
        const endOfRow = row.cells.length;
        const newlyAddedCell = row.insertCell(endOfRow);
        newlyAddedCell.id = `row_${rowIndex}_${prop}`;
        console.log(newlyAddedCell.id)
        newlyAddedCell.innerHTML = studentData[prop];
    }
}

function getTableReady() {
    const table = document.getElementById('studentsTable1');
    table.innerHTML = null; // clearing the table before adding new rows
    const insertedRow = table.insertRow(0);
    insertedRow.insertCell(0).innerHTML = 'Name';
    insertedRow.insertCell(1).innerHTML = 'Marks';
    insertedRow.insertCell(2).innerHTML = 'Result';

}

function addStudentsToTabls() {
    getTableReady()
    const table = document.getElementById('studentsTable1');
    for(let i = 0; i < STUDENTS_DATA.length; i += 1) {
        const endOfTable = table.rows.length;
        const newlyAddedRow = table.insertRow(endOfTable);
        newlyAddedRow.id = `row_${i}`;
        addCellsToRow(STUDENTS_DATA[i], newlyAddedRow, i);
    }
}

function evaluateResults(){
    const table = document.getElementById('studentsTable1');
    for(let i = 0; i < table.rows.length - 1; i += 1) {
        const studentMarks = document.getElementById(`row_${i}_marks`).innerHTML;
        if(studentMarks < 20) {
            document.getElementById(`row_${i}_result`).innerHTML = 'FAIL'
        } else {
            document.getElementById(`row_${i}_result`).innerHTML = 'PASS'
        }
    }
}


