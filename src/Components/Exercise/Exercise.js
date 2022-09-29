
import './Exercise.css'
const Exercise = (props) => {
    const { exercise, clickHandler, exerciseTime } = props;
    const { img, title, details, age, time_required } = exercise;
    let totalTime = 0;
    for (const exercise of exerciseTime ) {
        totalTime = totalTime + exercise.time_required;
    }
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{details}</p>
            <h5>For Age: {age}</h5>
            <h5>Time Required: {time_required}s</h5>
            <button className='button' onClick={()=> clickHandler(exercise)}>
                <h4>Add to list</h4>
            </button>
        </div>
    );
};

export default Exercise;