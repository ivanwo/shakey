let virbating = false;
let item;

function shake(){
    if(vibrating){
        clearInterval(item);
        vibrating = false;
    }
    else{
        item = setInterval( _ => 
            {
                navigator.vibrate(20);
            }, 100);
        vibrating = true;
    }
}