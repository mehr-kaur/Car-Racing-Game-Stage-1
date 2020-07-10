class Player {
    constructor() {

    }
    getCount() {
        var playercountref = database.ref('Playercount');
        playercountref.on("value", function(data){
            playercount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
            playercount: count 
        })
    }
    update(name){
        var playerindex = "Player"+playercount;
        database.ref(playerindex).set({
            name: name
        })
    }
}