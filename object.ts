interface People{
    Name: string,
    LastName: string,
    About: string,
    Experience: [string, string],
    Education: [string, string],
    Skills: [string, string],
}

let portfolio: People={
    Name:"",
    LastName:"",
    About:"",
    Experience:["",""],
    Education:["",""],
    Skills:["",""],
}

function GetName(name: string): void {
    const name1 = document.getElementById("Name");
    name1.textContent=name;
}

function GetLastName(lastname: string): string {
    const a = document.getElementById("LastName");
    a.textContent=lastname;
    return portfolio.LastName = lastname;
}

function GetAbout(about: string): string {
    const a = document.getElementById("About");
    a.textContent = about;
    return portfolio.About = about;
}

function GetExperience(experience1: string, experience2: string): string {
    const a = document.getElementById("Experience");
    a.textContent = experience1, experience2;
    return portfolio.Experience[0] = experience1, portfolio.Education[1] = experience2;
}

function GetEducation(education1: string, education2: string): string {
    const a = document.getElementById("Education");
    a.textContent = education1, education2;
    return portfolio.Education[0] = education1, portfolio.Education[1] = education2;
}

function GetSkills(skill1: string, skill2: string): string {
    const a = document.getElementById("Skills");
    a.textContent = skill1, skill2;
    return portfolio.Education[0] = skill1, portfolio.Education[1] = skill2;
}

function showFile1(input): void {
    let file = input.files[0];

    let reader = new FileReader();
    reader.onload = function (progressEvent) {
        var s =reader.result?.toString();
        console.log(s);
    var arr = s.split('\n');
    GetName(arr[0]);
    GetLastName(arr[1]);
    GetAbout(arr[2]);
    GetExperience(arr[3], arr[4]);
    GetEducation(arr[5], arr[6]);
    GetSkills(arr[7], arr[8]);
    };
}