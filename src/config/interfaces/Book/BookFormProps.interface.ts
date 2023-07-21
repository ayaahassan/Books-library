import { Book } from "./Book.interface"

export interface BookFormProps {
	onSubmit: (params: any) => any;
	book?: Book;
}