function fizzFuz() {
    for (i=0; i<100; i++) {
        if(i%3) {
            console.log("fizz");
        }
        if(i%5) {
            console.log('buzz');
        }
        if(i%3 && i%5 ) {
            console.log('Fizzbuz')
        }
    }
}

fizzFuz();