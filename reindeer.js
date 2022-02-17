const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeer = []
    // Write a for loop that looks at each reindeer
        // Invoke factory function to create reindeer object

        // Put new reindeer object in coloredReindeer array


    // Return coloredReindeer array

    for (deer of reindeer) {
        const newDeer = deerFactory(deer)
        coloredReindeer.push(newDeer)
    }

    return coloredReindeer
}

const deerFactory = function (deerName) {
    const newDeer = {
        name: `${deerName}`,
        color: colors.next().value
    }
    return newDeer
}

const colorGenerator = function* () {
    const colorPallete = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", 
                          "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

    for (color of colorPallete){
        yield color
    }
}

const colors = colorGenerator()

reindeerArray = coloredReindeerBuilder()

console.log(reindeerArray)

