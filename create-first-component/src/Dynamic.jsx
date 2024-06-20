export function DynamicFuntion(){
    let Fname = 'Muhammad';
    let Lname = 'Ahmed';
    return (
        <h3>This course is taught by {Fname + Lname}</h3>
    );
}


export function Random(){
    let number = Math.random() * 100;
    return (
        <h2>Random Number is: {Math.round(number)}</h2>
    );
}
