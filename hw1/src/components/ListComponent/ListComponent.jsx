const ParagraphsComponent = () => {
    return (
        <>
    <div>
    <h2>Неупорядоченный список</h2>
    <ul>
    <li>Элемент 1</li>
    <li>
        Элемент 2
        <ul>
        <li>Вложенный элемент 2.1</li>
        <li>Вложенный элемент 2.2</li>
        </ul>
    </li>
    <li>Элемент 3</li>
    </ul>


    <h2>Упорядоченный список</h2>
    <ol>
    <li>Пункт 1</li>
    <li>
        Пункт 2
        <ol>
        <li>Подпункт 2.1</li>
        <li>Подпункт 2.2</li>
        </ol>
    </li>
    <li>Пункт 3</li>
    </ol>
</div>
        </>
    )
}
export default ParagraphsComponent;