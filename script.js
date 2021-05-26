
//========== DATA ==========
const animalsArray = ["antilope", "baleine", "Belette", "bison", "blaireau", "boeuf", "bouquetin", "Buffle", "Castor", "Cerf", "Chacal", "Chameau", "Chat", "Cheval", "Chèvre", "Chevreuil", "Chien", "Chimpanzé", "Cochon", "Corbeau", "Daim", "Dauphin", "Dogue", "Dromadaire", "Élan", "Éléphant", "Furet", "Girafe", "Glouton", "Gorille", "Guépard", "Gnou", "Hérisson", "Hyène", "Kangourou", "Lama", "Lamantin", "Lapin", "Léopard", "Panthère", "Lièvre", "Loup", "Marmotte", "Mouton", "Orque", "Otarie", "Ouistiti", "Ours", "Panthère", "Phacochère", "Phoque", "Poney", "Renard", "Rhinocéros", "Sanglier", "Singe", "Souris", "Taupe", "Tigre", "Vache", "Zèbre"];

const disneyArray = ['Atchoum', 'Belle', 'Bowser', 'Crochet', 'Clarabelle', 'Clochard', 'Cruella', 'Donald', 'Dormeur', 'Duchesse', 'Einstein', 'Flairsou', 'Gaston', 'Génie', 'Gontran', 'Gripsou', 'Joyeux', 'Maléfique', 'Bambi', 'Merlock', 'Mickey', 'Mulan', 'Riri', 'Fifi', 'Loulou', 'Daisy', 'Picsou', 'Pluto', 'Pongo', 'Popop', 'Prof', 'Basil', 'Ratingan', 'Simplet', 'Timide', 'Toby', 'Zazu', 'Aladin', 'Alice', 'Ariel', 'Aurore', 'Bourriquet', 'Buzz', 'Cendrillon', 'Clochette', 'Dingo', 'Dumbo', 'Elsa', 'Jasmine', 'Minnie', 'Panpan', 'Pinocchio', 'Pocahantas', 'Simba', 'Tigrou', 'Woody'];

const mythGreekArray = ["Achille", "Adonis", "Andromède", "Agamemnon", "Callisto", "Hector", "Hercule", "Jason", "Ménélas", "Minos", "Oedipe", "Orphée", "Patrocle", "Pelée", "Persée", "Polyphème", "Sisyphe", "Thésée", "Ulysse", "Aphrodite", "Ouranos", "Héphaistos", "Apollon", "Artémis", "Arès", "Héra", "Hestia", "Athéna", "Déméter", "Cronos", "Hadès", "Poseidon", "Perséphone", "Dionysos", "Hermès", "Zeus", "Ouranos", "Gaia", "Cyclope", "Cerbère", "Gorgone", "Sphynx", "Hydre", "Chimère", "Harpie"];

const sportsArray = ["Accrobranche", "Aérobic", "Aïkido", "Alpinisme", "Aquagym", "Athlétisme", "Aviron", "Badminton", "Baseball", "Billard", "Bowling", "Boxe", "Catch", "Cricket","Cyclisme", "Deltaplane", "Équitation", "Escalade", "Escrime", "Football", "Futsal", "Golf", "Handball", "Hockey", "Hurling", "Hapkido", "Judo", "Karaté", "Kayak", "Lutte", "Musculation", "Marathon", "Natation", "Paintball", "Pétanque", "Plongée", "Quidditch", "Roller", "Rugby", "Skateboard", "Snowboard", "Squash", "Tennis", "Triathlon", "Voile"];

const vegetablesArray = ["Ail", "Artichaut", "Asperge", "Aubergine", "Avocat", "Betterave", "Brocoli", "Carotte", "Céleri", "Champignon", "Choux", "Citrouille", "Concombre", "Courge", "Courgette", "Échalote", "Endive", "Èpinard", "Fenouil", "Flageolet", "Haricot", "Laitue", "Lentille", "Mâche", "Navet", "Oignon", 
"Olive", "Patate", "Poireau", "Poivron", "Potiron", "Radis", "Rhubarbe", "Roquette", "Rutabaga", "Salsifi", "Topinambour"];

