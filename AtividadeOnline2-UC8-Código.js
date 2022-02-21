//Event Registration System
//Variable declarations
const EventName = "Public Event"
const CurrentDate = new Date("2022-02-22")
const EventDate = new Date()
const Speaker = "Dona Rosa"
const Partage = 19
const qtdregistrations = 99

//Event Date
if(CurrentDate >= EventDate)
{
    console.log("Register the participant in the system.")
}else{
    console.log("Invalid date.")
}

//Register participant
const PartName = "Participant"
//Check to age of participant
if(Partage >= 18)
{
    console.log("Allow participant registration.")
}else{
    console.log("You cannot be registered as you are a minor.")
}
if(qtdregistrations < 100)
{
    console.log("Allow participant registration.")
}else{
    console.log("Unfortunately, there are no more spots available.")
}

//Listagem
let registration = [{event:"Event1",speaker:"Faustão",participant:"Dona Dê"},{event:"Event2",speaker:"Pedro Bial",participant:"Guanabara"}];
   for(i = 0; i < registration.length; i++){
      console.log(registration[i].event+" - "+registration[i].palestrant+" - "+registration[i].participant);  
    }