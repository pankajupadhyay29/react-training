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

    updatebugs({id, status, description, assignedto, createdby}) {
        const index = this.bugs.findIndex(bug => bug.id === id);
        if (index >= 0) {
            if (status) this.bugs[index].status = status;
            if (description) this.bugs[index].description = description;
            if (assignedto) this.bugs[index].assignedTo = assignedto;
            if (createdby) this.bugs[index].createdBy = createdby;
        }
        return this.writeToFile();
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