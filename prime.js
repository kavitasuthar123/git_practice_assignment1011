function checkprime(num){
    let factor=0;
    for(let i=1;i<=num;i++){
        if(num%i==1){
            factor++
        }
    }
    if(factor==2){
        console.log("prime number")
    }else {
        console.log("given number is not a prime number")
    }
}

checkprime(13);