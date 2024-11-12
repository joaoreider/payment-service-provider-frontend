interface BalanceCardProps {
  balance: number;
  title: string;
  textColor: string;
}

const BalanceCard = ({ balance, title, textColor }: BalanceCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-52 mx-auto text-center">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className={`text-3xl font-bold mt-4 ${textColor}`}>
        ${balance.toFixed(2)}
      </p>
    </div>
  );
};

export default BalanceCard;
