$(function() {
	var busData = JSON.parse(localStorage.getItem("busData"))
  if (busData === null){
    busData = {}
  }
  // var insertBus = function (bus){
  //   var found = false
  //   for (var i = busData.length - 1; i >= 0; i--) {
  //       busData[i]
  //       if (busData[i].id == bus.id){
  //         found = true
  //       }
  //   }
  //   if (found != true) {
  //     busData.push(bus)
  //   }
  // };  
  var insertBus = function (bus){
    busData[bus.id] = bus.dateTime
  };
  var handleClick = function (e){
  	//ToDo: format dateTime output properly 
  	var dateTime = new Date();
  	console.log(e.target.innerHTML)
    var id = e.target.innerHTML
  
    insertBus({id: id, dateTime: dateTime});
    localStorage.setItem("busData", JSON.stringify(busData))
  };
	$('#bustable div').click(handleClick)


});
