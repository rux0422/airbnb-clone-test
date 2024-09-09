'use server';

import { PrismaClient } from '@prisma/client';
import prisma from '../lib/dbConnect';

// Ensure prisma is correctly initialized
const prismaClient = prisma || new PrismaClient();

async function createUser(userData: any) {
    try {
        const userInfo = await prismaClient.user.create({
            data: userData
        });
        return {
            message: 'Successfully saved',
            data: userInfo
        };
    } catch (err: any) {
        return {
            message: 'Failed to create user',
            err
        };
    }
}

export default createUser;
