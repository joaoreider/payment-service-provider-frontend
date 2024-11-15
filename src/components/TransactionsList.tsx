import { List, Avatar } from 'antd';
import { AiTwotoneDollarCircle } from 'react-icons/ai';

interface Transaction {
  id: number;
  value: number;
  description: string;
  paymentMethod: string;
}

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList= ({ transactions }: TransactionsListProps) => {
  return (
    <div className='overflow-y-scroll w-1/2 min-w-[600px] max-h-96 p-4 mx-6 mt-4'>
      <List
      className='shadow-lg rounded-lg'
        itemLayout="horizontal"
        dataSource={transactions}
        renderItem={transaction => (
          <List.Item className="flex justify-center">
            <List.Item.Meta
              avatar={
                <Avatar size={40} style={{ backgroundColor: 'transparent' }}>
                    <AiTwotoneDollarCircle size={20}/>
                </Avatar>
              }
              title={
                <div className='flex gap-2 items-center'>
                  <span className={transaction.paymentMethod === 'DEBIT' ? 'text-lg text-green-500' : 'text-lg text-orange-500'}>
                  $ {transaction.value.toFixed(2)}
                </span>
                <span className='font-bold'>{transaction.paymentMethod === 'DEBIT' ? 'Paid' : 'Waiting Funds'}</span> 
                </div>
              }
              description={
                <>
                  {transaction.description}
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TransactionsList;