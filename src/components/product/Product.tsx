import React, {FC} from 'react';
import styles from './Product.module.css'

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

type IProductTypeProps = IProductProps & { children?: React.ReactNode };

const Product: FC<IProductTypeProps> = ({
                                            title,
                                            description,
                                            price,
                                            discountPercentage,
                                            rating,
                                            stock,
                                            brand,
                                            category,
                                            images
                                        }) => {
    return (
        <div className={styles.product}>
            <h2>{brand} - {title}</h2>
            <p>Category: {category}. Only {stock} left</p>
            <p>{description}</p>
            <p>Price: {price}$. Discount: {discountPercentage}% Rate: {rating}⭐</p>
            <ul>
                {
                    images?.map((image, index) =>
                        <img key={index} src={image} alt={title} className={styles.product_image}/>
                    )
                }
            </ul>
        </div>
    );
};

export default Product;
