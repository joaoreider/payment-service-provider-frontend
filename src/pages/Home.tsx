import { Button } from 'antd';
import BalanceCard from '../components/BalanceCard';
import PageTitle from '../components/PageTitle';
import { AiFillPlusSquare } from "react-icons/ai";


const Home = () => {
  return (
    <>
      <PageTitle title="Home | PSP" />
      <div className='flex flex-col items-center min-h-screen bg-blue-100'>

        <div className="flex justify-center my-20">
            <div className="flex space-x-36">
              <BalanceCard balance={300} title="Available" textColor="text-green-500" />
              <BalanceCard balance={200} title="Waiting Funds" textColor="text-orange-500" />
            </div> 
          </div>
        <Button variant='outlined' className='flex justify-center' icon={<AiFillPlusSquare />} size='large'>Create Transaction</Button>

      </div>
 

    </>
  );
};

export default Home;
