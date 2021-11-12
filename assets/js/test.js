var number = 2;

function withoutParams () {
    number = 5;
}

withoutParams();

function withParams (something, number) {
    console.log(something)
    console.log(5 + number)
}

withParams("Hi world", 3)