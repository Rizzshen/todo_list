const arr = ["He", "She","It", "Superman"]
const newArr = arr.map((item)=>{
    return item.toUpperCase();
});
console.log(newArr);
const stud_scores=[40, 50, 55, 65, 70];
const stud_passed_score = stud_scores.filter((a)=> {
    return a >=40;
})
console.log(stud_scores);

const arrayOfStrings = ["Cat", "Dog", "Human", "Elephant"];
const newArrayOfStrings = arrayOfStrings.filter((i)=>
{
    return i.length>=5;
})
console.log(newArrayOfStrings);

const prod = stud_scores.reduce((i, c)=>{
    return i * c;
},1)
console.log(prod);

const users= [{name: "Rishen", age: 1}, {name: "Bibu", age: 3}];
const ages = users.reduce((i, totalAge)=>{
    return i + totalAge.age;
},0);
console.log(ages);

const arrayOfNames = ["Rishen", "Bibuu", "Baddie"];
arrayOfNames.forEach((item, index, arrr)=>{
    console.log(item, index, arrr);
})

const olderAge = users.filter((index)=>{
    return index>17;
});
const newArrayOfAges = olderAge.map((item)=>{
    return item.name;
})
console.log(newArrayOfAges);

const todoList= [
    {
        taskname: "Write a Poem",
        completed: false
    },
    {
        taskname: "Write a Poem",
        completed: false
    },
    {
        taskname: "Write a Poem",
        completed: false
    }
];
