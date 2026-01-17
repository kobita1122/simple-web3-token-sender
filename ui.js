async function updateNetwork() {
  const name = await getNetworkName();
  document.getElementById("network").innerText = name;
}

function updateHash(hash) {
  document.getElementById("txHash").innerText = hash;
}
