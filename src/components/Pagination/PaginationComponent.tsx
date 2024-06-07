import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";
import {carService} from "../../services/carService";


const PaginationComponent: FC = () => {

    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        prev: null,
        next: null,
        total_items: 0,
        total_pages: 0
    });

    useEffect(() => {
        carService.getUserCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarsPaginatedObject(value);
            }
        });
    }, [query]);

    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...carsPaginatedObject.prev});
                break;
            case 'next':
                setQuery({...carsPaginatedObject.next});
                break;
        }
    }

    return (
        <>
            <div>
                <button onClick={() => {
                    changePage('prev');
                }} disabled={!carsPaginatedObject.prev}>
                    prev
                </button>
                <button onClick={() => {
                    changePage('next');
                }} disabled={!carsPaginatedObject.next}>
                    next
                </button>
            </div>
        </>
    );
};

export default PaginationComponent;
