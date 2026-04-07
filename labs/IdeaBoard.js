const projectStatus = {
  PENDING: {
    description: "Pending Execution"
  },
  SUCCESS: {
    description: "Executed Successfully"
  },
  FAILURE: {
    description: "Execution Failed"
  }
}

class ProjectIdea{
    // Given the constructor
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.status = projectStatus.PENDING;
    }
    // Defined a method for status updation
    updateProjectStatus(newStatus) {
        this.status = newStatus;
    }
}

class ProjectIdeaBoard{
    constructor(title){
        this.title = title;
        this.ideas = [];
    }

    pin(obj){
        this.ideas.push(obj);
    }

    unpin(obj){
        this.ideas.pop(obj);
    }

    count(){
        return this.ideas.length;
    }

    formatToString() {
    let output = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(idea => {
      output += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return output;
  }
}