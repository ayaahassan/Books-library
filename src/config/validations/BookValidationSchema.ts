import { date, mixed, number, object, string } from "yup";

let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;
let isbnPattern = /^\d(?:-?\d){9,12}$/;

export const BookValidationSchema = object({
    title: string().min(5).required(),
    author: string().min(3).required(),
    category: string().required(),
    price: number().test(
        "price",
        "The amount should be a decimal with maximum two digits after comma",
        (val: any) => {
            if (val != undefined) {
                return patternTwoDigisAfterComma.test(val);
            }
            return true;
        }
    ).required(),
    version: string().min(1).required(),
    olderVersion: string().required(),
    edition: string().required(),
    isbn: string().test(
        "isbn",
        "digit length must be between 10-13 and may include dashes ",
        (val: any) => {
            if (val != undefined) {
                return isbnPattern.test(val);
            }
            return true;
        }
    ).required(),
    cover: mixed().required(),
    date:string(),
    brief: string().min(10).max(800).required()
});
