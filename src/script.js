$(document).ready(function () {
  var products = [
    {
      id: "100",
      name: "iPhone 4S",
      brand: "Apple",
      os: "iOS",
    },
    {
      id: "101",
      name: "Moto X",
      brand: "Motorola",
      os: "Android",
    },
    {
      id: "102",
      name: "iPhone 6",
      brand: "Apple",
      os: "iOS",
    },
    {
      id: "103",
      name: "Samsung Galaxy S",
      brand: "Samsung",
      os: "Android",
    },
    {
      id: "104",
      name: "Google Nexus",
      brand: "ASUS",
      os: "Android",
    },
    {
      id: "105",
      name: "Surface",
      brand: "Microsoft",
      os: "Windows",
    },
  ];

  function display() {
    for (i = 0; i < products.length; i++) {
      var tData = document.getElementById("Products");

      tData.innerHTML += `<tr class="content">
        <td>${products[i].id}</td>
        <td>${products[i].name}</td>
        <td>${products[i].brand}</td>
        <td>${products[i].os}</td>
        <td><span class="close">x</span></td>

        </tr>`;
    } //end of for loop

    $(".close").click(function () {
      //Event to delete a row
      $(this).closest("tr").remove();
    }); //End of event

    $("#myInput").on("keyup", function () {         //Search event function
      var value = $(this).val().toLowerCase();
      $("tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });

    function clearFilter() {
      $("#filterText").val("");
      $(".content").show();
    } //End of clearFilter function

    function filterTxt() {
      var rex = new RegExp($("#filterText").val());
      if (rex == "All") {
        clearFilter();
      } else {
        $(".content").hide();
        $(".content")
          .filter(function () {
            return rex.test($(this).text());
          })
          .show();
      }
    } //End of filterTxt function
  } //end of display function

  display();
});
