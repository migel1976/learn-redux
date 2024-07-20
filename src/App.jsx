import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";

const Container=styled.div`
    display:flex;
    justify-content: center;
    gap: 10px;
    padding-block:10px;
`

const App=()=>{
    const dispatch=useDispatch()
    const cash=useSelector(state=>state.cash.cash)
    const customers=useSelector(state=>state.customer.customers)

    const addCash=(cash)=>{
        // dispatch({type:'ADD_CASH', payload:cash})
        dispatch(addCashAction(cash))
    }

    const getCash=(cash)=>{
        // dispatch({type:'GET_CASH', payload:cash})
        dispatch(getCashAction(cash))
    }

    const addCustomer=(name)=>{
        const customer={
            id:Date.now(),
            name
        }
        // dispatch({type:'ADD_CUSTOMER', payload:customer})
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer=(customer)=>{
        // dispatch({type:'REMOVE_CUSTOMER', payload:customer})
        dispatch(removeCustomerAction(customer))
    }

    return(
        <>
            <Container>
                <div style={{fontSize:'5rem'}}>{cash}</div>
                <button onClick={()=>addCash(Number(prompt('Add cash')))}>Add cash</button>
                <button onClick={()=>getCash(Number(prompt('Get cash')))}>Get cash</button>
            </Container>
            <Container>
                <button onClick={()=>addCustomer(prompt('Add customer'))}>Add Customer</button>
                {/* <button onClick={()=>getCustomer(prompt('Get cash')))}>Get Customer</button> */}
            </Container>
            {
                customers.length != 0 ?
                <div>
                    {
                        customers.map(item=><div 
                            onClick={()=>removeCustomer(item)}
                            style={{textAlign:'center', border:'1px solid #00f', marginTop:'5px'}} key={item.id}>{item.name}</div>)
                    }
                </div>
                : <div style={{fontSize:'3rem', textAlign:'center', color:'#f00' }}>
                    There is no clients
                </div>
            }
        
        </>
    )
}
export default App;