import prisma from "../libs/prisma.js";

export const createUserAddress = async (req, res) => {
  const { userId, street, city, province, postalCode, phone } = req.body;
    try {
        // console.log({msg: "first",userAddress});
        const userAddresses = await prisma.userAddresses.create({
            data: {
                userId,
                street,
                city,
                province,
                postalCode,
                phone,
            },
        }); 
        console.log({userAddresses});
        return res.status(201).json({ msg: "success create user address!", userAddresses });
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }   
};

export const readUserAddress = async (req, res) => {
    // const { id } = req.params;  
    const userId = req.user.id

    try {
        const userAddresses = await prisma.userAddresses.findMany({
            where: { userId },
        });
        console.log({userAddresses});
        return res.status(200).json({ msg: "success get user address!", userAddresses });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export const readAllUserAddresses = async (req, res) => {
    try {
        const userAddresses = await prisma.userAddresses.findMany();
        console.log({userAddresses});
        return res.status(200).json({ msg: "success get all user addresses!", userAddresses });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export const updateUserAddress = async (req, res) => {
    const { id } = req.params;
    const { street, city, province, postalCode, phone } = req.body; 
    const updateData = {};

    if (street) updateData.street = street; 
    if (city) updateData.city = city;
    if (province) updateData.province = province;
    if (postalCode) updateData.postalCode = postalCode;
    if (phone) updateData.phone = phone;  

    try {
        const userAddresses = await prisma.userAddresses.update({
            where: { id },    
            data: updateData,
        });

        console.log({userAddresses});
        return res.status(201).json({ msg: "success update user address!", userAddresses });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export const deleteUserAddress = async (req, res) => {
    const { id } = req.params;
    try {
        const userAddresses = await prisma.userAddresses.delete({
            where: { id },    
        });

        console.log({userAddresses});
        return res.status(201).json({ msg: "success delete user address!", userAddresses });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
