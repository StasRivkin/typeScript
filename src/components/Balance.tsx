import React from 'react'
import { useSelector } from 'react-redux'
import moneyReducer from '../reducers/moneyReducer';
import quoteReducer from '../reducers/quoteReducer';
import { RootState } from '../store/configureStore';

const Balance = () => {

  const {balance} = useSelector<RootState, ReturnType<typeof moneyReducer>>(state => state.account);
  const {text} = useSelector<RootState, ReturnType<typeof quoteReducer>>(state => state.quote);

    return (
      <div>
        <h1 className='text-center text-uppercase'>Iron Bank Of Braavos</h1>
        <h4 className='text-center text-uppercase'>{text}</h4>
        <h3 className='text-center text-uppercase'>Balance = {balance}</h3>
      </div>
    )
}

export default Balance