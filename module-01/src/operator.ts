{
    //Spread Operators

const Friends1:string[]=['John', 'Mike', 'Mary'];
const Friends2:string[]=["Kollol", "Pintu", "Bhagwan"];

Friends1.push(...Friends2);
console.log(Friends1);

/*-------------------*/
const mentors1={
    typescript:"Mezba",
    redux: "Mir",
    next: "Tanmoy"
}
const mentors2={
    cloud:"Nahid",
    dbms: "Mizan",
    prisma: "Pintu"
}
const mentorList={...mentors1, ...mentors2};
  
//Rest Operator

  const greetFriends= (...friends:string[])=>{
    friends.forEach((friend:string)=>
      console.log(`Hello ${friend}`)
  );
}
greetFriends('John', 'Mike');
}
