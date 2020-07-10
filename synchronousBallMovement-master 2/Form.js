class Form {
    constructor() {

    }
    display() {
        var title = createElement("H2");
        title.html("Car Racing Game");
        title.position(130, 0);
        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement("H3");
        input.position(130, 160);
        button.position(250, 200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playercount+=1;
            player.update(name);
            player.updateCount(playercount);
            greeting.html("Hello"+" "+ name);
            greeting.position(130, 160);
        })
    }
}