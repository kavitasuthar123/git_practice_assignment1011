function checkprime(num){
    let factor=0;
    for(let i=0;i<=num;i++){
        if(num%i==1){
            factor++
        }
    }
    if(factor==i){
        console.log("given number is a prime number");
    }else {
        console.log("given number is not a prime number")
    }
}

checkprime(13);