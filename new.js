const data = [
    {
        name: "said",
        age: 30,
        gender: "mal",
        lokingfor: "female",
        location: "wroclaw PL",
        image: "https://randomuser.me/api/portraits/men/82.jpg"
    },
    {
        name: "Raman",
        age: 29,
        gender: "mal",
        lokingfor: "male",
        location: "czestochowa PL",
        image: "https://randomuser.me/api/portraits/men/82.jpg"
    },
    {
        name: "Sozana",
        age: 31,
        gender: "mal",
        lokingfor: "female",
        location: "wroclaw PL",
        image: "https://randomuser.me/api/portraits/women/83.jpg"
    }
]
//next event
document.getElementById("next").addEventListener("click", nextProfile);
const profils = profilItirator(data);
nextProfile();
// next profile display
function nextProfile(){
    

        const currentProfil = profils.next().value;
        if(currentProfil !== undefined){
        document.getElementById("profilDisplay").innerHTML = `
        <ul class="list-group">
         <li class="list-group-item">Name: ${currentProfil.name}</li>
         <li class="list-group-item">Age: ${currentProfil.age}</li>     
         <li class="list-group-item">Location: ${currentProfil.location}</li>  
         <li class="list-group-item">Gender: ${currentProfil.gender} loking for ${currentProfil.lokingfor}</li>  
        </ul>`
    }else{
        window.location.reload();
    }
  

    document.getElementById("imageDisplay").innerHTML = `<img src=${currentProfil.image}>`
}
// profil itirator


function profilItirator(profils){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < profils.length ? {value: profils[nextIndex++], done: false} : {done: true}
        }
    }
}