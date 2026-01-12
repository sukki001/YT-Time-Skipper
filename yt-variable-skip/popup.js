document.getElementById("save").addEventListener("click", () => {
  const time = document.getElementById("skipTime").value;

  if(!time || time<=0 ) return;

  chrome.storage.sync.set({ skipTime: Number(time) }, () => {
    window.close();
  //  alert("Saved!");
  });
});
