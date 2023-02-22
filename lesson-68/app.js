const sum = (a, b) => {
    return a + b;
  };
  

const x = (a) => {
    console.log(a)

    return y(a)
}

const y = (a) => {
    return a !== 3
}


module.exports = {
sum, x, y
}