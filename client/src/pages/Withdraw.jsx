import React, { useState, useEffect } from 'react';

import { DisplayCampaigns, CustomButton } from '../components';
import { useStateContext } from '../context';

const Withdraw = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [remainingTransactions, setRemainingTransactions] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) {
      fetchCampaigns();
    }
  }, [address, contract]);

  const handleLoadMoreTransactions = () => {
    setShowAllTransactions(true);
    setRemainingTransactions(campaigns.slice(3));
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">All Campaigns</h1>
      <DisplayCampaigns
        isLoading={isLoading}
        campaigns={campaigns.slice(0, 3)}
      />
      {!showAllTransactions && campaigns.length > 3 && (
        <div className="text-center mt-4">
          <CustomButton
            title="Load More Transactions"
            onClick={handleLoadMoreTransactions}
            styles="bg-gray-500 text-white hover:bg-gray-600"
          />
        </div>
      )}
      {showAllTransactions && (
        <>
          <h2 className="font-bold text-xl mt-6 mb-4">Remaining Transactions</h2>
          <DisplayCampaigns isLoading={isLoading} campaigns={remainingTransactions} />
        </>
      )}
      <div className="text-center mt-4">
        <CustomButton title="Withdraw" styles="bg-blue-500 text-white hover:bg-blue-600" />
      </div>
    </div>
  );
};

export default Withdraw;
