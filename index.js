function introduction(name){
    return(`Hi, my name is ${name}.`);
}

introduction("Aki");
_______________________________________


function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguage("Aki", "Ember.js");
_______________________________________


function introductionWithLanguageOptional(name, language = "Javascript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguageOptional("Aki", "Ember.js");
_______________________________________


function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguageOptional("Aki", "Ember.js");

