let num = [8, 5]
console.log(`Nosso vetor é o ${num}`)

num[2] = 6
console.log(`Nosso vetor é o ${num}`)

num.push(9)

num.sort()

console.log(`Nosso vetor é o ${num}`)

console.log(`Nosso vetor é o ${num[0]}`)

for (var c in num){
    console.log(num[c])
}