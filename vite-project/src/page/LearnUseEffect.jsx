import { useEffect, useState } from "react";

export default function LearnUseEffect() {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log("------", data);
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const styles = {
        container: {
            padding: "20px",
            fontFamily: "Arial, sans-serif"
        },
        header: {
            textAlign: "center",
            color: "#333"
        },
        count: {
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "10px"
        },
        button: {
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px"
        },
        productList: {
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center"
        },
        productCard: {
            width: "250px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            padding: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center"
        },
        image: {
            width: "100px",
            height: "100px",
            objectFit: "contain",
            marginBottom: "10px"
        },
        productTitle: {
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "5px"
        },
        price: {
            color: "green",
            fontWeight: "bold",
            margin: "5px 0"
        },
        category: {
            fontStyle: "italic",
            fontSize: "12px",
            color: "#555"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Learn Use Effect</h1>
            <div style={styles.count}>Total Products: {products?.length}</div>
            <div>
                <button style={styles.button} onClick={getData}>Refetch</button>
            </div>
            <div style={styles.productList}>
                {products?.map((product) => (
                    <div key={product.id} style={styles.productCard}>
                        <h2 style={styles.productTitle}>{product?.title}</h2>
                        <img src={product?.image} alt="product" style={styles.image} />
                        <p>{product?.description?.slice(0, 100)}...</p>
                        <p style={styles.price}>${product?.price}</p>
                        <p style={styles.category}>Category: {product?.category}</p>
                        <p>Rating: {product?.rating?.rate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
