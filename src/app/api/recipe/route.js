import prisma from "../../../utils/db.config";

export const GET = async (req) => {
    
    try {
        const recipe = await prisma.recipe.findMany()

        return new Response(JSON.stringify(recipe), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 