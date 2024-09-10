const currencies = [{currencyCode: "AED", currencyName: "UAE Dirham"},
    {currencyCode: "AFN", currencyName: "Afghan Afghani"},
    {currencyCode: "ALL", currencyName: "Albanian Lek"},
    {currencyCode: "AMD", currencyName: "Armenian Dram"},
    {currencyCode: "ANG", currencyName: "Netherlands Antillian Guilder"},
    {currencyCode: "AOA", currencyName: "Angolan Kwanza"},
    {currencyCode: "ARS", currencyName: "Argentine Peso"},
    {currencyCode: "AUD", currencyName: "Australian Dollar"},
    {currencyCode: "AWG", currencyName: "Aruban Florin"},
    {currencyCode: "AZN", currencyName: "Azerbaijani Manat"},
    {currencyCode: "BAM", currencyName: "Bosnia and Herzegovina Mark"},
    {currencyCode: "BBD", currencyName: "Barbados Dollar"},
    {currencyCode: "BDT", currencyName: "Bangladeshi Taka"},
    {currencyCode: "BGN", currencyName: "Bulgarian Lev"},
    {currencyCode: "BHD", currencyName: "Bahraini Dinar"},
    {currencyCode: "BIF", currencyName: "Burundian Franc"},
    {currencyCode: "BMD", currencyName: "Bermudian Dollar"},
    {currencyCode: "BND", currencyName: "Brunei Dollar"},
    {currencyCode: "BOB", currencyName: "Bolivian Boliviano"},
    {currencyCode: "BRL", currencyName: "Brazilian Real"},
    {currencyCode: "BSD", currencyName: "Bahamian Dollar"},
    {currencyCode: "BTN", currencyName: "Bhutanese Ngultrum"},
    {currencyCode: "BWP", currencyName: "Botswana Pula"},
    {currencyCode: "BYN", currencyName: "Belarusian Ruble"},
    {currencyCode: "BZD", currencyName: "Belize Dollar"},
    {currencyCode: "CAD", currencyName: "Canadian Dollar"},
    {currencyCode: "CDF", currencyName: "Congolese Franc"},
    {currencyCode: "CHF", currencyName: "Swiss Franc"},
    {currencyCode: "CLP", currencyName: "Chilean Peso"},
    {currencyCode: "CNY", currencyName: "Chinese Renminbi"},
    {currencyCode: "COP", currencyName: "Colombian Peso"},
    {currencyCode: "CRC", currencyName: "Costa Rican Colon"},
    {currencyCode: "CUP", currencyName: "Cuban Peso"},
    {currencyCode: "CVE", currencyName: "Cape Verdean Escudo"},
    {currencyCode: "CZK", currencyName: "Czech Koruna"},
    {currencyCode: "DJF", currencyName: "Djiboutian Franc"},
    {currencyCode: "DKK", currencyName: "Danish Krone"},
    {currencyCode: "DOP", currencyName: "Dominican Peso"},
    {currencyCode: "DZD", currencyName: "Algerian Dinar"},
    {currencyCode: "EGP", currencyName: "Egyptian Pound"},
    {currencyCode: "ERN", currencyName: "Eritrean Nakfa"},
    {currencyCode: "ETB", currencyName: "Ethiopian Birr"},
    {currencyCode: "EUR", currencyName: "Euro"},
    {currencyCode: "FJD", currencyName: "Fiji Dollar"},
    {currencyCode: "FKP", currencyName: "Falkland Islands Pound"},
    {currencyCode: "FOK", currencyName: "Faroese Króna"},
    {currencyCode: "GBP", currencyName: "Pound Sterling"},
    {currencyCode: "GEL", currencyName: "Georgian Lari"},
    {currencyCode: "GGP", currencyName: "Guernsey Pound"},
    {currencyCode: "GHS", currencyName: "Ghanaian Cedi"},
    {currencyCode: "GIP", currencyName: "Gibraltar Pound"},
    {currencyCode: "GMD", currencyName: "Gambian Dalasi"},
    {currencyCode: "GNF", currencyName: "Guinean Franc"},
    {currencyCode: "GTQ", currencyName: "Guatemalan Quetzal"},
    {currencyCode: "GYD", currencyName: "Guyanese Dollar"},
    {currencyCode: "HKD", currencyName: "Hong Kong Dollar"},
    {currencyCode: "HNL", currencyName: "Honduran Lempira"},
    {currencyCode: "HRK", currencyName: "Croatian Kuna"},
    {currencyCode: "HTG", currencyName: "Haitian Gourde"},
    {currencyCode: "HUF", currencyName: "Hungarian Forint"},
    {currencyCode: "IDR", currencyName: "Indonesian Rupiah"},
    {currencyCode: "ILS", currencyName: "Israeli New Shekel"},
    {currencyCode: "IMP", currencyName: "Manx Pound"},
    {currencyCode: "INR", currencyName: "Indian Rupee"},
    {currencyCode: "IQD", currencyName: "Iraqi Dinar"},
    {currencyCode: "IRR", currencyName: "Iranian Rial"},
    {currencyCode: "ISK", currencyName: "Icelandic Króna"},
    {currencyCode: "JEP", currencyName: "Jersey Pound"},
    {currencyCode: "JMD", currencyName: "Jamaican Dollar"},
    {currencyCode: "JOD", currencyName: "Jordanian Dinar"},
    {currencyCode: "JPY", currencyName: "Japanese Yen"},
    {currencyCode: "KES", currencyName: "Kenyan Shilling"},
    {currencyCode: "KGS", currencyName: "Kyrgyzstani Som"},
    {currencyCode: "KHR", currencyName: "Cambodian Riel"},
    {currencyCode: "KID", currencyName: "Kiribati Dollar"},
    {currencyCode: "KMF", currencyName: "Comorian Franc"},
    {currencyCode: "KRW", currencyName: "South Korean Won"},
    {currencyCode: "KWD", currencyName: "Kuwaiti Dinar"},
    {currencyCode: "KYD", currencyName: "Cayman Islands Dollar"},
    {currencyCode: "KZT", currencyName: "Kazakhstani Tenge"},
    {currencyCode: "LAK", currencyName: "Lao Kip"},
    {currencyCode: "LBP", currencyName: "Lebanese Pound"},
    {currencyCode: "LKR", currencyName: "Sri Lanka Rupee"},
    {currencyCode: "LRD", currencyName: "Liberian Dollar"},
    {currencyCode: "LSL", currencyName: "Lesotho Loti"},
    {currencyCode: "LYD", currencyName: "Libyan Dinar"},
    {currencyCode: "MAD", currencyName: "Moroccan Dirham"},
    {currencyCode: "MDL", currencyName: "Moldovan Leu"},
    {currencyCode: "MGA", currencyName: "Malagasy Ariary"},
    {currencyCode: "MKD", currencyName: "Macedonian Denar"},
    {currencyCode: "MMK", currencyName: "Burmese Kyat"},
    {currencyCode: "MNT", currencyName: "Mongolian Tögrög"},
    {currencyCode: "MOP", currencyName: "Macanese Pataca"},
    {currencyCode: "MRU", currencyName: "Mauritanian Ouguiya"},
    {currencyCode: "MUR", currencyName: "Mauritian Rupee"},
    {currencyCode: "MVR", currencyName: "Maldivian Rufiyaa"},
    {currencyCode: "MWK", currencyName: "Malawian Kwacha"},
    {currencyCode: "MXN", currencyName: "Mexican Peso"},
    {currencyCode: "MYR", currencyName: "Malaysian Ringgit"},
    {currencyCode: "MZN", currencyName: "Mozambican Metical"},
    {currencyCode: "NAD", currencyName: "Namibian Dollar"},
    {currencyCode: "NGN", currencyName: "Nigerian Naira"},
    {currencyCode: "NIO", currencyName: "Nicaraguan Córdoba"},
    {currencyCode: "NOK", currencyName: "Norwegian Krone"},
    {currencyCode: "NPR", currencyName: "Nepalese Rupee"},
    {currencyCode: "NZD", currencyName: "New Zealand Dollar"},
    {currencyCode: "OMR", currencyName: "Omani Rial"},
    {currencyCode: "PAB", currencyName: "Panamanian Balboa"},
    {currencyCode: "PEN", currencyName: "Peruvian Sol"},
    {currencyCode: "PGK", currencyName: "Papua New Guinean Kina"},
    {currencyCode: "PHP", currencyName: "Philippine Peso"},
    {currencyCode: "PKR", currencyName: "Pakistani Rupee"},
    {currencyCode: "PLN", currencyName: "Polish Złoty"},
    {currencyCode: "PYG", currencyName: "Paraguayan Guaraní"},
    {currencyCode: "QAR", currencyName: "Qatari Riyal"},
    {currencyCode: "RON", currencyName: "Romanian Leu"},
    {currencyCode: "RSD", currencyName: "Serbian Dinar"},
    {currencyCode: "RUB", currencyName: "Russian Ruble"},
    {currencyCode: "RWF", currencyName: "Rwandan Franc"},
    {currencyCode: "SAR", currencyName: "Saudi Riyal"},
    {currencyCode: "SBD", currencyName: "Solomon Islands Dollar"},
    {currencyCode: "SCR", currencyName: "Seychellois Rupee"},
    {currencyCode: "SDG", currencyName: "Sudanese Pound"},
    {currencyCode: "SEK", currencyName: "Swedish Krona"},
    {currencyCode: "SGD", currencyName: "Singapore Dollar"},
    {currencyCode: "SHP", currencyName: "Saint Helena Pound"},
    {currencyCode: "SLE", currencyName: "Sierra Leonean Leone"},
    {currencyCode: "SOS", currencyName: "Somali Shilling"},
    {currencyCode: "SRD", currencyName: "Surinamese Dollar"},
    {currencyCode: "SSP", currencyName: "South Sudanese Pound"},
    {currencyCode: "STN", currencyName: "São Tomé and Príncipe Dobra"},
    {currencyCode: "SYP", currencyName: "Syrian Pound"},
    {currencyCode: "SZL", currencyName: "Eswatini Lilangeni"},
    {currencyCode: "THB", currencyName: "Thai Baht"},
    {currencyCode: "TJS", currencyName: "Tajikistani Somoni"},
    {currencyCode: "TMT", currencyName: "Turkmenistan Manat"},
    {currencyCode: "TND", currencyName: "Tunisian Dinar"},
    {currencyCode: "TOP", currencyName: "Tongan Paʻanga"},
    {currencyCode: "TRY", currencyName: "Turkish Lira"},
    {currencyCode: "TTD", currencyName: "Trinidad and Tobago Dollar"},
    {currencyCode: "TVD", currencyName: "Tuvaluan Dollar"},
    {currencyCode: "TWD", currencyName: "New Taiwan Dollar"},
    {currencyCode: "TZS", currencyName: "Tanzanian Shilling"},
    {currencyCode: "UAH", currencyName: "Ukrainian Hryvnia"},
    {currencyCode: "UGX", currencyName: "Ugandan Shilling"},
    {currencyCode: "USD", currencyName: "United States Dollar"},
    {currencyCode: "UYU", currencyName: "Uruguayan Peso"},
    {currencyCode: "UZS", currencyName: "Uzbekistani So'm"},
    {currencyCode: "VES", currencyName: "Venezuelan Bolívar Soberano"},
    {currencyCode: "VND", currencyName: "Vietnamese Đồng"},
    {currencyCode: "VUV", currencyName: "Vanuatu Vatu"},
    {currencyCode: "WST", currencyName: "Samoan Tālā"},
    {currencyCode: "XAF", currencyName: "Central African CFA Franc"},
    {currencyCode: "XCD", currencyName: "East Caribbean Dollar"},
    {currencyCode: "XDR", currencyName: "Special Drawing Rights"},
    {currencyCode: "XOF", currencyName: "West African CFA franc"},
    {currencyCode: "XPF", currencyName: "CFP Franc"},
    {currencyCode: "YER", currencyName: "Yemeni Rial"},
    {currencyCode: "ZAR", currencyName: "South African Rand"},
    {currencyCode: "ZMW", currencyName: "Zambian Kwacha"},
    {currencyCode: "ZWL", currencyName: "Zimbabwean Dollar"}];
    
