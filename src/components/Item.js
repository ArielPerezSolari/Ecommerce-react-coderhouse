const Item = ({item}) => {
    return (
        <div className="itemCard">
            <img src={item.img} alt={item.name}/> 
            <li>{item.name}</li>
            <p>Price: {item.price}</p>
            <p>Stock: {item.stock}</p>
            <button>Detail</button>
            </div>
    );
};

export default Item

