import './index.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <main>
                {cards}
            </main>
        </div>
    )
}

export default App
