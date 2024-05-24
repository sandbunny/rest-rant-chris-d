import React, { useState } from 'react';
const Def = require('../default');

function show(data) {
    const [isRantChecked, setIsRantChecked] = useState(false); // State to manage the checked state of the rant checkbox

    const handleRantChange = () => {
        setIsRantChecked(!isRantChecked); // Toggle the state of the rant checkbox
    };

    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    );
    let rating = (
        <h3 className='inactive'>
            Not yet rated 
        </h3>
    )

    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
          }, 0)
          let averageRating = Math.round(sumRatings / data.place.comments.length)
          let stars = ' '
          for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
          }
          rating = (
            <h3>
              {stars} stars
            </h3>
          )
        comments = data.place.comments.map((c, index) => {
            return (
                <div className="border p-3 mb-3" key={index}>
                    <h2 className={ `${c.rant ? 'text-danger' : 'text-success'}`}>
                        {c.rant ? 'Rant! 😡' : 'Rave! 😃'}
                    </h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            );
        });
    }

    return (
        <Def>
            <main className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <h2>{rating}</h2>
                        <h2>Description</h2>
                        <h4>{data.place.showEstablished()}</h4>
                        <h4>Located in {data.place.city}, {data.place.state} Serving {data.place.cuisines}</h4>
                    </div>
                    <div className="col-md-6">
                        <img src={data.place.pic} className="img-fluid rounded" alt={data.place.name} />
                    </div>
                </div>
                <div className="mt-4">
                    <a href={`/places/${data.place._id}/edit`} className='btn btn-warning mr-2'>
                        Edit
                    </a>
                    <form method='POST' action={`/places/${data.place._id}?_method=DELETE`} className='d-inline'>
                        <button type='submit' className='btn btn-danger'>
                            Delete
                        </button>
                    </form>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <h2>Comments</h2>
                        {comments}
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <h2>Add a Comment</h2>
                        <form action={`/places/${data.place._id}/comment`} method="POST" className="mb-3">
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input type="text" className="form-control" id="author" name="author" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea className="form-control" id="content" name="content" rows="3" required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="stars">Star Rating</label>
                                <input type="number" className="form-control" id="stars" name="stars" step="0.5" min="0" max="5" required />
                            </div>
                           
                            <div className="form-check">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    id="rant" 
                                    name="rant" 
                                    value="true"
                                    checked={isRantChecked} 
                                    onChange={handleRantChange} 
                                />
                                <label className="form-check-label" htmlFor="rant">Rant</label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = show;
