import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Container=styled.div`
    display:flex;
    justify-content: center;
    gap: 10px;
`

const App=()=>{
    const dispatch=useDispatch()
    const cash=useSelector(state=>state.cash.cash)
    console.log('cash is', cash)

    const addCash=(cash)=>{
        dispatch({type:'ADD_CASH', payload:cash})
    }

    const getCash=(cash)=>{
        dispatch({type:'GET_CASH', payload:cash})
    }

    return(
        <Container>
            <div style={{fontSize:'5rem'}}>{cash}</div>
            <button onClick={()=>addCash(Number(prompt('Add cash')))}>Add cash</button>
            <button onClick={()=>getCash(Number(prompt('Get cash')))}>Get cash</button>
        </Container>
    )
}
export default App;