import React from "react";
import './Accordion.css'
const Accordion = () => {
    return (
        <div className="accordion">
            <h1>Question Answering</h1>
            <div>
                <h2>1. How does React work ?</h2>
                <p>React is a JavaScript library  that creates user interfaces in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilize it with other libraries.</p>
            </div>
            <div>
                <h2>2. What is the differences between props and state ?</h2>
                <p>In props,the Data is passed from one component to another.In state,the Data is passed within the   component only.
                    Props is Immutable (cannot be modified).State is Mutable ( can be modified).
                    Props can be used with state and functional components.State can be used only with the state components/class component (Before 16.0).
                    Props are read-only.State is both read and write.</p>
            </div>
            <div>
                <h2>3. What does useEffect do without load API through fetch ?</h2>
                <p>This is why useEffect is the hook for us - by fetching data, we're making our React component impure, and useEffect provides us a safe place to write impure code.</p>
            </div>
        </div>
    );
};

export default Accordion;
