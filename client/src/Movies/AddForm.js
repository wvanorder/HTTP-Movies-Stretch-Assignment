import React from 'react';


const AddMovie = props => {
    return(
        <div className="form">
            <form>
                <input placeholder="Movie Title"
                onChange={props.changeHandler}
                value={props.title}
                name="title"
                required = 'Fill Me out'
                />
                <input placeholder="Director"
                onChange={props.changeHandler}
                value={props.director}
                name="director"
                required = 'Fill Me out'
                />
                <input placeholder="MetaScore"
                onChange={props.changeHandler}
                value={props.metascore}
                name="metascore"
                required = 'Fill Me out'
                />
                <input placeholder ='Actor1, etc..'
                onChange={props.changeHandler}
                value={props.stars}
                name="stars"
                required = 'Fill Me out'
                />
                {/* {props.error && <p>{props.error}</p>} */}
            </form>
            <button onClick={props.addMovie}>Add Movie</button>
            
        </div>
        
    )
}


export default AddMovie;