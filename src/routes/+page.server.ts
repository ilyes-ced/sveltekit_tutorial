import type { Actions } from "./$types";
import { prisma } from '$lib/server/prisma'
import { fail } from "@sveltejs/kit";


export const actions: Actions = {
    createArticle: async ({ request }) => {
        const { title, content } = Object.fromEntries(await request.formData()) as {
            title: string,
            content: string
        }
        try{
            await prisma.Article.create({
                data: { title, content }
            })
        }catch(err){
            console.log(err)
            return fail(500, {message: 'couldnt create'})
        }
        
    
        return{
            status: 201
        }


    }
};