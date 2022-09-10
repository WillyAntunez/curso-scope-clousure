//Las variables declaradas dentro de la funcion solo van a ser accesibles dentro de la funcion
function greeting() {
    let userName = 'Ana'; // esta variable solo puede ser usada dentro de esta función
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
