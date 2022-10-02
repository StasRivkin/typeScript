import { useState } from 'react';
import { fetchQuoteAction } from '../actionFunction/quoteAction';
import { deposit, withdraw } from '../reducers/moneyReducer';
import { useAppDispatch } from '../store/configureStore';

const Operations = () => {

    const dispatch = useAppDispatch();
    const [sum, setSum] = useState(1);

    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-danger btn-lg' onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
                <input
                    className='form-controle-lg text-center rounded'
                    onChange={e => setSum(+e.target.value)}
                    value={sum}
                    type='number'>
                </input>
                <button className='btn btn-danger btn-lg' onClick={() => dispatch(deposit(sum))}>Deposit</button>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-danger btn-lg' onClick={() => dispatch(fetchQuoteAction() )}>Get Quote</button>
            </div>
        </div>
    )
}

export default Operations