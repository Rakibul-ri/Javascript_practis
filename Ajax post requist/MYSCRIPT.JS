function GetRequest (){
    var URL="https://crud.teamrabbil.com/api/v1/ReadProduct";
    var Configaration = {method:"GET"};

    fetch (URL,Configaration)
    .then(response=>response.json())
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
}