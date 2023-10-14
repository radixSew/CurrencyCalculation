import React, { useEffect, useState } from 'react';
import axios  from "axios";


function MainPage() {
  // States for the form fields
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState('');
  const [convert, setConvert] = useState(0);
  const [currencyNames,setCurrencyNames] = useState([]);

  //handleSubmit methode
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  //Get all currency names
  useEffect(() => {
    const getCurrencyName = async () => {
      try {
        const responce =await axios.get(
          "http://localhost:5000/getAllCurrencies"
        );
        setCurrencyNames(responce.date);
      } catch (err) {
        console.error(err);
      }
    };
    getCurrencyName();
  },[]);
  return (
    <div>
      <h1 className='lg:mx-32 text-5xl font-bold text-blue-500'>Convert Your Currencies Today</h1>
      <p className='lg:mx-32 opacity-60 py-6'>Welcome</p>

      <div className='mt-5 flex items-center justify-center flex-col'>
        <section className='w-full lg:w-1/2'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                id={date}
                name={date}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required
              />
            </div>
            <div className="mb-4">
              <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                id={sourceCurrency}
                name={sourceCurrency}
                value={sourceCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option>Select Source Currency</option>
                {Object.keys(currencyNames).map((currency)=>(
                  <option className='p-1' key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
              <select
                onChange={(e) => setTargetCurrency(e.target.value)}
                id={targetCurrency}
                name={targetCurrency}
                value={targetCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option>Select Target Currency</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount Of Source Currency</label>
              <input
                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                type="text"
                id={amountInSourceCurrency}
                name={amountInSourceCurrency}
                value={amountInSourceCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Amount of Source Currency"
                required
              />
            </div>
            <button  className="py-3 px-3 bg-blue-500 hover:bg-blue-950 text-white font-medium rounded-md">Convert</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default MainPage;