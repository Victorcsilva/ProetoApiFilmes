import { prisma } from "../helpers/utils.js";

export const creategender = async (req, reply) => {
  const { name } = req.body;
  try {
    const gender = await prisma.gender.create({
      data: {
        name,
      },
    });
    return reply.send(gender);
  } catch (error) {
    reply.status(500).send("Não foi possível criar o Genero");
  }
};

export const getAllgender = async (request, reply) => {
  try {
    const gender = await prisma.gender.findMany();
    return gender;
  } catch (error) {
    console.log('Não foi possivel encontrar filmes')
  }

};

export const getgender = async function (req, reply) {
    const {id}=req.params
  try {
    const gender = await prisma.gender.findUnique({
      where: {id:+id},
    });
    return reply.send(gender);
  } catch (error) {
    console.error(error)
    reply.status(500).send("Não foi possível encontrar o Genero");
  }
};

export const updategender = async (req,reply) => { 
  const{id} = req.params
  const { name} = req.body;
  try{
      const gender = await prisma.gender.update({
        where: {id:+id},
        data: {
          name,    
        },
      })
      return reply.status(200).send(gender)
    }catch (error){
      reply.status(500).send({error:"Erro no servidor"})
    }
}
export const Deletegender= async (req,reply) => {
  try {
   const {id} = req.params
    const deletegender = await prisma.gender.delete({
      where: {id:+id}
    })
    return reply.status(200).send(deletegender)
  } catch (error) {
    reply.status(500).send({error:"Erro no Servidor"})
    
  }
 
}
