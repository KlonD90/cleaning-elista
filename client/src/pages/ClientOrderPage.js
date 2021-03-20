import axios from "axios";
import { useState, useEffect } from 'react'

const fetchOrder = async (id) => {
    return {
        id: id,
        address: 'Ул. Клыкова, 8'
    }
}


export const ClientOrderPage = ({ match: { params: { id }}}) => {
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState(null)

    useEffect(async () => {
        setLoading(true)
        const order = await fetchOrder(id)
        setOrder(order)
        setLoading(false)
    }, [id])

    if (loading) {
        return 'Loading'
    }

    return <div>
        <h3>Страница заказов</h3>
        <div>ID: {order.id}</div>
        <div>Адрес: {order.address}</div>
    </div>
}