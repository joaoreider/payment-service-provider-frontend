import { List, Avatar } from 'antd';
import { AiTwotoneDollarCircle } from 'react-icons/ai';

interface Transaction {
  id: number;
  amount: number;
  status: string;
  date: string;
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
                <span className={transaction.status === 'paid' ? 'text-green-500' : 'text-orange-500'}>
                  ${transaction.amount.toFixed(2)}
                </span>
              }
              description={
                <>
                  <span className='font-bold'>{transaction.status === 'paid' ? 'Paid' : 'Waiting Funds'}</span> - {transaction.date}
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