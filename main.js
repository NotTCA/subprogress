window.onload = function onLoad() {
  var line = new ProgressBar.Line("#progress", {
    color: "#FCB03C",
  });

  async function progress() {
    const data = await fetch(
      "https://mixerno.space/api/youtube-channel-counter/user/UCcfWjTmVGZasRkkn0uFGgfg"
    ).then((res) => res.json());
    var done = (data.counts[0].count / 1000) * 100;
    console.log(done);
    var percentStr = done.toString();
    if (done < 0.1) {
      percentStr = percentStr.slice(0, 9);
    } else {
      percentStr = percentStr.slice(0, 10);
    }
    document.getElementById("percent").innerHTML = percentStr + "%";
    return done;
  }

  line.animate(progress()); // Number from 0.0 to 1.0

  requestAnimationFrame(update);

  function update() {
    line.set(progress());
    requestAnimationFrame(update);
  }
};
