const install_url = 'https://raw.githubusercontent.com/Dimassss/zno.online.hack/main/index.js'
document.body.insertAdjacentHTML('afterend', "<script id='hack_script'></script>")
fetch(install_url)
.then(data => data.text())
.then(html => {
    hack_script.innerHTML = html;
});