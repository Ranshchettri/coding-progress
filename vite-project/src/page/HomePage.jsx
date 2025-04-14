export function HomePage(){
    let count = 4;
    return(
        <div>
            <h1> parent component</h1>
            <ChildComp count={count} greet="hello" name={"Ransh Suanr "}/>   
            <ChildComp count={count} greet="welcome back home " name={" Ransh "}/>   
            <SecondChild greet="Welcome"/>

        </div>
    );

}
const SecondChild = (props) => {
    return(
        <div>
            <h1>SecondChild</h1> 
        <div> {props.greet}</div>
        </div>
    );
}
const ChildComp = ({count, greet = "Welcome", ...rest}) => {
    return(
        <div style={{backgroundColor: "gray", border: "2px solid "}}>
           <p>child component</p>
           <div> {greet} {rest.name}</div>
           <SubSchildComp count ={count}/>
        </div>
    );
} 
 const SubSchildComp = ({count}) => {
    return(
        <div>
            <p>sub child component</p>
            <div> {count}</div>
        </div>
    );
}


export default HomePage;