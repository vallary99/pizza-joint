$(document).ready(function(){
    
    var Order=function(flavour,size,crust,topping){
        this.flavour=flavour;
        this.size=size;
        this.crust=crust;
        this.topping=topping;
    }
            Order.prototype.totalPrice=function()
        {
            return this.size + this.crust + this.topping
        }
    

    var total=0;
    $("input #add").click(function(event){
    event.preventDefault();
       var pizzaSize=parseInt($("#size option:select").val()); 
       var pizzaCrust =parseInt($("#crust option:select").val()); 
       var pizzaTopping= parseInt($("#topping option:select").val());

       let newOrder = new Order(pizzaSize,pizzaCrust,pizzaTopping);

    let price= (newOrder.totalPrice());

    total+=price;


    var Tsize= $("#size option:select").text();
    var Tcrust= $("#crust option:select").text();
    var Ttopping= $("#topping option:select").text();
    var Tflavour= $("#flavour option:select").text();
    var Tamount=document.getElementById("#amount").value;

    $("tbody").append("<tr>"+"<td>"+Tflavour+"</td>"+"<td>"+Tsize+"</td>"+"<td>" +Tcrust+ "</td>"+"<td>" + Tamount +"</td>" +"<td>"+Ttopping+ "</td>" +"<td>" +price +"</td>"+"</tr>")
    
  });

  
      $("#order").click(function(event){
          $("#order").text(total);
          $("#last").show();

          function validation(){      
          var name=document.getElementById("#name").value;
          var address=document.getElementById("#address").value;

  confirm(name+" "+"you order has been placed and will be delivered at"+" "+address);
      }
  });

});