function isValidInput(address, amount) {
  if (!address || address.length !== 42) {
    return false;
  }
  if (!amount || Number(amount) <= 0) {
    return false;
  }
  return true;
}
