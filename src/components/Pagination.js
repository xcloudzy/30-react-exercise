import { useState } from "react"


const Pagination = ({ quotes, quotesPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * quotesPerPage;
    const indexOfFirstItem = indexOfLastItem - quotesPerPage;
    const currentItem = quotes.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(quotes.length / quotesPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <>
            <h2 className="mb-4">You are viewing page {currentPage}</h2>
            <div className="container" style={{ width: "50%" }}>
                <ul className="list-group bg-body-dark" data-bs-theme="dark">
                    {
                        currentItem.map((quote, index) => {
                            return <li className="list-group-item " key={index}>{quote}</li>
                        })
                    }
                </ul>
                <div style={{ marginTop: "100px" }}>
                    <ul className="container">
                        {pageNumber.map((number) => {
                            return <button key={number} className='mx-2' onClick={() => setCurrentPage(number)}>Page {number}</button>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Pagination