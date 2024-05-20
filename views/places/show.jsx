const React = require('react');
const Def = require('../default');

function show(data) {
    console.log("Show - data:", data); // Log the data object
    return (
        <Def>
            <main className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <p>Currently Unrated</p>
                        <h2>Description</h2>
                        <p>Located in {data.place.city}, {data.place.state} Serving {data.place.cuisines}</p>
                    </div>
                    <div className="col-md-6">
                        <img src={data.place.pic} className="img-fluid" alt={data.place.name} />
                    </div>
                </div>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <h2>Comments</h2>
                        <p>No Comments Yet!</p>
                    </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = show;
