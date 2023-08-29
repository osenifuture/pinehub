import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.coincap.io/v2/assets';
const API_KEY = 'YOUR_COINCAP_API_KEY'; 

const formatNumber = number => {
  if (number >= 1e9) {
    return `$${(number / 1e9).toFixed(2)}b`;
  } else if (number >= 1e6) {
    return `$${(number / 1e6).toFixed(2)}m`;
  } else {
    return `$${number.toFixed(2)}`;
  }
};

const TopCryptocurrencies = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
          params: {
            limit: 15, 
          },
        });

        setCryptoData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="top-crypto-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>VWAP (24Hr)</th>
            <th>Supply</th>
            <th>Volume (24Hr)</th>
            <th>Change (24Hr)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map(crypto => (
            <tr key={crypto.id}>
              <td className="crypto-name">{crypto.name}</td>
              <td>${parseFloat(crypto.priceUsd).toFixed(2)}</td>
              <td>{formatNumber(parseFloat(crypto.marketCapUsd))}</td>
              <td>${parseFloat(crypto.vwap24Hr).toFixed(2)}</td>
              <td>{formatNumber(parseFloat(crypto.supply))}</td>
              <td>{formatNumber(parseFloat(crypto.volumeUsd24Hr))}</td>
              <td>{parseFloat(crypto.changePercent24Hr).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCryptocurrencies;

