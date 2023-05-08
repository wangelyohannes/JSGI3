class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log("Running is fun! - said no one ever");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy === true){
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }

    learnLanguage(language) {
        this.languages.push(language);
    }

    listLanguages(){
        console.log(`${this.languages} are all the languages ${this.name} knows`);
    }
}

const wayne = new Person ("Wayne", "Coder", 22);

wayne.exercise();

wayne.fetchJob();

const wayne2 = new Programmer ("Wayne", "Coder", 22, ["html", "css", "javascript"]);

wayne2.completeTask();
wayne2.offerNewTask();
wayne2.acceptNewTask();
wayne2.offerNewTask();
wayne2.listLanguages();
wayne2.learnLanguage("& Node");
wayne2.listLanguages();