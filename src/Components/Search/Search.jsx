import React, { useEffect, useState } from 'react';
import './Search.scss';

function Search() {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/products")
        .then((response) => response.json())
        .then(data => {
            setFilterData(data);
        })
        .catch(err => console.log(err));
    }, []);

    const handleFilter = (value) => {
        const response = filterData.filter(f => f.name.toLowerCase().includes(value.toLowerCase()));
        setData(response);
        if (value === "") {
            setData([]);
        }
    };

    const handleProductClick = (id) => {
        window.location.href = `/SanPham/${id}`;
      };

    return (
        <div className='search-top'>
            <div className='search'>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Tìm sản phẩm..."
                    onChange={e => handleFilter(e.target.value)}
                />
            </div>
            <div className='search-result'>
                {data.map((d, i) => (
                    <div key={i} onClick={() => handleProductClick(d.id)} className="search-result-item">
                        <img src={d.image} alt={d.name} className="product-image" />
                        <div className="product-name">{d.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
