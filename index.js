const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(name) { 
    cats.push(name);
};
destructivelyAppendCat();
function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat();
function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat();
function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat();
function appendCat(name){
    const newCats = [...cats,name];
    return newCats;
}
function prependCat(name){
    const newCats = [name,...cats];
    return newCats;
}
function removeLastCat(){
    const newCats = cats.slice(0, cats.length-1);
    return newCats;
}
function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
}