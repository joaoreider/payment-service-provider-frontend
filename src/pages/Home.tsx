import { Button } from 'antd';
import BalanceCard from '../components/BalanceCard';
import PageTitle from '../components/PageTitle';
import { AiFillPlusSquare } from "react-icons/ai";
import TransactionsList from '../components/TransactionsList';

const transactions = [
  { id: 1, amount: 300, status: 'paid', date: 'August 14, 2024' },
  { id: 2, amount: 200, status: 'waiting', date: 'August 15, 2024' },
  { id: 3, amount: 300, status: 'paid', date: 'August 14, 2024' },
  { id: 4, amount: 200, status: 'waiting', date: 'August 15, 2024' },
  { id: 5, amount: 300, status: 'paid', date: 'August 14, 2024' },
  { id: 6, amount: 200, status: 'waiting', date: 'August 15, 2024' },
  { id: 7, amount: 300, status: 'paid', date: 'August 14, 2024' },
  { id: 8, amount: 200, status: 'waiting', date: 'August 15, 2024' },
];

const Home = () => {
  return (
    <>
      <PageTitle title="Home | PSP" />
      <div className='flex flex-col items-center min-h-screen bg-blue-100 px-80'>

        <div className="flex justify-center my-20">
            <div className="flex space-x-36">
              <BalanceCard balance={300} title="Available" textColor="text-green-500" />
              <BalanceCard balance={200} title="Waiting Funds" textColor="text-orange-500" />
            </div> 
          </div>
        <Button variant='outlined' className='flex justify-center' icon={<AiFillPlusSquare />} size='large'>Create Transaction</Button>
        <p className='text-lg mt-8 text-gray-500  w-1/2 '>History</p>
        <TransactionsList transactions={transactions} />

      </div>
 

    </>
  );
};

export default Home;
