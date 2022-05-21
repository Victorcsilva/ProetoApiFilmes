import { prisma } from "../helpers/utils.js";

export const createmovie = async (req, reply) => {
  const { title, description, gender_id,user_id } = req.body;
  try {
    const movie = await prisma.movie.create({
      data: {
        title,
        description,
        gender: {
          connect: { id: gender_id },
        },
        user: {
          connect: { id: user_id },
        },
      },
    });
    return reply.send(movie);
  } catch (error) {
    reply.status(500).send("Não foi possível criar o filme");
  }
};

export const getAllmovies = async (request, reply) => {
  try {
    const movies = await prisma.movie.findMany();
    return movies;
  } catch (error) {
    console.log('Não foi possivel encontrar filmes')
  }

};

export const getmovie = async function (req, reply) {
    const {id}=req.params
  try {
    const movie = await prisma.movie.findUnique({
      where: {id:+id},
    });
    return reply.send(movie);
  } catch (error) {
    console.error(error)
    reply.status(500).send("Não foi possível encontrar o filme");
  }
};

export const updatemovies = async (req,reply) => { 
  try{
      const{id} = req.params
      const { title,description,gender_id, } = req.body;
      const updatemovie = await prisma.movie.update({
        where: {id:+id},
        data: {
          title,
          description,
             gender: {
              connect: { id:parseInt(gender_id) } },
        },
      })
      return reply.status(200).send(updatemovie)
    }catch (error){
      reply.status(500).send({error:"Erro no servidor"})
    }
}
export const Deletemovie = async (req,reply) => {
  try {
   const {id} = req.params
    const deletemovie = await prisma.movie.delete({
      where: {id:+id}
    })
    return reply.status(200).send(deletemovie)
  } catch (error) {
    reply.status(500).send({error:"Erro no Servidor"})
    
  }
 
}