const fruitsArray = ["Abricot", "Ananas", "Banane", "Cerise", "Citron", "Clémentine", "Figue", "Fraise", "Framboise", "Grenade","Griote","Groseille", "Kiwi", "Mandarine", "Melon", "Mûre", "Myrtille", "Orange", "Pomelos", "Pastèque", "Pêche", "Poire", "Pomme", "Prune", "Pruneau", "Raisin"];


/*=============================
========== VARIABLES ==========
=============================*/

/*rotate constantes*/
const btnRules = document.querySelector('.game-container .rules-button');
const mainRotate = document.querySelector('.pendu-full-container');
const btnGame = document.querySelector('.game-button');
/*================*/

const infos = document.querySelector('.infos');
const input = document.querySelector('.input span');
const randomWordFrame = document.querySelector('.random-word span');
const submitLetter = document.querySelector('button');
const refresh = document.querySelector('.refresh');
const authorizedLetters = ("abcdefghijklmnopqrstuvwxyz");

let theme = document.querySelector('.theme');
let warningSentence = document.querySelector('.warning-sentence');
let sentenceOne = document.querySelector('.sentenceOne');
let sentenceTwo = document.querySelector('.sentenceTwo');
let sentenceThree = document.querySelector('.sentenceThree');
let finalSentence = document.querySelector('.final-sentence');
let divUsedLetters = document.querySelector('.used-letter-div');
let usedLetters = document.querySelector('.used-letter-div p');

let generalArray = [animalsArray, disneyArray, mythGreekArray, sportsArray, vegetablesArray, fruitsArray];
let wordsArray = [];
wordsArray = generalArray[Math.floor(Math.random() * generalArray.length)];

let lowerCaseArray = [];
let usedLettersArray = [];
let emptyDash = [];
let letterChoice = '';
let maxShots = 0;
let nbCoups = 0;

/*==================================
========== INITIALIZATION ==========
==================================*/
for (let i = 0; i < wordsArray.length; i++) {
    lowerCaseArray.push(wordsArray[i].toLowerCase());
    }
    
let randomWord = lowerCaseArray[Math.floor(Math.random() * wordsArray.length)];
console.log(randomWord);
randomWord = randomWord.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
console.log(randomWord);

function checkLength(randomWord) {
    if (randomWord.length >= 9) {
        maxShots = 12;
    } else if (randomWord.length === 8) {
        maxShots = 11;
    } else if (randomWord.length >= 6) {
        maxShots = 10;
    } else {
        maxShots = 9;
    }
    return maxShots;
    
}

if (wordsArray === generalArray[0]) {
    //maxShots = 9;
    theme.innerHTML = "Thème : \" animaux \"";
    checkLength(randomWord);
    console.log(maxShots + " maxshots");
} else if (wordsArray === generalArray[1]) {
    //maxShots = 9;
    theme.innerHTML = "Thème : \" disney \"";
    checkLength(randomWord);
} else if (wordsArray === generalArray[2]) {
    //maxShots = 10;
    theme.innerHTML = "Thème : \" antiquité \"";
    checkLength(randomWord);
} else if (wordsArray === generalArray[3]) {
    //maxShots = 10;
    theme.innerHTML = "Thème : \" sports \"";
    checkLength(randomWord);
} else if (wordsArray === generalArray[4]) {
    //maxShots = 11;
    theme.innerHTML = "Thème : \" légumes \"";
    checkLength(randomWord);
} else if (wordsArray === generalArray[5]) {
    //maxShots = 12;
    theme.innerHTML = "Thème : \" fruits \"";
    checkLength(randomWord);
} else if (wordsArray === generalArray[6]) {
    //maxShots = 12;
    checkLength(randomWord);
    theme.innerHTML = "Thème : \" PAPA \"";
}

for (let i = 0; i < randomWord.length; i++) {
    emptyDash[i] = "_";
}

for (let i = 0; i < emptyDash.length; i++) {
    randomWordFrame.textContent += emptyDash[i];
}

