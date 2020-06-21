const GameState = Object.freeze({
    STARTING:   Symbol("starting"),
    SLEEP:  Symbol("sleep"),
    CAT: Symbol("cat"),
    OUTSIDE: Symbol("outside"),
    OWNER: Symbol("owner"),
    DRACULA: Symbol("dracula")
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.STARTING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.STARTING:
                sReply = `On July 21st, you decide you want to go to bed early for a change instead of gaming with your friends.
                You end up passing out from a hard of day of work. But a few hours later, you wake up in the middle of the night to a loud noise.
                The noise seemed to have come from your closet. Do you want to CHECK the closet or IGNORE it and go back to sleep?`;
                this.stateCur = GameState.SLEEP;
                break;
            case GameState.SLEEP:
                if(sInput.toLowerCase().match("ignore")){
                    sReply = "You try to go back to sleep, but you hear a noise from the closet again. Do you want to CHECK the closet or IGNORE it and go back to sleep again?";
                    this.stateCur = GameState.SLEEP;
                }else if(sInput.toLowerCase().match("check")){
                    sReply =`You walk to your closet and open the door to find a black cat in your closet.
                    You wonder this cat got into your closet but you realize it's just a harmless cat. What could go wrong?
                    Do you want to let the cat STAY for the night or let the cat OUTSIDE?`;
                    this.stateCur = GameState.CAT;
                }else{
                    sReply ="Invalid response... Do you want to CHECK the closet or IGNORE it and go back to sleep?";
                    this.stateCur = GameState.SLEEP;
                }
                break;
            case GameState.CAT:
                if(sInput.toLowerCase().match("outside")){
                    sReply = `You pick up the cat and let the cat outside. It must of been a stray! You proceed to go back to bed.
                    You try to go back to sleep, but you hear a noise from the closet again. Do you want to CHECK the closet or IGNORE it and go back to sleep again?`;
                    this.stateCur = GameState.SLEEP;
                }else if(sInput.toLowerCase().match("stay")){
                    sReply =`You decide to let the cat stay and you go into the kitchen to get it some milk.
                    You leave it a bowl of milk and give it a blanket to sleep on in the living room. As you are about to go back to bed, you hear the doorbell ring.
                    Do you want to GET the door or go back to BED?`;
                    this.stateCur = GameState.OWNER;
                }else{
                    sReply ="Invalid response... Do you want to let the cat STAY for the night or let the cat OUTSIDE?";
                    this.stateCur = GameState.CAT;
                }
                break;
            case GameState.OWNER:
                if(sInput.toLowerCase().match("bed")){
                    sReply = "You try to go back to bed, but the doorbell keeps ringing. Do you want to GET the door or go back to BED?"
                    this.stateCur = GameState.OWNER;
                }else if(sInput.toLowerCase().match("get")){
                    sReply = `You answer the door and you see a man dressed in a Dracula costume and he says 'Have you seen my cat? I can sense that he is here
                    Do you want response with YES or NO?`;
                    this.stateCur = GameState.DRACULA;
                }else{
                    sReply ="Invalid response... Do you want response with YES or NO?";
                    this.stateCur = GameState.OWNER;
                }
                break;
            case GameState.DRACULA:
                if(sInput.toLowerCase().match("yes")){
                    sReply = `You respond with yes and bring the cat to the man in the Dracula Costume. He thanks you and proceeds to leave with his cat. But before he leaves, he provides you with a gold coin as a token of his appreciation. 
                    He explains it will give you good luck in the future.
                    You take the coin and decide to go back to bed. You place the coin on your night stand and you fall sound asleep.
                    The next morning, you receive a message in your group chat from all your friends telling you about a bizarre incident that happened to them last night involving a cat.
                    You look at your night stand for the coin that the man gave you, but it was gone. You remember he said it was good luck, so you check your lottery ticket for the winning numbers. You won $1,000. Don't question it and take the money. Game Over`;
                    this.stateCur = GameState.STARTING;
                }else if(sInput.toLowerCase().match("no")){
                    sReply = `The man in the Dracula Costume is furious as he sees his cat running down the hallway. He picks up his cat and leaves.
                    Before he gets into his car, he says he has casted a spell on you to receive bad luck for the next 10 years.
                    Game Over... from this point on you will have bad luck for the next 10 years`;
                    this.stateCur = GameState.STARTING;
                }else{
                    sReply ="Invalid response...Do you want response with YES or NO?";
                    this.stateCur = GameState.DRACULA;
                }
                break;
        }
        return([sReply]);
    }
}