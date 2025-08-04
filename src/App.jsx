import { useState, useEffect } from 'react'
import './App.css'

const BASE_URL = "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=16a42e2c6dc944a1a0360d93bdc685ab&format=json";

function App() {

  const [currencyList, setCurrencyList] = useState([])

  const [rates, setRates] = useState({})

  const [from, setFrom] = useState("USD")

  const [to, setTo] = useState("EUR")

  const [input, setInput] = useState(1)

  const [output, setOutput] = useState(0)

  const [date, setDate] = useState(null);



  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(BASE_URL)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setRates(data.rates)
        setDate(data.date)
        setCurrencyList(Object.keys(data.rates).sort())
      }
      catch (e) {
        console.error("Failed to fetch currency data:", e);
      }
    }
    fetchRates()
  }, [])

  useEffect(() => {
    if (rates[from] && rates[to] && input) {
      convertCurrency();
    }
  }, [rates, from, to, input])

  const convertCurrency = () => {
    if (rates[from] && rates[to] && input) {
      const fromRate = rates[from]
      const toRate = rates[to]
      const result = input / parseFloat(fromRate) * parseFloat(toRate)
      setOutput(result.toFixed(4))
    }
  }


  return (
    <>
      <div className="flex items-center justify-center min-h-screen rounded-2xl bg-gray-100 dark:bg-gray-900 font-sans p-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
            Currency Converter
          </h1>
          {date && (
            <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
              Rates as of: {new Date(date).toLocaleDateString()}
            </p>
          )}

          <div className="mb-4">
            <label htmlFor="input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amount
            </label>
            <input
              id="input"
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
              min="0"
            />
          </div>

          <div className="flex justify-between items-center mb-6 space-x-4">
            <div className="w-1/2">
              <label htmlFor="from" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                From
              </label>
              <select
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
              >
                {currencyList.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>

            <div className="w-1/2">
              <label htmlFor="to" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                To
              </label>
              <select
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
              >
                {currencyList.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center shadow-inner">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              Converted Amount
            </p>
            <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">
              {output} {to}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {input} {from} = {output} {to}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
