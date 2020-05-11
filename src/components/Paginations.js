import React, {Component} from 'react'
import {Pagination} from 'react-bootstrap'


class Paginations extends Component {


    render() {
        const {page, totalPage, handlePage, previous, next} = this.props
        const active = page;
        const items = [];
        for (let number = 1; number <= totalPage; number++) {
        items.push(
            <Pagination.Item onClick={handlePage} key={number} id={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
        }
        return(
            <>
                <Pagination size="sm">
                    {page === 1 ? <></> : <><Pagination.First onClick={handlePage} id="1" ></Pagination.First>
                    <Pagination.Prev onClick={handlePage} id={previous}></Pagination.Prev></>}
                    {items}
                    {totalPage === page ? <></> : <><Pagination.Next onClick={handlePage} id={next} ></Pagination.Next>
                    <Pagination.Last onClick={handlePage} id={totalPage} ></Pagination.Last></>}
                </Pagination>
            </>
        )
    }
}

export default Paginations