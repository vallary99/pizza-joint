$(document).ready(function(){
    $("#delivery").select(function(){
        $(".address").show();
        $("#delivery").hide();
    })
    
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
    $("#add").click(function(event){
    event.preventDefault();
        var pizzaSize=parseInt($("#size").val()); 
       var pizzaCrust =parseInt($("#crust option:selected").val()); 
        var pizzaTopping= parseInt($("#topping option:selected").val());

       let newOrder = new Order(pizzaSize,pizzaCrust,pizzaTopping);

     let price= (newOrder.totalPrice());

     total+=price;

    var Tsize= $("#add-order").append(pizzaSize);
    var Tcrust= $("#add-order").append("pizzaCrust");
    var Ttopping= $("#topping option:selected").text();
    var Tflavour= $("#flavour option:selected").text();
    var Tamount=document.getElementById("#amount").value;

    $("tbody").append("<tr>"+"<td>"+Tflavour+"</td>"+"<td>"+Tsize+"</td>"+"<td>" +Tcrust+ "</td>"+"<td>" + Tamount +"</td>" +"<td>"+Ttopping+ "</td>" +"<td>" +price +"</td>"+"</tr>")
    
  });

  
      $("#order").click(function(event){
          $("#order").text(total);
          $("#last").show();
          
  });

});
      
          
  


