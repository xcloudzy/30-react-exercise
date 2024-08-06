import { useState } from "react";

export const Search = ({ quotes }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = quotes.filter((quote) =>
        quote.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container ">
            <form className="d-flex" role="search" style={{ color: "white" }}>
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control bg-body-dark"
                    data-bs-theme="dark"
                    type="search"
                    placeholder="Search for something..."
                />

            </form>

            <div className="mt-6">
                <ul className="list-group bg-body-dark" data-bs-theme="dark">
                    {filteredItems.map((quote, index) => (
                        <li style={{
                            marginTop: '15px',
                            marginRight: "20px"
                        }} className="list-group-item" key={index}>
                            {quote}
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
};
