const cleanNanpPhoneNumber = (phoneNumberInput) => {
  const characters = phoneNumberInput.split("");

  const numbers = characters.filter((character) => /[0-9]/.test(character));

  const hasInvalidDigitCount = (numbers.length < 10) || (numbers.length > 11);

  if (hasInvalidDigitCount) {
    return null;
  }

  const hasInvalidCountryCode = numbers.length === 11 && (numbers[0] !== "1");

  if (hasInvalidCountryCode) {
    return null;
  }

  const areaCode = numbers.slice(-10).slice(0, 3).join("");

  const hasInvalidAreaCode = areaCode[0] < 2;

  if (hasInvalidAreaCode) {
    return null;
  }

  const localNumber = numbers.slice(-7);

  const exchangeCode = localNumber.slice(0, 3).join("");

  const hasInvalidExchangeCode = exchangeCode[0] < 2;

  if (hasInvalidExchangeCode) {
    return null;
  }

  const subscriberNumber = localNumber.slice(-4).join("");

  const cleanedPhoneNumber = [...areaCode, ...exchangeCode, ...subscriberNumber]
    .join("");

  return cleanedPhoneNumber;
};

export default cleanNanpPhoneNumber;
