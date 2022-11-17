var portfolio = {
    Name: "",
    LastName: "",
    About: "",
    Experience: ["", ""],
    Education: ["", ""],
    Skills: ["", ""]
};
function GetName(name) {
    var name1 = document.getElementById("Name");
    name1.textContent = name;
}
function GetLastName(lastname) {
    var a = document.getElementById("LastName");
    a.textContent = lastname;
    return portfolio.LastName = lastname;
}
function GetAbout(about) {
    var a = document.getElementById("About");
    a.textContent = about;
    return portfolio.About = about;
}
function GetExperience(experience1, experience2) {
    var a = document.getElementById("Experience");
    a.textContent = experience1, experience2;
    return portfolio.Experience[0] = experience1, portfolio.Education[1] = experience2;
}
function GetEducation(education1, education2) {
    var a = document.getElementById("Education");
    a.textContent = education1, education2;
    return portfolio.Education[0] = education1, portfolio.Education[1] = education2;
}
function GetSkills(skill1, skill2) {
    var a = document.getElementById("Skills");
    a.textContent = skill1, skill2;
    return portfolio.Education[0] = skill1, portfolio.Education[1] = skill2;
}
function showFile1(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.onload = function (progressEvent) {
        var _a;
        var s = (_a = reader.result) === null || _a === void 0 ? void 0 : _a.toString();
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
