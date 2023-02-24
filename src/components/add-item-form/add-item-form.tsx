
const AddItem = () => {
    return (<>
        <label>
            <input id="title" type='text' placeholder="Título"></input>
        </label>
        <label>
            <textarea placeholder="Conteúdo" rows={5}></textarea>
        </label>
        <nav>
            <button>esquerda</button>
            <button>adicionar</button>
            <button>direita</button>
        </nav>
    </>
    )
}

export default AddItem