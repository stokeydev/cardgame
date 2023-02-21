// (name, party, age(at death if deceased), in offce, election victories, principles, leadership, Economics, Foreign Policy, , charisma)

var cars = [
    new TopTrumpCard("Rishi Sunak", "Conservative", 42, 0.4, 0, 35, 65, 3, 75, 60, "images\/car_thumbs\/rish.jpeg"),
    new TopTrumpCard("Liz Truss", "Conservative", 47, 0.1, 0, 30, 20, 0, 80, 50, "images\/car_thumbs\/liz_truss.jpg"),
    new TopTrumpCard("Boris Johnson", "Conservative", 58, 3, 1, 0, 25, 10, 78, 88, "images\/car_thumbs\/boris.jpeg"),
    new TopTrumpCard("David Cameron", "Conservative", 56, 6, 2, 50, 70, 60, 70, 80, "images\/car_thumbs\/dcam.jpeg"),
    new TopTrumpCard("Gordon Brown", "Labour", 72, 3, 0, 86, 90, 90, 90, 70, "images\/car_thumbs\/brown.jpeg"),
    new TopTrumpCard("Tony Blair", "Labour", 69, 10, 3, 50, 90, 100, 30, 85, "images\/car_thumbs\/blair.jpeg"),
    new TopTrumpCard("John Major", "Conservative", 79, 7, 1, 80, 88, 80, 80, 30, "images\/car_thumbs\/major.jpeg"),
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
    new TopTrumpCard("Elizabeth II", "Monarch", 96, 70, 0, 65, 80, 80, 95, 100, "images\/car_thumbs\/qlizii.jpeg"),
    new TopTrumpCard("Charles III", "Monarch", 74, 0.5, 0, 88, 70, 70, 90, 65, "images\/car_thumbs\/charlesiii.jpeg"),
    new TopTrumpCard("Ed Miliband", "Labour", 26, 0, 0, 85, 30, 80, 80, 40, "images\/car_thumbs\/miliband.jpeg"),
    new TopTrumpCard("John Smith", "Labour", 63, 0, 0, 70, 70, 80, 80, 60, "images\/car_thumbs\/jsmith.jpeg"),
    new TopTrumpCard("Neil Kinnock", "Labour", 80, 0, 0, 65, 70, 70, 70, 65, "images\/car_thumbs\/kinnock.webp"),
    new TopTrumpCard("Michael Foot", "Labour", 90, 0, 0, 80, 40, 70, 70, 50, "images\/car_thumbs\/foot.jpeg"),
    new TopTrumpCard("Keir Starmer", "Labour", 60, 0, 0, 50, 80, 80, 80, 70, "images\/car_thumbs\/starmer.jpeg"),
    new TopTrumpCard("Jeremy Corbyn", "Labour", 73, 0, 0, 100, 20, 90, 70, 65, "images\/car_thumbs\/corbyn.jpeg"),
    new TopTrumpCard("Hugh Gaitskell", "Labour", 62, 0, 0, 60, 85, 80, 80, 70, "images\/car_thumbs\/gaitskell.jpeg"),
    new TopTrumpCard("Theresa May", "Conservative", 66, 3, 1, 65, 60, 60, 65, 50, "images\/car_thumbs\/tmay.jpeg"),
    new TopTrumpCard("Ian Duncan Smith", "Conservative", 68, 0, 0, 40, 20, 50, 50, 10, "images\/car_thumbs\/ids.jpeg"),
    new TopTrumpCard("William Hague", "Conservative", 61, 0, 0, 70, 65, 65, 65, 50, "images\/car_thumbs\/hague.jpeg"),
    new TopTrumpCard("Michael Howard", "Conservative", 81, 0, 0, 70, 70, 65, 65, 65,"images\/car_thumbs\/howard.jpeg")
    ];
    
    
    var content = "";
    var result = "";
    var endGame = false;
    var noGo = false;
    var noValue=-1;
    var you, player2, theDeck, player1Card, player2Card, ending, oppStack, yourStack, mainStack, g, i, j, cardNum;
    
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
    
    function drawP1Card() {
        document.getElementById("P1Flag").src = "images\/"+ player1Card.nation +".gif";
        document.getElementById("P1Flag").alt = player1Card.nation;
        
        document.getElementById("P1Car").src = player1Card.image;
        document.getElementById("P1Car").alt = player1Card.name;
        document.getElementById("P1Name").firstChild.nodeValue = player1Card.name;
        
        document.getElementById("P1Engine").lastChild.nodeValue = player1Card.engine + " yrs";
        document.getElementById("P1BHP").lastChild.nodeValue = player1Card.bhp;
        document.getElementById("P1RPM").lastChild.nodeValue = player1Card.rpm;
        document.getElementById("P1Accel").lastChild.nodeValue = player1Card.accel;
        document.getElementById("P1Speed").lastChild.nodeValue = player1Card.topSpeed;
        document.getElementById("P1Len").lastChild.nodeValue = player1Card.length;
        document.getElementById("P1Width").lastChild.nodeValue = player1Card.carWidth;
        document.getElementById("P1Price").lastChild.nodeValue = player1Card.price +" yrs";
    }
    
    function drawP2Card() {
        document.getElementById("P2Flag").src = "images\/"+ player2Card.nation +".gif";
        document.getElementById("P2Flag").alt = player2Card.nation;
        
        document.getElementById("P2Car").src = player2Card.image;
        document.getElementById("P2Car").alt = player2Card.name;
        document.getElementById("P2Name").firstChild.nodeValue = player2Card.name;
        
        document.getElementById("P2Engine").firstChild.nodeValue = player2Card.engine+" yrs";
        document.getElementById("P2BHP").firstChild.nodeValue = player2Card.bhp;
        document.getElementById("P2RPM").firstChild.nodeValue = player2Card.rpm;
        document.getElementById("P2Accel").firstChild.nodeValue = player2Card.accel;
        document.getElementById("P2Speed").firstChild.nodeValue = player2Card.topSpeed;
        document.getElementById("P2Len").firstChild.nodeValue = player2Card.length;
        document.getElementById("P2Width").firstChild.nodeValue = player2Card.carWidth;
        document.getElementById("P2Price").firstChild.nodeValue = player2Card.price +" yrs";
    }
    
    function clearP2Card() {
        document.getElementById("P2Flag").src = "images\/blank.gif";
        document.getElementById("P2Flag").alt = "Opponent Person Country";
        
        document.getElementById("P2Car").src = "images\/bigBlank.gif";
        document.getElementById("P2Car").alt = "Opponent Person Picture";
        document.getElementById("P2Name").firstChild.nodeValue = "????";
        if(document.getElementById("P2Engine").firstChild){
            document.getElementById("P2Engine").firstChild.nodeValue = "????";
            document.getElementById("P2BHP").firstChild.nodeValue = "????";
            document.getElementById("P2RPM").firstChild.nodeValue = "????";
            document.getElementById("P2Accel").firstChild.nodeValue = "????";
            document.getElementById("P2Speed").firstChild.nodeValue = "????";
            document.getElementById("P2Len").firstChild.nodeValue = "????";
            document.getElementById("P2Width").firstChild.nodeValue = "????";
            document.getElementById("P2Price").firstChild.nodeValue = "????";
        }
    }
    
    function changeButtonFunction(funcName, buttonText) {
        document.getElementById("compareButton").value=buttonText;
        document.getElementById("player1").onsubmit = funcName;
    }
    
    function changeCardValues() {
        document.getElementById("yourCards").firstChild.nodeValue = yourStack;
        document.getElementById("oppCards").firstChild.nodeValue = oppStack;
        document.getElementById("mainCards").firstChild.nodeValue = mainStack;
    }
    
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
            theDeck.enqueue(cars[i]);
        }
        
        var d=document;
        d.carImages = [];
        for(i=0; i<30; i++) {
            d.carImages[i]=new Image();
            d.carImages[i].src=cars[i].image;
        }
        
        d.carImages[31] = new Image();
        d.carImages[31].src= "images\/labour.gif";
        d.carImages[32] = new Image();
        d.carImages[32].src = "images\/labour.gif";
        d.carImages[33] = new Image();
        d.carImages[33].src = "images\/labour.gif";
        d.carImages[34] = new Image();
        d.carImages[34].src = "images\/labour.gif"; 
        d.carImages[35] = new Image();
        d.carImages[35].src = "images\/labour.gif"; 
        
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
    
    function initialise() {
        setup();
        document.getElementById("matchResult").firstChild.nodeValue="";
        changeCardValues();
        changeButtonFunction(compare,"Compare Cards");
        clearP2Card();
        
        return false;
    }
    
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
                        result +=" and you are out :P";
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
                        result +=" and you win the game!!!!!!!!!!";
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