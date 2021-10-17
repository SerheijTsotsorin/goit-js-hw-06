const list = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${list.length}`);

const itemsRef = document.querySelectorAll('.item');
itemsRef.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`); 
});


