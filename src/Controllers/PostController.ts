import { Request, Response } from "express";
import * as yup from "yup"
import * as PostModel from "../Module/Post"



const bodyValidation: yup.Schema<PostModel.Post> = yup.object().shape({
    nome: yup.string().required().min(3),
    descricao: yup.string().min(3),
    categoria: yup.string().required().min(3),
})

export const index = (req: Request, res: Response) => {
    return res.send(PostModel.getAll());
}

export const create = async (req: Request<{},{},PostModel.Post>, res: Response) => {
    let validateDate: PostModel.Post | undefined = undefined;
  try {
    validateDate = await bodyValidation.validate(req.body);
   
    return res.status(400).send(PostModel.create(validateDate))

  } catch (error) {
   const yupError = error as yup.ValidationError;
   return res.status(400).json({ errors: yupError.message });
   
  }
}

export const update = async (req: Request<{id:string},{},PostModel.Post>, res: Response) => {
    
    let validateDate: PostModel.Post | undefined = undefined;
    try {
      validateDate = await bodyValidation.validate(req.body);
      return res.send("update " + PostModel.update(req.body,req.params.id));
  
    } catch (error) {
     const yupError = error as yup.ValidationError;
     return res.status(400).json({ errors: yupError.message });
     
    }
    //console.log(validateDate);
   
}

export const show = async (req: Request<{id:string}>, res: Response) => {
    return res.send(PostModel.show(req.params.id));
}


export const destroy = async (req: Request<{id:string}>, res: Response) => {
    return res.send("destroy " + PostModel.destroy(req.params.id));
}