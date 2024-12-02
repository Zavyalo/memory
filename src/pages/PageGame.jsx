import { Header } from "../components/header"
import { Grid } from "../components/grid"
import { Cards } from "./../components/cards"
import { Footer } from "../components/footer"
import { Modal } from "../components/modal"
import { useGame } from "../components/useGame"
import { images } from "../data"



export function PageGame() {
    const { finishedItems, handleReset, stepsCount, checkItems, isWin } = useGame(images);
    return (
        <div>
            <Header />

            <section className="game container">
                <div className="steps">{stepsCount}</div>
                <Grid
                    images={images}
                    finishedItems={finishedItems}
                    checkItems={checkItems}
                />
                {isWin && (
                    <Modal>
                        <h3 className="modal-caption">Пoбeдa!</h3>
                        <p className="modal-description">Вы собрали все пары за {stepsCount} шагов </p>
                        <button
                            className="button modal-button"
                            type="button"
                            onClick={handleReset}
                        >
                            Новая игра
                        </button>
                    </Modal>
                )}
            </section>
            <Footer />
        </div>
    );
}
