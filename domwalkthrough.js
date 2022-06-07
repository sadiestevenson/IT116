console.dir(document);

//when running live server and you want to see where the domain will be hosted.
console.log(document.domain);

//gives the url of the webpage

//console.log(document.url);

//The document attribute can access different elements

//console.log(document.title);

//console.log(document.doctype);

//console.log(document.head);

//console.log(document.body);

//console.log(document.all);


//console.log(document.all[10]);


// Gives you the 10th index of the document. you can change the text of the content. 

//document.all[10].textContent="Item Lister"


// Any form that is in the document will show up
//console.log(document.forms);

//Any links that are in the document will show up. you can do this for images, or any element.
//console.log(document.links);

//////////////////////

//GetElementByID returns an element object representing the element whos id property matches the specified string.


console.log(document.getElementById('header-title'));

//Create an object variable based on the document fucntion.

let headerTitle=document.getElementById('header-title');

//passing objects throuhg the argument perameter

console.log(headerTitle);


//changing header title again. textContent and innerText is the same thing. 

//headerTitle.textContent= "change the title again"
//headerTitle.innerText="change title again and again and again"

//headerTitle.style.color='white';

///////////////////////////////////////////////////
//////////////////////////////////////////////////

//refrence by class name GetElementByClassName- it will return only elements which are descendants of the specified root elementwith the given class names

var items= document.getElementsByClassName('list-group-item')
console.log(items);


//how to call and style each specific variable.

//change the item background color
//items[1].style.backgroundColor='green'

//make the font bold
//items[1].style.fontWeight='bold';

//write some text
//items[1].textContent='this is so much fun! wow';

//change text color
//items[1].style.color='yellow';

//to get the first indext put 0
//items[0].style.backgroundColor='red'

//make the font bold
//items[0].style.fontWeight='bold';

//write some text
//items[0].textContent='waddup monte';

//change text color
//items[0].style.color='green';


//items[2].style.backgroundColor='yellow'

//make the font bold
//items[2].style.fontWeight='bold';

//write some text
//items[2].textContent='goodbye';

//change text color
//items[2].style.color='red';

//For loops. we created the variable with 'let i' begining with 1. i=intager which is number. then i added an output tag.

//for(let i=1; i<10;i++) {

  //  console.log(i);
//}

//another forloop. this time we're counting by 2 going to 20.

//for(let i=1; i<=20; i+=2) {

//    console.log(li);

// }

//decrement from 100 going down by 2
//for (let i = 100; 1 >=0; i -=2){
//  console.log(i);
//}

// I created a string of arrays named myDiamonds printed out with a forloop. 

//const myDiamonds= ['Snacky', 'Scary', 'Lily', 'ItyBitty', 'Pinchie', 'Piggie', 'Lanky', 'Nibbles', 'Kibby'];

//for (let i=0; i<myDiamonds.length; i++) {

 //   console.log(i, myDiamonds[1]);
//}

//Here is my forlip for the list of items I originally created. 
//Declare your variable for your list of items in the header.
//Start at the 0 index or number since arrays begin at 0 and 
//incrementing to the length of the list. 

//for(var i= 0; i < items.length; i++){

//items[1].style.backgroundColor="grey";
//items[i].textContent="Changing the List Items";
//items[i].style.color="white";
//}

//////////////////////////////////////////////////////////////////////////////
////////////////////GetElementByTagName

//Calling all the li tags or by elements tags

//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);

//styling elements within the list. you can do this in css too.

//li[1].textContent="Hello 2";
//li[1].style.fontWeight='bold';
//li[1].style.backgroundColor='green';
//li[1].style.color='white';

//here is how to style all the elements in the list at once

//for(var i = 0; i < li.length; i++) {

    //li[i].style.backgroundColor='lightgrey';
    //li[i].textContent='Changed the Color from the DOM:)';
    //li[i].style.color='white';
//}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////Query Selector


//create a varibale object using document class. then you can style the object.


//var header = document.querySelector('#main-header');

//creates a border around the header
//header.style.borderBottom = 'solid 4px blue';

//var input = document.querySelector('input');
//input.value="I just changed the input value of the text box";

//adding a submit botton

//var submit = document.querySelector('input[type="submit"]');
//submit.value ="Submit";

//Calling list items with by the paticular class 

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color= 'blue';

//Selecting specific items in the list
//var otherItem = document.querySelector('.list-grou-item:nth-child(2');
//otherItem.style.color = 'green';

/////////////////////////////////////////////////////////


//Calling Class (titles)

var titles = document.querySelectorAll('.title');
console.log(titles);

//Creating a title in specific variable

titles[0].textContent='HEY';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

// i = goes through every item in the index

for (var i= 0; i <odd.length; i++) {

  odd[i].style.backgroundColor= 'grey';
  odd[i].style.color= 'whitesmoke';
  even[i].style.backgroundColor='aqua';
  even[i].style.color='whitesmoke'
}