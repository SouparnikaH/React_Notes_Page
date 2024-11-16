import React,{useState} from "react";

const Calculator =()=>{
    const [inputval, setinputval] = useState("");
    const [submitted, setsubmitted] =useState([]);

    const handleInputChange =(event)=>{
        setinputval(event.target.value);
    };

    const handleSubmit =()=>{
        if(inputval.trim()){
            setsubmitted([...submitted, inputval.trim()]);
            setinputval("");
        } 
    };

    const HandleDelete =(index)=>{
        const newsub = submitted.filter((_, submittindex) => submittindex !== index);
        setsubmitted(newsub)

    }; 
    

    return(
        <div className="todo_box">
            <h1>Simple Note's website In React</h1>
            <div className="Text_todo">
                <h4>Enter You'r Note</h4>
                <input type="text" 
                     placeholder="Enter something" 
                     value={inputval} 
                     onChange={handleInputChange}></input>

                 <button className="button_add" onClick={handleSubmit}>Print Value</button> 
                 <ul className="list_">
                    {submitted.map((submitt, index)=>(
                     <li  key={index} className="list_item">{submitt}
                        <button className="delete" onClick={()=>HandleDelete(index)}>delete
                        </button>
                    </li>
                     )) }
                </ul>
            </div>
        </div> 
    );
}
export default Calculator;

 