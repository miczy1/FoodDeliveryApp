import Navigation from "@/navigation";
import { Provider } from "react-redux";
import {store} from "@/store";



export default function Index() {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    )
}


