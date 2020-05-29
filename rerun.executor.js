const { rerunner, getFilesListWithSubDirs } = require('./rerun')

function createMochaCmd(pathToSpecFile) {
    return `./node_modules./bin/mocha ${pathToSpecFile}`
}

const commandsList = getFilesListWithSubDirs('./specs')
.map(createMochaCmd)

rerunner(commandsList, 3, 2).then(console.log)


