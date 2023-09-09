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
