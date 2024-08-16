"use strict";
{
    //Spread Operators
    const Friends1 = ['John', 'Mike', 'Mary'];
    const Friends2 = ["Kollol", "Pintu", "Bhagwan"];
    Friends1.push(...Friends2);
    console.log(Friends1);
    /*-------------------*/
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        next: "Tanmoy"
    };
    const mentors2 = {
        cloud: "Nahid",
        dbms: "Mizan",
        prisma: "Pintu"
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //Rest Operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hello ${friend}`));
    };
    greetFriends('John', 'Mike');
}
