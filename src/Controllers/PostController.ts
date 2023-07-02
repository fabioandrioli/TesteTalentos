import { Request, Response } from "express";
import * as yup from "yup"

interface Post{
    nome?: string;
    descricao?: string;
    categoria: string;
}

const bodyValidation: yup.Schema<Post> = yup.object().shape({
    nome: yup.string().required().min(3),
    descricao: yup.string().min(3),
    categoria: yup.string().required().min(3),
})

export const index = (req: Request, res: Response) => {
    res.send("index");
}

export const create =async (req: Request<{},{},Post>, res: Response) => {
    let validateDate: Post | undefined = undefined;
  try {
    validateDate = await bodyValidation.validate(req.body);
  } catch (error) {
   const yupError = error as yup.ValidationError;
   return res.status(400).json({ errors: yupError.message });
   
  }
    console.log(validateDate);
    return res.send("create");
}

export const getAll = () => {
    return '';
}

export const show = () => {
    return '';
}

export const destroy = () => {
    return '';
}