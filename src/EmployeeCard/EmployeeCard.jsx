import './EmployeeCard.css'
import { useState } from 'react'


function EmployeeCard(props) {
    const [role, setRole] = useState(props.role);

    const clickHandler = () => {
        if (role == 'Better role') {
            setRole(props.role);
            document.querySelector(".buttonPromotion").textContent = "Promote";
        } else {
            setRole("Better role");
            document.querySelector(".buttonPromotion").textContent = "Demote";
            console.log(document.querySelector(".buttonPromotion"));
        }
    }

    return (
        <>
            <div className="CardClass">
                <h2> Name: {props.fullName}</h2>
                <p> Role: {role}  </p>
                <p> Department: {props.department}</p>
                <p> Field1: {props.field1}</p>
                <p> Field2: {props.field2}</p>
                <button className="buttonPromotion" onClick={clickHandler}>Promote</button>
            </div>
        </>
    )
}

export default EmployeeCard