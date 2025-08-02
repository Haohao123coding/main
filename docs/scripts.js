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

function showBar(){
    const topBarContainer = document.getElementById("top-bar-items-id");
    topBarContainer.innerHTML = `
    ${topBarItems.map(item => {
        return `<a href="${item.urlOfA}"><button class="btntp">${item.text}</button></a>`;
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
    showAnnouncement();
});
