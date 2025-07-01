import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@pushkar_verma/medium-common";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string,
    }
}>();


blogRouter.use('/*', async(c,next) => {


    const token = c.req.header('Authorization')?.split(' ')[1]

    if(!token){
        return c.json({ "message" : "Missing Token" },401)
    }

    try{
        const decoded = await verify(token, c.env.JWT_SECRET)

        if(decoded){
            console.log(decoded.id)
            //@ts-ignore
            c.set('userId',decoded.id)
            await next()
        } else {
            return c.json({
                "message" : "Invalid Token"
            },403)
        }
    } catch (e) {
        return c.json({
            "message" : "Invalid token"
        },401)
    }
})


blogRouter.post('/', async(c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const { success } = createBlogInput.safeParse(body);
    if(!success){
        return c.json({
            message: "Incorrect inputs"
        },411)
    }

    try{
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get('userId')
            }
        })

        return c.json({
          id: blog.id
        })

    } catch(e) {
        return c.json({
            message: "Error in uploading blog"
        },404)
    }
})


blogRouter.put('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if(!success){
        return c.json({
            message: "Incorrect inputs"
        },411)
    }

    try{
        const blog = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })

        return c.json({
          id: blog.id
        })

    } catch(e) {
        return c.json({
            message: "Error in updating blog"
        },404)
    }
})


//Add Pagination later
blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blogs = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author:{
                    select:{
                        name: true
                    }
                }
            }
        });

        return c.json({ blogs })

    } catch(e) {
        return c.json({
            message: "Error in fetching blogs"
        },404)
    }
})


blogRouter.get('/:id', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param('id')

    try{
        const blog = await prisma.post.findFirst({
            where: {
                id: id
            },
            select: {
                content: true,
                title: true,
                id: true,
                author:{
                    select:{
                        name: true
                    }
                }
            }
        })

        return c.json({ blog })

    } catch(e) {
        return c.json({
            message: "Error in fetching blog"
        },404)
    }
})