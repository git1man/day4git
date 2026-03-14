var hold = {};

var validator = {
  set: function (target, prop, value) {
    switch (prop) {
      case "name":
        if (typeof value != "string") {
          throw new Error("the value must be string");
        }
        if (value.length != 7) {
          throw new Error("the vlue must be 7 chrachters");
        }
        break;

      case "address":
        if (typeof value != "string") {
          throw new Error("the value must be a string");
        }
        break;

      case "age":
        if (isNaN(value)) {
          throw new Error("value must be a number");
        }
        if (value >= 60 || value <= 25) {
          throw new Error("the age must be larger then 25 and smaller tehn 60");
        }
        break;

      default:
        throw new Error(`the ${prop} cannot be added`);
    }
    target[prop] = value;
  },
};

var obj=new Proxy(hold,validator)
obj.age=55
obj.name="hassans"
obj.address="fasil"
// obj.whatever="whatEverData"
console.log(hold.age)
console.log(hold.name)
console.log(hold.address)












// var validator={
//     set:function(obj,prop,value){
//         if(prop=="name"||prop=="address"||prop=="age"){
//             if(typeof prop.name!="string" &&(value.length>7 && value.length !=7)){
//                 throw new Error("name must be anumber and it should be larger then 7 chrachters")
//             }
//             if(typeof prop.address!="string"){
//                 throw new Error("the value of the address should be a string")
//             }
//         }else{
//             throw new Error("the key shold be a name or age, address")
//         }
//     }
// }
