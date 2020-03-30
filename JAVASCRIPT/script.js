function pingpong(playing, win) {
   	
    let result = [];

    if (win == false) {
        for (var i = 0; i < playing.length -1; i++) {
            result.push(playing[i]);
            result.push("Pong!");
        }
        result.push("Ping!");

    }

    else {
        for (var i = 0; i < playing.length; i++) {
            result.push(playing[i]);
            result.push("Pong!");
        }
    }
    return result;
}

var a = ["ping", "ping","ping", "ping" ];
console.log(pingpong(a, true));
