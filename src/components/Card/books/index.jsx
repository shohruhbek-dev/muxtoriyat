function Books({ books = [] }) {
    if (!Array.isArray(books)) {
        console.error("Books component expected an array but received:", books);
        return <div>Xatolik: noto‘g‘ri formatdagi ma’lumot!</div>;
    }

    return (
        <div className="mt-[20px]">
            <h1 className="font-[Source_Serif_Pro] font-bold text-[20px] leading-[32px] tracking-[-0.06px]">
                Adabiyotlar va manbaalar ro‘yxati
            </h1>
            <div className="border-s-4 p-[10px]">
                <ol className="custom-ordered-list pl-5">
                    {books.map((book, index) => (
                        <li key={index}>{book}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Books;
