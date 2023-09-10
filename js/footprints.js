/* a function to sort a table by a column */
function sortTable(table, col, reverse) {
  var tb = table.tBodies[0]
  var tr = Array.prototype.slice.call(tb.rows, 0);

  reverse = -((+reverse) || -1);
  tr = tr.sort(function (a, b) { // sort rows
    return reverse // `-1 *` if want opposite order
        * (a.cells[col].textContent.trim() 
            .localeCompare(b.cells[col].textContent.trim())
           );
  });
  for(var i = 0; i < tr.length; ++i) 
        tb.appendChild(tr[i]); 
}
/* simplify the sortTable function by directly accessing the tables */
function sortByCountry() {
  sortTable(document.getElementById('footprint-table'), 0);
}
function sortByEmission() {
    sortTable(document.getElementById('footprint-table'), 1);
  }

  /* a function to filter a table by a column */
function filterTable(table, col, query) {
    var tb = table.tBodies[0]
    var tr = Array.prototype.slice.call(tb.rows, 0);
    query = query.toLowerCase();
    for(var i = 0; i < tr.length; ++i) {
        var td = tr[i].cells[col].textContent.toLowerCase();
        tr[i].style.display = td.indexOf(query) > -1 ? '' : 'none';
    }
    }

    /* simplify the filterTable function by directly accessing the tables */
function filterByCountry() {
    filterTable(document.getElementById('footprint-table'), 0, document.getElementById('country').value);
}
function filterByEmission() {
    filterTable(document.getElementById('footprint-table'), 1, document.getElementById('emission').value);
}