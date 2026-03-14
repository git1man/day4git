var selects = document.querySelectorAll("select");
var first = selects[0];
var second = selects[1];

var xhr = new XMLHttpRequest();
var data;
xhr.open("GET", "rockbands.json");
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      data = JSON.parse(xhr.responseText);

      for (var key in data) {
        var hold = document.createElement("option");
        hold.value = key;
        hold.textContent = key;
        first.appendChild(hold);
      }
    }
  }
};

first.addEventListener("change", function () {
  var selected = this.value;

  second.innerHTML = "";

    data[selected].forEach(function (select) {
      var option = document.createElement("option");
      option.value = select.value;
      option.textContent = select.name;
      second.appendChild(option);
    });
});

second.addEventListener("change", function () {
  var value = this.value;

  window.open(value, "_blank");
});
