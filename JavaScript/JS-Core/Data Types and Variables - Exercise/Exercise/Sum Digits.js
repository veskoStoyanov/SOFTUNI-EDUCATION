function main(number) {
    let num= +number;
    let sum = 0;

    while (num>0){
        sum+=num % 10;
        num = parseInt(num / 10);
    }
    console.log(sum)
}