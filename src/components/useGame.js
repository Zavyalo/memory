import React from "react";




export function useGame(images) {
    const [finishedItems, setFinishedItems] = React.useState([]);
    const [stepsCount, setstepsCount] = React.useState(0);
    const checkItems = (firstItem, secondItem) => {
        const firstImage = images.find(({id}) => id === firstItem);
        const secondImage = images.find(({id}) => id === secondItem);
        if (firstImage.url === secondImage.url) {
            setFinishedItems((items) => [...items, firstItem, secondItem]);
        }
    setstepsCount((i) => i + 1);
};

const handleReset = () => {
    setFinishedItems([]);
    setstepsCount(0);
};

const isWin = finishedItems.lenght > 0 && finishedItems.lenght === images.lenght;

return {
    finishedItems, //список отгданных карточек
    handleReset,  //сброс игры
    stepsCount,  //счетчик шагов игры
    checkItems,  //сравнение двух карточек
    isWin  //
}
};
