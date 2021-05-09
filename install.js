const install_url = 'PASTE HERE URL to raw index.js'
document.body.insertAdjacentHTML('afterend', "<script id='hack_script'></script>")
fetch(install_url)
.then(data => data.text())
.then(html => {
    hack_script.innerHTML = html;
});