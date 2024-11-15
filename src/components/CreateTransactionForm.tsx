import type { FormProps } from 'antd';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { FaRegCreditCard } from 'react-icons/fa';
import { api } from '../lib/axios';
import { generateIdempotencyKey } from '../lib/utils';

type FieldType = {
  value?: number;
  description?: string;
  paymentMethod?: string;
  cardNumber?: string;
  cardHolder?: string;
  cardExpiry?: string;
  cvv?: string;

};



interface CreateTransactionFormProps {
    onSubmit: () => void;
}


const CreateTransactionForm = ({onSubmit}: CreateTransactionFormProps) => {

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
      const { value, description, paymentMethod, cardNumber, cardExpiry, cardHolder, cvv } = values
      
      await api.post('/transactions', {
        value,
        description,
        paymentMethod,
        cardNumber: cardNumber?.replace(/\s/g, ''),
        cardHolder,
        cardExpiry,
        cvv,
        clientId: '28cdb13f-bb39-410b-86ca-043ebc30e5de'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-idempotency-key': generateIdempotencyKey()
        }
      }
    );

      onSubmit();
      };
      
      const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (

      <Form
      name="createTransactionForm"
      labelCol={{ span: 4 }}
      labelWrap
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, padding: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className='flex flex-col space-y-4 items-center'
    >
     <div className='w-full '>

     <Form.Item<FieldType>
        label="Amount"
        name="value"
        rules={[{ required: true, message: 'Please input the amount!' }]}
      >
        <InputNumber className='mx-6'   />
      </Form.Item>
  
      <Form.Item<FieldType>
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input className='mx-6' />
      </Form.Item>
      
      <Form.Item 
          label="Payment Method"
        name="paymentMethod"
        rules={[{ required: true, message: 'Please select a payment method' }]}>
        <Select className='mx-6' >
          <Select.Option value="CREDIT">Credit</Select.Option>
          <Select.Option value="DEBIT">Debit</Select.Option>
        </Select>
      </Form.Item>

     </div>



      <div className="bg-gray-100 p-4 rounded-lg mb-4 relative w-80">
      <FaRegCreditCard className="absolute top-4 right-4 text-gray-500" size={24} />

        <Form.Item
          name="cardNumber"
          rules={[{ required: true, message: 'Please enter your card number' }]}>
          <Input placeholder="Card Number" className="mb-2 w-full" />
        </Form.Item>

        <Form.Item
          name="cardHolder"
          rules={[{ required: true, message: 'Please enter the card holder name' }]}>
          <Input placeholder="Card Holder" className="mb-2 " />
        </Form.Item>

        <div className="flex space-x-2">
          <Form.Item
            name="cardExpiry"
            rules={[{ required: true, message: 'Please enter the card expiry date' }]}
            className="flex-1">
            <Input placeholder="MM/YY" className='w-[80%]' />
          </Form.Item>

          <Form.Item
            name="cvv"
            rules={[{ required: true, message: 'Please enter the CVV' }]}
            className="flex-1">
            <InputNumber placeholder="CVV"  className='w-2/3'  />
          </Form.Item>
        </div>
      </div>

  
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>


    </Form>


    )
}

export default CreateTransactionForm;