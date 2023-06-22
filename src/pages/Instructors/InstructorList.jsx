
const InstructorList = ({ instructor }) => {
    const { image, name, email, num_classes } = instructor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-20">
            <figure><img src={image} className="h-[400px] w-[400px]" alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Instructor Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Number of Classes: {num_classes}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorList;