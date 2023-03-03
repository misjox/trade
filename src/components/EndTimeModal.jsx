import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setModal } from '../store/slice/modalSlice';


const EndTimeModal = ()=> {
    const isActiveModal = useSelector((state)=> state.modal.isActive)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return <div className={`endtimemodal ${isActiveModal ? 'active' : ''}`}>
        <div className='endtimemodal__modal'>
            <h2 className='endtimemodal__modal-title'>Время на оплату вышло</h2>

            <button 
            onClick={() => {navigate('/');dispatch(setModal(false))}}className='endtimemodal__modal-button'>Вернуться к обмену</button>
        </div>
    </div>
}

export default EndTimeModal