const myAccounts = [
    {
        urlOfA: "https://github.com/Haohao123coding",
        text: "GitHub"
    },
    {
        urlOfA: "https://www.luogu.com.cn/user/1592447",
        text: "洛谷"
    },
    {
        urlOfA: "https://codeforces.com/profile/Haohao123coding",
        text: "Codeforces"
    },
    {
        urlOfA: "https://atcoder.jp/users/Haohao123coding",
        text: "Atcoder"
    },
    {
        urlOfA: "https://loj.ac/u/Haohao123coding",
        text: "LOJ(LibreOJ)"
    }
]

function showMyAccounts(){
    const accountContainer = document.getElementById("accounts-id");
    accountContainer.innerHTML = `
    ${myAccounts.map(item => {
        return `<button onclick = "window.open('${item.urlOfA}')" class = "btntp">${item.text}</button>`;
    }).join("\n")}
    `
}

document.addEventListener('DOMContentLoaded', function(){
    showMyAccounts();
});
