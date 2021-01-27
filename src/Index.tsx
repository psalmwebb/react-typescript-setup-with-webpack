import App from "./App"
import ReactDOM from "react-dom"
import React,{FC} from "react"


const Index:FC = () : JSX.Element =>
{
    return (
        <div className="">
            <App/>
        </div>
    )
}

ReactDOM.render(<Index/>,document.querySelector("#root"))

