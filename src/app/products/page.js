"use client"
import { fetchProducts, getProducts } from "@/redux/slices/productsSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const Products = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.products.products.products)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
  return (
    <div>
        <h1>Products</h1>
        {
            data ? data.map((item)=> (
            <div style={{margin: "1rem 10px", backgroundColor: "white", color: "black", padding: "10px"}} key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h5>price: ${item.price}</h5>
            </div>
            )) : 
            <h1 style={{margin: "3rem auto",  textAlign: "center"}}>Loading...</h1>
        }
    </div>
  )
}

export default Products