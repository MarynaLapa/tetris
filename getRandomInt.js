function getRandomInt(max) {
    console.log('first', Math.round(Math.random() * max))
    return Math.round(Math.random() * max);
}

export default getRandomInt;