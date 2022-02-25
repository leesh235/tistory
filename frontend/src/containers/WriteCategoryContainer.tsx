import { useState, useEffect } from 'react';
import { BAGICCATEGORYLIST } from '../querys/CategoryQuery';
import { WRITECATEGORY } from '../querys/WriteCategoryQuery';
import { useQuery, useMutation } from "@apollo/client";
import { useForm } from 'react-hook-form';
import { CategoryForm } from '../components/Form/CategoryForm';
import { routes } from '../routes';

export const WriteCategoryContainer = () => {

    const { register, setValue, handleSubmit, getValues, setError, formState: { errors } } = useForm({ mode:"onChange" });
    
    const { loading, data, error } = useQuery(BAGICCATEGORYLIST);
    const [categoryMutation] = useMutation(WRITECATEGORY);

    const [categoryList, setCategoryList] = useState<Array<string>>();

    const onSubmit = async() => {
        try{
            let parentCategory = "";
            
            if(getValues("parentCategory") !== "전체보기"){
                parentCategory = getValues("parentCategory")
            }

            const { data } = await categoryMutation({
                variables: {
                    name: getValues("name"),
                    parentCategoryName: parentCategory
                }
            });

            if(data?.writeCategory?.__typename === "WriteCategorySuccess"){
                alert("작성 완료");
                window.location.replace(`${routes.home}`);
            }
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(data?.getBagicCategoryList?.__typename === "BagicCategoryListSuccess"){
            let arr: Array<string> = data?.getBagicCategoryList?.data.map((val: any) => {
                return val["name"];
            })
            setCategoryList(arr);
        }
    },[loading])

    return(
        <CategoryForm 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            setValue={setValue}
            onSubmit={onSubmit}
            categoryList={categoryList}
        />
    );
}