function checkprime(num){
    let factor=0;
    for(let i=0;i<=num;i++){
        if(num%i==1){
            factor++
        }
    }
    if(factor==i){
        console.log("prime number");
    }else {
        console.log("not a prime number")
    }
}

checkprime(13);