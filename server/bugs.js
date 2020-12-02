const fs = require('fs');
const path = require('path');

const filePath = path.resolve('./server/BugList.json');
const bugs = require(filePath);

class Bugs {
    constructor() {
        this.bugs = bugs;
    }

    get() {
        return this.getJson();
    }

    post(bug) {
        this.bugs.push(bug);
        return this.writeToFile();
    }

    delete({ id }) {
        this.bugs = this.bugs.filter(bug => bug.id !== id);
        return this.writeToFile();
    }

    deletebugs(prams) {
        return this.delete(prams);
    }

    createbugs(bug) {
        return this.post(bug);
    }

    writeToFile() {
        const result = this.getJson();
        fs.writeFile(filePath, result, () => true);
        return result;
    }

    getJson() {
        return JSON.stringify(this.bugs, null, '\t') + '\n'
    }
}

module.exports = {
    bugs: new Bugs()
}