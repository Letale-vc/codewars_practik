
const textTest = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`

function topThreeWords(text) {

    const arrayStrings  = text.toLowerCase().replace( /[/!?,:.\/\\//\\//]/g, " ").split(' ') //?

    const objectCount = arrayStrings.reduce((acc, value)=>{
        return value === ''|| value === '\'' ? acc : {...acc, [value]: !acc[value]? 1: ++acc[value]}
    }, {})
    const arraySort = Object.entries(objectCount).sort(([name1,a],[name2,b]) => {
        if(b===a){
            if (arrayStrings.indexOf(name1) < arrayStrings.indexOf(name2)) {
                return -1
            }
            return 1
        }
        return b-a
    }).reduce((acc, [name,count])=>([...acc, name]),[])

    return arraySort.slice(0,3)
}



topThreeWords(textTest) //?
topThreeWords('a a c b b') //?
topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e') //?
