{
    // Union Types
    // type FrontendDeveloper="fakibazDeveloper" | "juniorDeveloper"
    // type FullstackDeveloper="frontendDeveloper" | "expertDeveloper"

    // type Developer = FrontendDeveloper | FullstackDeveloper

    // const newDeveloper: FrontendDeveloper = "juniorDeveloper";

    // type User={
    //     name: string;
    //     email?: string;
    //     gender: "male" | "Female";
    //     bloodGroup: "O+" | "A+" | "B+";
    // }

    // const user1: User={
    //     name: "Shawon",
    //     gender: "male",
    //     bloodGroup: "A+"
    // }
    /*----------------*/
    type FrontendDeveloper={
        skills: string[];
        designation1: "Frontend Developer"
    }
    type BackendDeveloper={
        skills: string[];
        designation2: "Backend Developer";
    }
    type FullstackDeveloper= FrontendDeveloper | BackendDeveloper;
    const fullStackDeveloper: FullstackDeveloper={
        skills: ["HTML", "CSS", "JavaScript", "Node"],
        designation1:"Frontend Developer",
  	    designation2:"Backend Developer"
    }
}