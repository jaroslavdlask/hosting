$(function () {
  console.log("HERE");
  document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault(),
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
  const e = document.getElementById("emoji-copybar"),
    t = document.getElementById("emoji-copydisplay");
  function emojiCopy() {
    const e = document.getElementById("emoji-copybar"),
      t = document.getElementById("emoji-copydisplay");
    let o = "",
      i = this.getAttribute("data-uni").split("_");
    for (let e = 0; e < i.length; e++)
      o += String.fromCodePoint(parseInt(i[e], 16));
    const a = document.createElement("textarea"),
      s = this.cloneNode(!0);
    t.children.length < 10
      ? ((e.value += o), t.appendChild(s))
      : (document.getElementById("emoji-maxmsg").classList.add("show"),
        setTimeout(function () {
          document.getElementById("emoji-maxmsg").classList.remove("show");
        }, 1e3)),
      (a.value = o),
      document.body.appendChild(a),
      a.select(),
      document.execCommand("copy"),
      document.body.removeChild(a);
  }
  (document.getElementById("emoji-remover").onclick = function () {
    t.removeChild(t.lastChild), (e.value = e.value.slice(0, -2));
  }),
    (document.getElementById("emoji-clear").onclick = function () {
      (t.innerHTML = ""), (e.value = "");
    }),
    (document.getElementById("emoji-copyall").onclick = function () {
      const t = document.createElement("textarea");
      (t.value = e.value),
        document.body.appendChild(t),
        t.select(),
        document.execCommand("copy"),
        document.body.removeChild(t);
    });
  let o = document.getElementsByClassName("qw");
  for (let e = 0; e < o.length; e++) o[e].onclick = emojiCopy;
  document.getElementById("emoji-page").addEventListener("change", function () {
    for (let e = 0; e < o.length; e++) o[e].onclick = emojiCopy;
  });
  let i = [];
  const a = document.getElementById("emoji-page__output"),
    s = document.getElementById("emoji-search");
  s.addEventListener("keyup", (e) => {
    const t = e.target.value.toLowerCase(),
      o = i.filter((e) => e.title.toLowerCase().includes(t));
    0 == s.value.length ? (a.innerHTML = "") : n(o);
  });
  const r = document.getElementsByClassName("qw");
  for (let e = 0; e < r.length; e++) i.push(r[e]);
  const n = (e) => {
    const t = e.map((e) => "" + e.outerHTML).join("");
    a.innerHTML = "<div>" + t + "</div>";
  };
  function init() {
    (document.getElementById("emoji-search").value = ""),
      (document.getElementById("emoji-copybar").value = "");
  }
  window.onload = init;
  //   const l = document.querySelector("#emoji-wrapper"),
  //     c = document.querySelector("#breakpoint"),
  //     d = (e) => {
  //       e[0].isIntersecting
  //         ? l.classList.remove("fixed")
  //         : l.classList.add("fixed");
  //     };
});
