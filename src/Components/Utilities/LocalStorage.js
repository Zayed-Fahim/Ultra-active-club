const addToLs = id => {
    let exerciseTime = {};
    const storedTime = localStorage.getItem('exercise-time');
    if(storedTime){
        exerciseTime = JSON.parse(storedTime);
    }
    const quantity = exerciseTime[id];
    if(quantity){
        const newQuantity = quantity + 1;
        exerciseTime[id] = newQuantity;
    }
    else{
        exerciseTime[id] = 1;
    }
    localStorage.setItem('exercise-time', JSON.stringify(exerciseTime));
}
export default addToLs;


