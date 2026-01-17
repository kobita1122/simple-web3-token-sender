document.getElementById("connectBtn").addEventListener("click", async () => {
  await connectWallet();
  await updateNetwork();
});

document.getElementById("sendBtn").addEventListener("click", async () => {
  await sendToken();
});
