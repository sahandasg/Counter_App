import CustomCounter from "./components/CustomCounter";
import store from "./redux/store";
import {counterDecrementAction, counterIncrementAction, counterResetAction} from "./redux/actionCreators";


function App() {
    return (
        <CustomCounter
            counter={store.getState()}
            onIncrement={() => store.dispatch(counterIncrementAction())}
            onDecrement={() => store.dispatch(counterDecrementAction())}
            onReset={() => store.dispatch(counterResetAction())}
        />
    );
}

export default App;
