import { connectDB } from "@/database/db"
import orderDB from "@/model/orderModel"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
    try {
        await connectDB();
        const data = await orderDB.find();

        //success
        return NextResponse.json(data)

    } catch (error) {
        return NextResponse.json({
            message: 'Product not found',
            error: error?.message
        })
    }
}