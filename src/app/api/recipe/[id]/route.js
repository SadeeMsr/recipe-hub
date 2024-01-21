import prisma from "../../../../utils/db.config";

export const GET = async (request, { params }) => {
  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: Number(params?.id),
      },
    });

    return new Response(JSON.stringify(recipe), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all Recipe", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const requestBody = await request.json();

  try {
    const updateRecipe = await prisma.recipe.update({
      where: {
        id: Number(params?.id),
      },
      data: requestBody,
    });

    return new Response("Successfully updated the Recipe", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Recipe", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await prisma.recipe.delete({
      where: {
        id: Number(params?.id),
      },
    })
      return new Response("Recipe deleted successfully", { status: 200 });
  } catch (error) {
      return new Response("Error deleting Recipe", { status: 500 });
  }
};
