async function sendToken() {
  const to = document.getElementById("toAddress").value;
  const amount = document.getElementById("amount").value;

  if (!isValidInput(to, amount)) {
    alert("Invalid input");
    return;
  }

  const tx = {
    to: to,
    value: ethers.utils.parseEther(amount),
    gasLimit: GAS_LIMIT
  };

  const result = await signer.sendTransaction(tx);
  updateHash(result.hash);
}
