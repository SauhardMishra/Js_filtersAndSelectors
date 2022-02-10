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

    $(".close").click(function () {        //Remove a row function
      //Event to delete a row
      $(this).closest("tr").hide();
    }); //End of event

    $("#myInput").on("keyup", function () {         //Search event function
      var value = $(this).val().toLowerCase();
      $("tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });                                          //End of search event function

    $("#filterTextOs").on("click", function () {         //Filter event function for Operating System
      var value = $(this).val().toLowerCase();
      $("tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });   

    $("#filterTextBrand").on("click", function () {         //Filter event function for brand
      var value = $(this).val().toLowerCase();
      $("tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });   

    $("#filterTextBrand").on("click",function(){     //Filter function
      var filter1 = $(this).val();
      if(filter1=="All"){
        $(".content").show();
      }
    });

    $("#filterTextOs").on("click",function(){     //Filter function
      var filter1 = $(this).val();
      if(filter1=="All"){
        $(".content").show();
      }
    });

    

   
    
    
  } //end of display function

  display();
});
