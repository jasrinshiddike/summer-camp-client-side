
const PopularClassesCard = ({item}) => {
    const { image, class_name } = item;
    return (
        <div className="flex items-center justify-center space-x-3">
            <img className="w-[200px] h-[200px] rounded-2xl" src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl">{class_name}</h3>
            </div>
        </div>
    );
};

export default PopularClassesCard;