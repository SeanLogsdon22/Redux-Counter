import { useSelector, useDispatch } from "react-redux";
import { actions } from '../store'

const Counter = () => {
    const counter = useSelector(state => state.counter.counter)

    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(actions.increment())
    }

    const handleDecrease = () => {
        dispatch(actions.decrement())
    }

    const increaseByTen = () => {
        dispatch(actions.increase(10))
    }

    return (
        <>
            <div>{counter}</div>
            <button onClick={handleIncrease}>Increase by 1</button>
            <button onClick={handleDecrease}>Decrease by 1</button>
            <button onClick={increaseByTen}>Increase by 10</button>
        </>
    )
}

export default Counter