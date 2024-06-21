const exchangeRates = {
    USD: { GBP: 0.85, GBP: 0.75 },
    EUR: { USD: 1.18, GBP: 0.88 },
    GBP: { USD: 1.34, EUR: 1.14 }
    // Add more exchange rates as needed
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Converted Amount: ${amount} ${toCurrency}`;
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
