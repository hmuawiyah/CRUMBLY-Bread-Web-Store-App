import prisma from "../libs/prisma.js"
import bcrypt from "bcryptjs"

export const createUser = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const userExists = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (userExists) return res.status(400).json({
            msg: "User already exists"
        })

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        })

        return res.status(201).json({
            msg: "success create user!",
            user
        });


    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

export const readUser = async (req, res) => {
    const id = req.user.id

    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            },
            include: {
                orders: {
                    select: {
                        id: true
                    }
                },
                addresses: true,
            },
        })

        return res.status(200).json({
            msg: "success get user!",
            user
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

export const readAllUser = async (req, res) => {

    try {
        const user = await prisma.user.findMany()

        return res.status(200).json({
            msg: "success get all user!",
            user
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

export const updateUser = async (req, res) => {
    const id = req.user.id
    const {
        name,
        email,
        password
    } = req.body

    const updateData = {}
    if (name) updateData.name = name
    if (email) updateData.email = email
    if (password) updateData.password = password ? await bcrypt.hash(password, 10) : undefined

    try {
        if (!Object.keys(updateData).length) {
            return res.status(400).json({
                msg: "No data provided for update"
            })
        }

        const user = await prisma.user.update({
            where: {
                id
            },
            data: updateData,
        })

        return res.status(201).json({
            msg: "success update user!",
            user
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}








export const deleteUser = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const user = await prisma.user.delete({
            where: {
                id
            },
        })

        return res.status(201).json({
            msg: "success delete user!",
            user
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}