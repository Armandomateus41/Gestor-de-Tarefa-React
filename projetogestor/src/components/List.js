const List = () => {   
    const items =[{ 
        id: 1,
        name: "Armando",
    }, {
        id: 2,
        name: "Rafa",

    }, 
    {
        id: 3,
         name: "Pedro",
     },
    ];

    return  <div>
        {items.map((item) => (
            <p>{item.id}-{item.name}
            </p>
        ))}
    </div>;
};
export default List;