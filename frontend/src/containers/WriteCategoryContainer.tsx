import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelect } from '../redux/actions/select';
import { WRITECATEGORY, MODIFYCATEGORY } from '../querys/CategoryQuery';
import { useMutation } from "@apollo/client";
import { useForm } from 'react-hook-form';
import { CategoryForm } from '../components/Form/CategoryForm';
import { routes } from '../routes';

export const WriteCategoryContainer = () => {

    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm();

    const dispatch = useDispatch();
    const store_selectName = useSelector((state: any) => state?.select?.select.name);
    const store_selectId = useSelector((state: any) => state?.select?.select.id);
    
    const [check, setCheck] = useState<boolean>(true);
    const [writeMutation] = useMutation(WRITECATEGORY);
    const [modifyMutation] = useMutation(MODIFYCATEGORY);

    const onSubmit = async() => {
        try{
            if(check){
                let parentCategory = "";
                
                if(store_selectName !== "전체보기"){
                    parentCategory = store_selectName
                }
    
                const { data } = await writeMutation({
                    variables: {
                        name: getValues("name"),
                        parentCategoryName: parentCategory
                    }
                });
    
                if(data?.writeCategory?.__typename === "WriteCategorySuccess"){
                    alert("작성 완료");
                    window.location.replace(`${routes.writeCategory}`);
                }
            }else{
                const modifyResult = await modifyMutation({
                    variables:{
                        name: getValues("name"),
                        categoryId: store_selectId
                    }
                })
         
                if(modifyResult?.data?.modifyCategory?.__typename === "ModifyCategorySuccess"){
                    alert("수정 완료");
                    window.location.replace(`${routes.writeCategory}`);
                }
            }
        } catch(error){
            console.log(error);
        }
    }

    const onClick = () => {
        dispatch(setSelect({name: "", id: -1}));
    }

    const handleMode = () => {
        if(store_selectName !== ""){
            if(check){
                setCheck(false);
                setValue("name", store_selectName);
            }else{
                setCheck(true);
                setValue("name", "");
            }
        }
    }

    useEffect(() => {
        setCheck(true);
        setValue("name", "");
    },[store_selectName])

    return(
        <CategoryForm 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            onClick={onClick}
            handleMode={handleMode}
            check={check}
            selectName={store_selectName}
            selectId={store_selectId}
        />
    );
}