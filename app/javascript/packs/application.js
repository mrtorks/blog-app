// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
Rails.start();
Turbolinks.start();
ActiveStorage.start();

import "../styles/application.scss";

require("trix");
require("@rails/actiontext");

document.addEventListener("turbolinks:load", (e) => {
  document.addEventListener("click", (e) => {
    let element = e.target.closest(".paragraph-content");
    if (!element) return;

    element.classList.add("d-none");
    element.nextElementSibling.classList.remove("d-none");
  });
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".cancel")) return;

    let element = e.target.closest(".paragraph-form");
    element.classList.add("d-none");
    element.previousElementSibling.classList.remove("d-none");
  });
});

import "controllers"
