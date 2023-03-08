
function writeCards( names, value ) {
       let messageNames = []
    for (let i = 0; i < names.length; i++) {
      messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    }
return messageNames
}


function countDown(i) {
    let a = 0
    while(i >= a) {
        console.log(i)
        i--
    }
}

countDown()


// countDown()