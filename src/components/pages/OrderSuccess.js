import { useNavigate } from "react-router-dom"

 
export default function OrderSuccess (){
    const navigate = useNavigate()
    const tref = window.location.href.split("&")[1].split("=")[1]
     return(
        <div className="successPage">
            <div className="image">
                <img src="https://simplic8app.com/v2/app/images/success.png" alt="Success" />
            </div>
            <h2>Order completed successfully</h2>
            <p>Transaction ref : {tref}</p>
            <div className="buttons">
                <button onClick={(e)=>navigate("/furniture")}>Back to Shopping</button>
                <button>Track Orders</button>
            </div>

        </div>
    )
}