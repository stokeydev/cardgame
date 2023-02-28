//class definition for Trump cards
class TopTrumpCard {
    constructor(name, party, age, inOffce, electionVictories, principles, leadership, Economics, ForeignPolicy, charisma, image) {
        this.name = name;
        this.party = party;
        this.age = age;
        this.inOffce = inOffce;
        this.electionVictories = electionVictories;
        this.principles = principles;
        this.leadership = leadership;
        this.Economics = Economics;
        this.ForeignPolicy = ForeignPolicy;
        this.charisma = charisma;
        this.image = image;
    }
}

//data that is used to populate the class instance
// (name, party, age(at death if deceased), in offce, election victories, principles, leadership, Economics, Foreign Policy, , charisma)
var politicians = [
    new TopTrumpCard("Rishi Sunak", "Conservative", 42, 0.4, 0, 35, 65, 30, 75, 60, "images\/car_thumbs\/rish.jpeg"),
    new TopTrumpCard("Liz Truss", "Conservative", 47, 0.1, 0, 30, 20, 0, 80, 50, "images\/car_thumbs\/liz_truss.jpg"),
    new TopTrumpCard("Boris Johnson", "Conservative", 58, 3, 1, 0, 25, 10, 78, 88, "images\/car_thumbs\/boris.jpeg"),
    new TopTrumpCard("David Cameron", "Conservative", 56, 6, 2, 50, 70, 60, 70, 80, "images\/car_thumbs\/dcam.jpeg"),
    new TopTrumpCard("Gordon Brown", "Labour", 72, 3, 0, 86, 90, 90, 80, 70, "images\/car_thumbs\/brown.jpeg"),
    new TopTrumpCard("Tony Blair", "Labour", 69, 10, 3, 50, 90, 95, 30, 85, "images\/car_thumbs\/blair.jpeg"),
    new TopTrumpCard("John Major", "Conservative", 79, 7, 1, 75, 76, 80, 80, 30, "images\/car_thumbs\/major.jpeg"),
    new TopTrumpCard("Margaret Thatcher", "Conservative", 87, 11, 3, 60, 79, 70, 60, 89, "images\/car_thumbs\/maggie.jpeg"),
    new TopTrumpCard("James Callaghan", "Labour", 92, 3, 0, 68, 65, 65, 90, 65, "images\/car_thumbs\/jamesc.jpeg"),
    new TopTrumpCard("Harold Wilson", "Labour", 79, 8, 4, 88, 78, 75, 90, 80, "images\/car_thumbs\/wilson.jpeg"),
    new TopTrumpCard("Edward Heath", "Conservative", 89, 4, 1, 80, 79, 70, 95, 69, "images\/car_thumbs\/heath.jpeg"),
    new TopTrumpCard("Harold MacMillan", "Conservative", 92, 6, 1, 75, 70, 75, 75, 60, "images\/car_thumbs\/hmac.jpeg"),
    new TopTrumpCard("Alec Douglas-Home", "Conservative", 92, 1, 0, 73, 30, 50, 60, 20, "images\/car_thumbs\/adg.jpeg"),
    new TopTrumpCard("Anthony Eden", "Conservative", 79, 2, 1, 80, 65, 90, 15, 91, "images\/car_thumbs\/eden.jpeg"),
    new TopTrumpCard("Winston Churchill", "Conservative", 90, 9, 1, 80, 90, 60, 89, 99, "images\/car_thumbs\/churchill.jpeg"),
    new TopTrumpCard("Clement Attlee", "Labour", 84, 6, 2, 99, 85, 99, 95, 75, "images\/car_thumbs\/attlee.webp"),
    new TopTrumpCard("George VI", "Monarch", 56, 16, 0, 86, 95, 70, 60, 90, "images\/car_thumbs\/georgevi.jpeg"),
    new TopTrumpCard("Elizabeth II", "Monarch", 96, 70, 0, 65, 80, 80, 95, 95, "images\/car_thumbs\/qlizii.jpeg"),
    new TopTrumpCard("Charles III", "Monarch", 74, 0.5, 0, 88, 70, 70, 90, 65, "images\/car_thumbs\/charlesiii.jpeg"),
    new TopTrumpCard("Ed Miliband", "Labour", 53, 0, 0, 85, 30, 80, 80, 40, "images\/car_thumbs\/miliband.jpeg"),
    new TopTrumpCard("John Smith", "Labour", 63, 0, 0, 70, 70, 80, 80, 60, "images\/car_thumbs\/jsmith.jpeg"),
    new TopTrumpCard("Neil Kinnock", "Labour", 80, 0, 0, 65, 70, 70, 70, 65, "images\/car_thumbs\/kinnock.webp"),
    new TopTrumpCard("Michael Foot", "Labour", 90, 0, 0, 80, 40, 70, 70, 50, "images\/car_thumbs\/foot.jpeg"),
    new TopTrumpCard("Keir Starmer", "Labour", 60, 0, 0, 50, 80, 80, 80, 70, "images\/car_thumbs\/starmer.jpeg"),
    new TopTrumpCard("Jeremy Corbyn", "Labour", 73, 0, 0, 95, 20, 90, 70, 65, "images\/car_thumbs\/corbyn.jpeg"),
    new TopTrumpCard("Hugh Gaitskell", "Labour", 62, 0, 0, 60, 85, 80, 80, 70, "images\/car_thumbs\/gaitskell.jpeg"),
    new TopTrumpCard("Theresa May", "Conservative", 66, 3, 1, 65, 60, 60, 65, 50, "images\/car_thumbs\/tmay.jpeg"),
    new TopTrumpCard("Ian Duncan Smith", "Conservative", 68, 0, 0, 40, 20, 50, 50, 10, "images\/car_thumbs\/ids.jpeg"),
    new TopTrumpCard("William Hague", "Conservative", 61, 0, 0, 70, 65, 65, 65, 50, "images\/car_thumbs\/hague.jpeg"),
    new TopTrumpCard("Michael Howard", "Conservative", 81, 0, 0, 70, 70, 65, 65, 65,"images\/car_thumbs\/howard.jpeg")
    ];
    
    //globals needed for the game
    var content = "";
    var result = "";
    var endGame = false;
    var noGo = false;
    var noValue=-1;
    var you, player2, theDeck, player1Card, player2Card, ending, oppStack, yourStack, mainStack, g, i, j, cardNum;
    
    //this is the draw function - whether your card beats the opponent's card
    function draw() {
        if(endGame) {
            ending=" cards";
            yourStack="You have "+ you.getSize()+ending;
            oppStack="The Computer has "+ player2.getSize()+ending;
        }
        else {
            if(you.getSize()===0) {
                ending = " card.";
            }
            else {
                ending = " cards.";
            }
            yourStack="You have "+ (you.getSize()+1)+ending;
            
            if(player2.getSize()===0) {
                ending = " card.";
            }
            else {
                ending = " cards.";
            }
            oppStack="The Computer has "+ (player2.getSize()+1)+ending;
        }
        mainStack="Middle Stack: "+ theDeck.getSize();
    }
    
    //this function draws a card from the deck for player 1
    function drawP1Card() {
        document.getElementById("P1Flag").src = "images\/"+ player1Card.party +".gif";
        document.getElementById("P1Flag").alt = player1Card.party;
        document.getElementById("P1Car").src = player1Card.image;
        document.getElementById("P1Car").alt = player1Card.name;
        document.getElementById("P1Name").firstChild.nodeValue = player1Card.name;
        document.getElementById("P1Office").lastChild.nodeValue = player1Card.inOffce;
        document.getElementById("P1Ewins").lastChild.nodeValue = player1Card.electionVictories;
        document.getElementById("P1Prin").lastChild.nodeValue = player1Card.principles;
        document.getElementById("P1Lead").lastChild.nodeValue = player1Card.leadership;
        document.getElementById("P1Econ").lastChild.nodeValue = player1Card.Economics;
        document.getElementById("P1Forpol").lastChild.nodeValue = player1Card.ForeignPolicy;
        document.getElementById("P1Charisma").lastChild.nodeValue = player1Card.charisma;
        document.getElementById("P1Age").lastChild.nodeValue = player1Card.age;
    }
    
    //Constructing other card (computer's card)
    function drawP2Card() {
        document.getElementById("P2Flag").src = "images\/"+ player2Card.party +".gif";
        document.getElementById("P2Flag").alt = player2Card.party;
        document.getElementById("P2Car").src = player2Card.image;
        document.getElementById("P2Car").alt = player2Card.name;
        document.getElementById("P2Name").firstChild.nodeValue = player2Card.name;
        document.getElementById("P2yio").firstChild.nodeValue = player2Card.inOffce;
        document.getElementById("P2wins").firstChild.nodeValue = player2Card.electionVictories;
        document.getElementById("P2prin").firstChild.nodeValue = player2Card.principles;
        document.getElementById("P2lead").firstChild.nodeValue = player2Card.leadership;
        document.getElementById("P2econ").firstChild.nodeValue = player2Card.Economics;
        document.getElementById("P2forpol").firstChild.nodeValue = player2Card.ForeignPolicy;
        document.getElementById("P2charisma").firstChild.nodeValue = player2Card.charisma;
        document.getElementById("P2age").firstChild.nodeValue = player2Card.age;

        
    }

    //this shows the initial state of the computer's card as blank
    function clearP2Card() {
        document.getElementById("P2Flag").src = "images\/blank.gif";
        document.getElementById("P2Flag").alt = "Opponent Person Party";
        
        document.getElementById("P2Car").src = "images\/bigBlank.gif";
        document.getElementById("P2Car").alt = "Opponent Person Party";
        document.getElementById("P2Name").firstChild.nodeValue = "????";
        if(document.getElementById("P2yio").firstChild){
            document.getElementById("P2yio").firstChild.nodeValue = "????";
            document.getElementById("P2wins").firstChild.nodeValue = "????";
            document.getElementById("P2prin").firstChild.nodeValue = "????";
            document.getElementById("P2lead").firstChild.nodeValue = "????";
            document.getElementById("P2econ").firstChild.nodeValue = "????";
            document.getElementById("P2forpol").firstChild.nodeValue = "????";
            document.getElementById("P2charisma").firstChild.nodeValue = "????";
            document.getElementById("P2age").firstChild.nodeValue = "????";
        }
    }
    
    //changes the text displayed in the button and the function that is called when the button is clicked
    function changeButtonFunction(funcName, buttonText) {
        document.getElementById("compareButton").value=buttonText;
        document.getElementById("player1").onsubmit = funcName;
    }
    
    //changes the value of the current card count for each player
    function changeCardValues() {
        document.getElementById("yourCards").firstChild.nodeValue = yourStack;
        document.getElementById("oppCards").firstChild.nodeValue = oppStack;
        document.getElementById("mainCards").firstChild.nodeValue = mainStack;
    }
    
    //this function is called until there is a winner, when one of players doesn't have any cards left
    function next() {
        document.getElementById("player1").p1[noValue].checked = false;
        noValue = -1;
        draw();
        drawP1Card();
        document.getElementById("matchResult").firstChild.nodeValue="";
        clearP2Card();
        if(!endGame) {
            changeButtonFunction(compare,"Compare Cards");
        }
        else {
            changeButtonFunction(initialise,"Play Again");
        }
        
        return false;
    }
    
    //initialisation of the main card deck and each player's deck, shuffling the initial state of deck
    function setup() {
        content = "";
        result = "";
        noGo = false;
        noValue = -1;
        endGame = false;
        theDeck = new TopTrumpQueue();
        you = new TopTrumpQueue();
        player2 = new TopTrumpQueue();
        
        for(i=0; i<30; i++) {
            theDeck.enqueue(politicians[i]);
        }
        
        var d=document;
        d.carImages = [];
        for(i=0; i<30; i++) {
            d.carImages[i]=new Image();
            d.carImages[i].src=politicians[i].image;
        }
        
        
        theDeck.shuffle();
        var numCards = theDeck.getSize();
        for(var k = 0; k<(numCards/2); k++) {
            you.enqueue(theDeck.dequeue());
            player2.enqueue(theDeck.dequeue());
        }
        player1Card = you.dequeue();
        player2Card = player2.dequeue();
        draw();
        drawP1Card();
        clearP2Card();
        changeCardValues();
    }

    //loads the first card, ready for the player to select the attribute, updates the button text to show the text 'compare cards' in preperation for the actual comparison to be launched
    function initialise() {
        setup();
        document.getElementById("matchResult").firstChild.nodeValue="";
        changeCardValues();
        changeButtonFunction(compare,"Compare Cards");
        clearP2Card();
        
        return false;
    }
    //this is doing the comparison between the two cards
    function compare() {
        var player1form = document.getElementById("player1");
        for(g=0;g<player1form.p1.length;g++) {
            if(player1form.p1[g].checked) {
                noValue = g;
                var p1Val = player1Card[player1form.p1[g].value];
                var p2Val = player2Card[player1form.p1[g].value];
                
                if(p1Val < p2Val) {
                    result = "You lose a card";
                    if(you.getSize() === 0) {
                        result +=" and have been beaten, old sport. Click below to play again.";
                        endGame = true;
                    }
                    if(theDeck.getSize()!==0) {
                        cardNum = theDeck.getSize();
                        for(j=0;j<cardNum;j++) {
                            player2.enqueue(theDeck.dequeue());
                        }
                    }
                    player2.enqueue(player1Card);
                    player2.enqueue(player2Card);
                }
                else if(p1Val === p2Val) {
                    result = "A draw, cards placed in middle stack";
                    theDeck.enqueue(player1Card);
                    theDeck.enqueue(player2Card);
                }       
                else {
                    result = "You win a card";
                    if(player2.getSize()===0) {
                        result +=" You win! A true master of modern British politics :)";
                        endGame = true;
                    }
                    if(theDeck.getSize()!==0) {
                        cardNum = theDeck.getSize();
                        for(j=0;j<cardNum;j++) {
                            you.enqueue(theDeck.dequeue());
                        }
                    }           
                    you.enqueue(player2Card);
                    you.enqueue(player1Card);
                }
                drawP2Card();
            }
        }
        if(noValue === -1) {
            alert("Please select an attribute");
            noGo = false;
        }
        else{
            noGo = true;
            if(!endGame) {
                player1Card = you.dequeue();
                player2Card = player2.dequeue();
            }
        }
        draw();
        if(noGo) {
            document.getElementById("matchResult").firstChild.nodeValue=result;
            changeButtonFunction(next,"      Next card       ");
            changeCardValues();
        }
        if(endGame) {
            changeButtonFunction(initialise," Play Again ");
        }
        
        return false;
    }