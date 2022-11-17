function SeriesSum(n)
{
    let sum = 0
    let k = 1
    for (let i = 0; i < n; i++){
        sum += 1/k //?

        k += 3 //?
    }
    return sum.toFixed(2)
}

SeriesSum(2) //?