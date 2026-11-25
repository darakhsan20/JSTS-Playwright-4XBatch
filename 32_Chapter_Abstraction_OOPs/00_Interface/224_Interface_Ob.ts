interface BasePage{
    url:string
    title:string
}
interface LoginPAGE extends BasePage{
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}

interface FreeTrailPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}

const loginPage1:LoginPAGE = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
}
let freeTrialPage: FreeTrailPage = {
    url: "/free-trial",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit"
}

console.log("URL:", loginPage1.url);
console.log("Title:", loginPage1.title);
console.log("Username field:", loginPage1.usernameSelector);