import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import * as actionTypes from "../../redux/actionTypes";
import dispatch from "../../redux/dispatch";
import "./PaginatedItems.scss";

interface Props {
  itemsPerPage: number;
  items: any;
}

interface itemsProps {
  currentItems?: any;
}

const PaginatedItems: React.FC<Props> = ({ itemsPerPage, items }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    dispatch(
      actionTypes.CURRENT_ITEMS_DATA,
      items?.slice(itemOffset, endOffset)
    );

    setPageCount(Math.ceil(items?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="< previous"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      containerClassName="pagination"
      // breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default PaginatedItems;
