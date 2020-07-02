class Question{
    constructor(question,choiceA,choiceB,choiceC,choiceD,answer,answer_text){
        this.question=question;
        this.choiceA=choiceA;
        this.choiceB=choiceB;
        this.choiceC=choiceC;
        this.choiceD=choiceD;
        this.answer=answer;
        this.answer_text=answer_text;
    }
}

let questions = [
    new Question(
        "Each of the following statements is true, except:",
        "Virus come in different types",
        "Viruses infect living cells",
        "Viruses can replicate without hosts",
        "Viruses can cause illnesses",
        "C",
        "Viruses can replicate without hosts"
    ),
    new Question(
        "A virus infects a host in order to:",
        "Take in nutrients",
        "Make the host sick",
        "Make copies of itself",
        "Destroy the host's cells",
        "C",
        "Make copies of itself"
    ),
    new Question(
        "The distinguishing feature of a coronavirus is its:",
        "Size",
        "Mobility",
        "Shape",
        "Deadliness",
        "C",
        "Shape"
    ),
    new Question(
        "A typical coronavirus infection:",
        "Is extremely dangerous",
        "Has mild symptoms",
        "Cannot spread to humans",
        "Is resistant to hand washing",
        "B",
        "Has mild symptoms"
    ),
    new Question(
        " Coronavirus infections are likely to be more serious for:",
        "Teens",
        "Active adults",
        "Frequent travelers",
        "People with weakened immune systems",
        "D",
        "People with weakened immune systems"
    ),
    new Question(
        "An outbreak of a virus occurs when:",
        "Symptoms of the virus get worse",
        "The virus spreads to more than one organ",
        "Someone dies from the virus",
        "The virus spreads to more and more hosts",
        "D",
        "The virus spreads to more and more hosts"
    ),
    new Question(
        "What does it mean when a city is quarantined during a virus outbreak?",
        "Everyone in the city is infected",
        "No one can enter or leave the city",
        "The city’s population is immune to the virus",
        "Doctors in the city are developing a cure",
        "B",
        "No one can enter or leave the city"
    ),
    new Question(
        "Which practice prevents the spread of germs?",
        "Washing your hands often",
        "Blowing your nose ",
        "Reusing the same tissue",
        "Coughing into your hand",
        "A",
        "Washing your hands often"
    ),
    new Question(
        "Covering your mouth when you cough or sneeze is recommended to:",
        "Prevent germs from entering your body",
        "Get rid of germs from inside your body",
        "Avoid getting other people sick",
        "Warn other people that you are sick",
        "C",
        "Avoid getting other people sick"
    ),
    new Question(
        "The most reliable source of information about virus outbreaks is:",
        "News headlines",
        "Social media",
        "Your peers",
        "The World Health Organization",
        "D",
        "The World Health Organization"
    ),
];