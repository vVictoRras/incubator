
function bandNameGenerator(str) {
    const letter =['e','y','i','o','a'];
    let name = str.split('');
    for (let i=0;i<name.length;i++){
     if (name[0]===letter[i]){
         return str[0].toUpperCase()+ str.slice(1)+str.slice(1);
     }

    }
     return ('The'+' '+ str[0].toUpperCase()+ str.slice(1))


}

console.log(bandNameGenerator("The Tart'));