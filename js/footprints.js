
var sortOrderCountry = -1;
var sortOrderEmission = -1;

/* a function to sort a table by a column */
function sortTable(table, col, reverse, compareFunction) {
    var tb = table.tBodies[0]
    var tr = Array.prototype.slice.call(tb.rows, 0);

    reverse = -((+reverse) || -1);
    tr = tr.sort((a, b) =>
        compareFunction(a, b, col, reverse)
    );
    console.log(tr)
    for (var i = 0; i < tr.length; ++i) {
        console.log(tr[i])
        tb.appendChild(tr[i]);
    }
}

function compareTextcells(a, b, col, reverse) {

    return reverse *
        (
            a.cells[col].textContent.trim()
                .localeCompare(b.cells[col].textContent.trim())
        )
}
function compareNumbercells(a, b, col, reverse) {

    return reverse *
        (
            Number(a.cells[col].textContent.trim().replace(".", "")) - Number(b.cells[col].textContent.trim().replace(".", ""))
        )
}
/* simplify the sortTable function by directly accessing the tables */
function sortByCountry() {
    sortTable(document.getElementById('footprint-table'), 0, sortOrderCountry, compareTextcells);
    sortOrderCountry *= -1;
}
function sortByEmission() {
    sortTable(document.getElementById('footprint-table'), 1, sortOrderEmission, compareNumbercells);
    sortOrderEmission *= -1;
}

/* a function to filter a table by a column */
function filterTable(table, col, query) {
    var tb = table.tBodies[0]
    var tr = Array.prototype.slice.call(tb.rows, 0);
    query = sanitizeInput(query.toLowerCase());
    for (var i = 0; i < tr.length; ++i) {
        var td = tr[i].cells[col].textContent.toLowerCase();
        tr[i].style.display = td.indexOf(query) === 0 ? '' : 'none';
    }
}

/* simplify the filterTable function by directly accessing the tables */
function filterByCountry() {

    filterTable(document.getElementById('footprint-table'), 0, document.getElementById('country').value);
}
function filterByEmission() {
    filterTable(document.getElementById('footprint-table'), 1, document.getElementById('emission').value);
}

/* a function to sanitize the input of the user */
function sanitizeInput(input) {
    return input.replace(/[^a-zA-Z0-9.,]/g, '');
}

function toggleHamburger() {
    var menu = document.getElementById("menuItems");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
/* a function to change the html direction according to the user language */
window.onload = function () {
    userLang = navigator.language || navigator.userLanguage; // get the user language
    /* set the html direction according to the user language ar and he as examples of rtl-languages */
    if (userLang.startsWith("ar") || userLang.startsWith("he")) {
        document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
    else {
        document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    }
}
