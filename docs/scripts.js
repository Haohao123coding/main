const topBarItems = [
    {
        urlOfA: "https://haohao123coding.github.io/main/",
        text: "主页"
    },
    {
        urlOfA: "https://haohao123coding.github.io/main/blogmain",
        text: "博客"
    },
    {
        urlOfA: "https://haohao123coding.github.io/main/ac_records",
        text: "AC 记录"
    }
]

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

function showBar(){
    const topBarContainer = document.getElementById("top-bar-items-id");
    topBarContainer.innerHTML = `
    ${topBarItems.map(item => {
        return `<a href="${item.urlOfA}"><button class="btntp">${item.text}</button></a>`;
    }).join("\n")}
    `
}

function showMyAccounts(){
    const accountContainer = document.getElementById("accounts-id");
    accountContainer.innerHTML = `
    ${myAccounts.map(item => {
        return `<a href="${item.urlOfA}" class = "outlink">${item.text}</a>`;
    }).join("\n")}
    `
}

function showAnnouncement(){
    const announcementContainer = document.getElementById("announcement-id");
    announcementContainer.innerHTML = `
    <button class = "btnclose" onclick = "closeAnnouncement()">关闭</button>
    <h3>公告 / Announcement</h3>
    <p>重构即将完成，敬请谅解。</p>
    <p>Refactoring is about to be completed, please understand.</p>
    `
}

function closeAnnouncement(){
    document.querySelector(".announcement").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function(){
    showBar();
    showMyAccounts();
    showAnnouncement();
});