sentenceThree.innerHTML = "Nombre de coups  : " + (maxShots - nbCoups);

console.log(randomWord);


/*=============================
========== FUNCTIONS ==========
=============================*/

function inputletter(e) {
    let input = document.querySelector('.input span');
    letterChoice = e.key;
    for (let i = 0; i < authorizedLetters.length; i++) {
        if (letterChoice === authorizedLetters[i]) {
        input.innerHTML = e.key;
        return letterChoice;
        }
    }
}

function putInUsed() {
    usedLetters.innerHTML = '';
    divUsedLetters.classList.add('appear');
    for (let i = 0; i < usedLettersArray.length; i++) {
        usedLetters.innerHTML += usedLettersArray[i];
    }
}

function foundLetter(sentence) {
    sentenceOne.textContent = sentence;
    sentenceOne.classList.add('appear');
}

function infosGame(infos) {
    sentenceTwo.innerHTML = infos;
    sentenceTwo.classList.add('appear');
    sentenceThree.innerHTML = "Nombre de coups  : " + (maxShots - nbCoups);
}

function EndSentence(sentence) {
    finalSentence.innerHTML = sentence;
    sentenceTwo.classList.remove('appear');
    sentenceThree.classList.add('hide');
    sentenceOne.innerHTML = "Le mot était " +  "\" " + randomWord + " \"";
}

function game(e) {    
    /*if (e.type == "keyup" && e.key !== "Enter") {
        return false;
    }*/
    if (letterChoice.length > 0 && authorizedLetters.includes(letterChoice) && emptyDash.includes("_")) {
        warningSentence.classList.remove('appear');
        nbCoups++;
        divUsedLetters.classList.add('appear');
        if (nbCoups >= maxShots) {
            finalSentence.classList.add('appear');
            EndSentence("Perdu !");           
            warningSentence.innerHTML = "Vous pouvez appuyer sur Rejouer";
            warningSentence.classList.add('appear');
            return false;
        } 

        if (usedLettersArray.includes(letterChoice)) {
            foundLetter("La lettre " + letterChoice + " est déjà utilisée");
            nbCoups--;
        } else {
            usedLettersArray.push(letterChoice);
            usedLettersArray.sort();
            putInUsed();

            if (emptyDash.includes(letterChoice)) {
                    foundLetter('Vous avez déjà trouvé cette lettre');    
            } else {
                foundLetter('Raté ! Essayez encore ! ');
            }
            let index = 0;
            for (let i = 0; i < randomWord.length; i++) {
                
                if (randomWord[i] === letterChoice) {
                    foundLetter("Une de trouvée !");
                    emptyDash[i] = letterChoice;
                    randomWordFrame.textContent = '';
                    index++;
                    for (let i = 0; i < emptyDash.length; i++) {
                        randomWordFrame.textContent += emptyDash[i];
                    }
                    console.log(index);
                }
            }
            if (index >= 1) {
                console.log(index);
                nbCoups--;
            }
            if (nbCoups <= maxShots && emptyDash.includes('_')) {
                infosGame("Cherchez encore !");
            } else {
                    finalSentence.classList.add('appear');
                    EndSentence("Gagné !");
                }
        }
    } else if (finalSentence.classList.contains('appear')) {
        warningSentence.innerHTML = "Vous devez appuyer sur Rejouer";
        warningSentence.classList.add('appear');
        sentenceTwo.classList.remove('appear');
    } else {
        warningSentence.classList.add('appear');       
    }       
}

/*======== ROTATE ANIMATION ==========*/

btnRules.addEventListener("click", function() {
    mainRotate.classList.add('flipped');
})

btnGame.addEventListener("click", function() {
    mainRotate.classList.remove('flipped');
})

/*===============================
========== GAME EVENTS ==========
===============================*/

document.addEventListener("keyup", function (e) {
    console.log(e);
    inputletter(e);   
});

refresh.addEventListener('click', function() {
    document.location.reload();
})

submitLetter.addEventListener("click", game);

//document.addEventListener("keyup", game);



    

