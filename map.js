const params = new URLSearchParams(window.location.href);
const t = params.get("names");
const c = params.get("coords");
document.write('<area alt="' + t + '" title="' + t + '" href="" coords="' + c + '" shape="rect">');
