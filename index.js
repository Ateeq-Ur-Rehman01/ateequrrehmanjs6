var student={
    name:'ATEEQ UR REHMAN',
    age:20,
    contact:7975280964,
    address:
    {
        city:'banglore',
        state:'karnataka',
        pin:560039,
    },

    hobbies:['drawing','drawing','Cricket'],

}

console.log(student);
console.log(student.hobbies[3])


for(i=0;i<=student.hobbies.length-1;i++)
{
    console.log(student.hobbies[i]);
}