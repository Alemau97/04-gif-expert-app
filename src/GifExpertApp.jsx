import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Taylor Swift', 'Friends', 'Game of Thrones']);

    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map((category)=>
                    (
                        <GifGrid category={category} key={category}/>
                    )
            )}
        </>
)
}
