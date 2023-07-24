
function afficher(){
    var container1 = document.getElementById('container1').style.display = "block"
}
function cacher(){
    var containerbudget = document.getElementById('containerbudget').style.display = "none"
}


let listedeps =[
   { titre:"nourriture",montant:"25000"},
   { titre:"loyer",montant:"40000"},
   { titre:"transport",montant:"15000"},
  
   
]

let container = document.getElementById('container')
let ajouterdepense = document.getElementById('container1')
let ajouterrevenu = document.getElementById('container2')
let validerrev = document.getElementById('validerrev')
let listedepense = document.getElementById('listedep')
let listerevenu = document.querySelector('.liste-revenu')
let titre = document.getElementById('titre')
let motant = document.getElementById('montant')


const tabledep = document.getElementById('listedep')
const tablebodydep = document.createElement('tbodydep')

//const local = JSON.parse(localStorage.getItem("depense"))

function remplirtabledep(){
    for (let index = 0; index < 3; index++) {
        let row = document.createElement("tr");
        // creer un bouton de suppression
        let buttoncell = document.createElement('td')
        let deletebutton = document.createElement('button')
        let buttontext = document.createTextNode('Supprimer')
        deletebutton.setAttribute('class','buttonsupp')
        deletebutton.appendChild(buttontext)

      
        for (let element = 0; element < listedeps.length; element++) {
            const cell = document.createElement('td')
           const cellText = document.createTextNode(
               Object.values(listedeps[index])[element])
               deletebutton.setAttribute('listedep',listedeps[index].montant)
            buttoncell.appendChild(deletebutton)   
            row.appendChild(buttoncell)
            row.setAttribute('id',listedeps[index].montant)

            cell.appendChild(cellText)
            row.appendChild(cell) 
        }
        tablebodydep.appendChild(row)
    }
    tabledep.appendChild(tablebodydep) 

    
    document.body.appendChild(tabledep)

    

}

remplirtabledep()

// effet du button supprimer
let deletebutton = document.querySelectorAll('.buttonsupp')
deletebutton.forEach(function (button) {
    button.addEventListener('click',function(){
        const montant = this.getAttribute('listedep');
        
        let row = document.getElementById(montant)
        row.parentNode.removeChild(row)
    })
    
});
    
// ajouter des depenses
let validerdep = document.querySelector('#validerdep') 
if(validerdep != null){
validerdep.onclick =function(event){
    event.preventDefault()
    const titre= getElementById('titre').value
    const montant= getElementById('montant').value
    if(!titre || !montant){
        alert('remplissez tout les cases')
        return
    }
    const newdepense = {titre,montant}
    listedeps.push(newdepense)
    
    //ajouter un tr
    let row = document.createElement('tr')
    let cell0 = row.insertCell(0)
    const cell0text = document.createTextNode(titre)
    cell0.appendChild(cell0text)
    row.appendChild(cell0)
    row.setAttribute('id',montant)
    tablebodydep.appendChild(row)
    tabledep.appendChild(tablebodydep)

    document.body.appendChild(tabledep)
    
}
}


//remplir la table revenu

let listerev =[
    { titre:"salaire",motant:"300000"},
    { titre:"renumetation",motant:"40000"},
    { titre:"business",motant:"60000"}
 ]
 
 
 
 
 const tablerev = document.getElementById('listerev')
 const tablebodyrev = document.createElement('tbodyrev')
 
 const local1 = JSON.parse(localStorage.getItem("revenu"))
 
 function remplirtablerev(){
     for (let index = 0; index < 3; index++) {
         let row = document.createElement("tr");
         // creer un bouton de suppression
        let buttoncol = document.createElement('td')
        let suppbutton = document.createElement('button')
        let textbutton = document.createTextNode('Supprimer')
        suppbutton.setAttribute('class','buttonsupp')
        suppbutton.appendChild(textbutton)
         for (let element = 0; element < listerev.length; element++) {
             const col = document.createElement('td')
            const colText = document.createTextNode(
                Object.values(listerev[index])[element])
                buttoncol.appendChild(suppbutton)   
                row.appendChild(buttoncol)
            col.appendChild(colText)
             row.appendChild(col) 
         }
         tablebodyrev.appendChild(row)
     }
     tablerev.appendChild(tablebodyrev) 
 
     
     document.body.appendChild(tablerev)
 }
 remplirtablerev()
 
 
   // effet du button supprimer
let suppbutton = document.querySelectorAll('.buttonsupp')
suppbutton.forEach(function (button) {
    button.addEventListener('click',function(){
        const montant = this.getAttribute('listerev');
        
        let line = document.getElementById(montant)
        row.parentNode.removeChild(row)
    })
    
});



//Budget - Depense - Solde
let buget = document.querySelector('.buget')
let depense = document.querySelector('.depense')
let solde = document.querySelector('.solde')

const revenus = [listerev.montant]
for( let value of listerev){
   document.querySelector('.budget').innerHTML += listerev.montant
}
console.log(listerev.montant)

const depenses = [listedeps.montant]
for(let value of listedeps){
    document.querySelector('.depense').innerHTML += listedeps.montant
}

const soldes = ([revenus] - [depenses])
document.querySelector('.solde').innerHTML


