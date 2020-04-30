//this is to print all the element with sma 
let element = document.getElementById('iv1');
console.log(element);

//to select with class

let element1 = document.getElementsByClassName('class1');
console.log(element1);

//it maches one more element  by query if nothing found we get -1
// earlier getelement was used

let element2 = document.querySelector('div');
element.style.color = "orange";


let element3 = document.querySelectorAll('div');
//will make all div tags red
for (var p of element3) {
    p.style.color = "red";
}

let element4 = document.createElement("p");
console.log(element3);

//to add the element as the last child
//it can be a;ready existed ,so it will be moved from the previous location to the new location

element4.textContent = "Paragraph five";
element2 = document.querySelector('div');
element2.appendChild(element4);
console.log(element2);


//if i want to remove element4

element2.removeChild(element4);

//replace child : replaces one child  with other chold of a single paren
let newElement = document.createElement('strong');
newElement.textContent = 'strong'; //new element is added
element2.appendChild(newElement);

// element2.replaceChild(newElement, element4);