import React, { useEffect, useState, useMemo } from "react";
import { debounce } from "lodash";

import utils from "./utils";
import { Table, Pagination, Input } from "./components";

function App() {
  const [councillors, setCouncillors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setLoading(true);
    utils
      .fetchData(currentPage)
      .then((response) => {
        response.json().then((body) => {
          setLoading(false);
          setCouncillors(body);
        });
      })
      .catch(() => {
        setLoading(false);
      });
  }, [currentPage]);

  const onPaginationClick = (pageNumber) => {
    if (pageNumber >= 1) {
      setCurrentPage(pageNumber);
    }
  };

  const onInputChange = useMemo(() => {
    const debounced = debounce((e) => {
      setFilter(e.target.value);
    }, 300);
    return (e) => {
      e.persist();
      return debounced(e);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Input onChange={onInputChange} />
          <Table
            data={councillors
              .filter((item) => {
                if (!filter) {
                  return item;
                }

                return item.id === Number(filter);
              })
              .sort()}
          />
          <Pagination
            onClick={onPaginationClick}
            currentPage={currentPage}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
