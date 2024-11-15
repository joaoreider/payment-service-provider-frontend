import { Button, Modal } from 'antd';
import BalanceCard from '../components/BalanceCard';
import PageTitle from '../components/PageTitle';
import { AiFillPlusSquare } from "react-icons/ai";
import TransactionsList from '../components/TransactionsList';
import CreateTransactionForm from '../components/CreateTransactionForm';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';



const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(0);
  const [waitingFundsBalance, setWaitingFundsBalance] = useState(0);
  async function fetchTransactions() {
    const response = await api.get('/transactions/28cdb13f-bb39-410b-86ca-043ebc30e5de')
    setTransactions(response.data);
  }

  async function fetchBalance() {
    const response = await api.get('/transactions/28cdb13f-bb39-410b-86ca-043ebc30e5de/balance')
    setAvailableBalance(response.data.available);
    setWaitingFundsBalance(response.data.waitingFunds);
  }

  useEffect(() => {
    fetchBalance();
    fetchTransactions();
  }, []);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = () => {
    fetchBalance();
    fetchTransactions();
    handleOk();
  };

  return (
    <>
      <PageTitle title="Home | PSP" />
      <div className='flex flex-col items-center min-h-screen bg-blue-100 px-80'>

        <div className="flex justify-center my-20">
            <div className="flex space-x-36">
              <BalanceCard balance={availableBalance} title="Available" textColor="text-green-500" />
              <BalanceCard balance={waitingFundsBalance} title="Waiting Funds" textColor="text-orange-500" />
            </div> 
          </div>
        <Button variant='outlined' className='flex justify-center' icon={<AiFillPlusSquare />} size='large' onClick={showModal}>Create Transaction</Button>
        <p className='text-lg mt-8 text-gray-500  w-1/2 '>History</p>
        <TransactionsList transactions={transactions} />
        <Modal title="Create Transaction" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered  footer={[]} >
          < CreateTransactionForm onSubmit={handleFormSubmit} />
        </Modal>

      </div>



    </>
  );
};

export default Home;
