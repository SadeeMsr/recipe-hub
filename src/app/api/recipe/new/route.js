import prisma from "../../../../utils/db.config";

export const POST = async (req) => {
    const reqBody = await req.json();
    try {
        const recipe = await prisma.recipe.create({
            data: reqBody,
          });

        return new Response(JSON.stringify(recipe), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all Recipes", { status: 500 })
    }
} 