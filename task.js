let n = parseInt(prompt("Enther the number"));

for(i = 1; i <= n; i++){
    if(n > 10 ){
        console.log(i);
    }
    else if(n <= 10){
        var x = Math.round(n/2)
        if(i == x){

        }
        else{
            console.log(i)
        }
        
    }
}