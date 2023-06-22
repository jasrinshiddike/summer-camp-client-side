
const PopularInstructorsCard = ({instructor}) => {
    const { image, name } = instructor;
    return (
        <div className="flex items-center justify-center space-x-3">
            <img className="w-[150px] h-[150px] rounded-full" src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl">{name}</h3>
            </div>
        </div>
    );
};

export default PopularInstructorsCard;