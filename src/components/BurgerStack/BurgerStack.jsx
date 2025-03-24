// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
        <ul>
            {props.ingredients.map((ingredient, index) => (
                <li style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button onClick={() => props.removeFromBurger(ingredient)}>X</button>
                </li>
            ))}
        </ul>
    );
};

export default BurgerStack;
