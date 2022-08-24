import React, { useState, useEffect } from "react";

const Table = ({ products }) => {
  const [sortProduct, setSortProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSortClick = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.newcase - b.newcase;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick2 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.newcase - a.newcase;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick3 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.totalcase - b.totalcase;
    });

    setSortProduct(res);
  };
  const onSortClick4 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.totalcase - a.totalcase;
    });

    setSortProduct(res);
  };

  const onSortClick5 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.newexclude - a.newexclude;
    });

    setSortProduct(res);
  };

  const onSortClick6 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.newexclude - a.newexclude;
    });

    setSortProduct(res);
  };

  const onSortClick7 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.newdeath - a.newdeath;
    });

    setSortProduct(res);
  };

  const onSortClick8 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.newdeath - a.newdeath;
    });

    setSortProduct(res);
  };

  const onHandleSearch = (event) => {
    setSearchTerm(event.target.value);
    const tempProducts = [...products];

    const filterProducts = tempProducts.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    console.log({ filterProducts });

    setSortProduct(filterProducts);
  };

  useEffect(() => {
    setSortProduct(products);
  }, [products]);

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="search..."
          value={searchTerm}
          onChange={onHandleSearch}
        />
      </div>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th></th>
            <th>Provinces</th>

            <th style={{ width: "200px" }}>
              New Case{" "}
              <span role="button" className="" onClick={onSortClick}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick2}>
                ⬇️
              </span>
            </th>
            <th style={{ width: "200px" }}>
              Total Case{" "}
              <span role="button" className="" onClick={onSortClick3}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick4}>
                ⬇️
              </span>
            </th>
            <th scope="col">
              New Exclude
              <span role="button" className="" onClick={onSortClick5}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick6}>
                ⬇️
              </span>
            </th>

            <th scope="col">
              New Death
              <span role="button" className="" onClick={onSortClick7}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick8}>
                ⬇️
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortProduct.map((items, txn_date) => {
            return (
              <tr className="table-info">
                <td>{txn_date + 1}</td>
                {/* <td>
                  <img
                    src={items.thumbnail}
                    alt={items.item}
                    width="100px"
                  ></img>
                  <td>{items.date}</td>
                </td> */}
                <td>{items.date}</td>

                <td>{items.province}</td>
                <td>{items.newcase}</td>
                <td>{items.totalcase}</td>
                <td>{items.newexclude}</td>
                <td>{items.newdeath}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
