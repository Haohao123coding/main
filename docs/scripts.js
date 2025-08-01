const topBarItems = {
    1: {
        urlOfA: "https://haohao123coding.github.io/main/",
        text: "主页"
    },
    2: {
        urlOfA: "https://haohao123coding.github.io/main/blogmain",
        text: "博客"
    },
    3: {
        urlOfA: "https://haohao123coding.github.io/main/ac_records",
        text: "AC 记录"
    }
}

function showBar(){
    const topBarContainer = document.getElementById("top-bar-items-id");
    topBarContainer.innerHTML = `
    ${Object.entries(topBarItems).map(([num, item]) => {
        return `
            <a href="${item.urlOfA}"><button class="btntp">${item.text}</button></a>
        `;
    }).join("")}
    `
}

document.addEventListener('DOMContentLoaded', function(){
    showBar();
});