// populating the select boxes FROM and TO with options
const fromBox = document.getElementById('from');
const toBox = document.getElementById('to');

for (let i = 0; i < currencies.length; i++) {
    let newOption = document.createElement('option');
    newOption.value = currencies[i].currencyCode;
    if (newOption.value === 'ILS') {
        newOption.selected = true;
    }
    newOption.textContent = `${currencies[i].currencyCode} - ${currencies[i].currencyName}`;
    fromBox.appendChild(newOption);
}

for (let i = 0; i < currencies.length; i++) {
    let newOption = document.createElement('option');
    newOption.value = currencies[i].currencyCode;
    if (newOption.value === 'USD') {
        newOption.selected = true;
    }
    newOption.textContent = `${currencies[i].currencyCode} - ${currencies[i].currencyName}`;
    toBox.appendChild(newOption);
}

// adding the fucntion to the submit button to extract user data from the form
const submitButton = document.getElementById("submit");
submitButton.addEventListener('click', e => {
    e.preventDefault();

    const myForm = document.querySelector('form');
    let fromCurrency = myForm.from.value;
    let toCurrency = myForm.to.value;
    let amount =myForm.amount.value;

    getResult(fromCurrency, toCurrency, amount);
});

// fuction called by submit button taking user data ane making query to the API
const getResult = (fromCurrency, toCurrency, amount) => {
const baseUrl = 'https://v6.exchangerate-api.com/v6/';
const api_key = '38662ed1c4ddfcec0ca37f8b';
let request = `/pair/${fromCurrency}/${toCurrency}/${amount}`;
let requestUrl = baseUrl + api_key + request;

let response = fetch(requestUrl);
response
.then(result => result.json())
.then(data => {
    render(data.conversion_result, data.target_code);
});
}

// function to render data from the API query to the result paragraph
const render = (result, toCurrency) => {
    if (result === undefined) {
        result = 0;
    }
    let resultParagraph = document.getElementById('result');
    let resultText = `${result} ${toCurrency}`;
    resultParagraph.textContent = resultText;
}

// flip button functionality
const flipButton = document.getElementById('flip');
flipButton.addEventListener('click', (e) => {
    e.preventDefault();
    const myForm = document.querySelector('form');
    let fromCurrency = myForm.from.value;
    let toCurrency = myForm.to.value;
    myForm.from.value = toCurrency;
    myForm.to.value = fromCurrency;
})


// optional functionality for the flip button to aslo immediately convert the given amount
// flipButton.addEventListener('click', e => {
//     e.preventDefault();

//     const myForm = document.querySelector('form');
//     let fromCurrency = myForm.from.value;
//     let toCurrency = myForm.to.value;
//     let amount =myForm.amount.value;

//     getResult(fromCurrency, toCurrency, amount);
// });