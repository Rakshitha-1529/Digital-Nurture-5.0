function BookDetails() {

    const books = [
        {
            bookName: "Master React",
            price: 670
        },
        {
            bookName: "Deep Dive into Angular 11",
            price: 800
        },
        {
            bookName: "Mongo Essentials",
            price: 450
        }
    ];

    return (
        <div>
            <h1>Book Details</h1>

            {
                books.map((book, index) => (
                    <div key={index}>
                        <h3>{book.bookName}</h3>
                        <h4>{book.price}</h4>
                    </div>
                ))
            }
        </div>
    );
}

export default BookDetails;