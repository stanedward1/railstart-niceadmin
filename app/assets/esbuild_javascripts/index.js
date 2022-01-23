// require("bootstrap/dist/js/bootstrap.bundle");
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;

import { DataTable } from "simple-datatables";
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Initiate Datatables
 */
const datatables = select(".datatable", true);
datatables.forEach((datatable) => {
  new DataTable(datatable);
});
