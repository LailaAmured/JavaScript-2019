//JS ir vinīgā valoda ar kuru varam dabūt info no lietotāja, tā izpildās browserī 
console.log(window.innerHeight); 
console.log(window.innerWidth)

console.log(innerHeight)

console.log(window.location) 
//dabū visu, kas saistīts ar logu 
console.log(window.document) 
//dabū visu, kas saistīts ar logā redzamo "aktīvo" lapas daļu 
//izmainot vērtības, kuras redzamas window.location, tās izmainīsies arī lietotājam 
//tā var pārvirzīt uz citām lapām 

// window.location="https://google.com" //nonākam google 

// window.open("https://google.com")
//tā var sataisīt vīrusus 

localStorage.setItem("key1", 1000); 
//saglabā failā Coocies, līdz aiztaisīs ciet browsseri 
sessionStorage.setItem("key2", 1000); 
//saglabās ilgāk 

console.log(window.document) 
console.log(window.document.title) 
console.log(window.document.body) 
console.log(window.document.body.children) 
console.log(window.document.body.children[1]) 

window.document.body.children[1].textContent="Šis ir jauns teksts" 
window.document.body.children[2].children[0].innerHTML="<strong>Text</strong>" 
window.document.body.children[2].children[0].style.color="red" 
window.document.body.children[2].children[0].style.backgroundColor="blue" 

console.log(window.document.body.firstChild)
console.log(window.document.body.firstElementChild)

console.log(window.document.body.lastElementChild) 
// console.log(window.document.body.firstElementChild.firstElementChild.firstElementChild)
//ar pēdējo var pārvietoties uz leju pa html, bet nav ērti 

console.log(document.getElementsByTagName("li")) 
//šādi var izvadīt visus li, lai nav jāmin, kurš pēc kārtas bija kāds elements 
//visiem li var piešķirt, piemēram, citu backgroundColor
// console.log(document.getElementsByTagName("li")) 
// document.getElementsByTagName("li").backgroundColor="pink" 