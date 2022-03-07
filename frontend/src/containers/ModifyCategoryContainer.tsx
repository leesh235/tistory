import { useDispatch } from 'react-redux';
import { setSelect } from '../redux/actions/select';
import { useQuery, useMutation } from "@apollo/client";
import { CATEGORYLIST, DELETECATEGORY } from '../querys/CategoryQuery';
import { ModifyCategory } from "../components/ModifyCategory";
import { routes } from '../routes';

export const ModifyCategoryContainer = () => {

    const dispatch = useDispatch();

    const { loading, data, error } = useQuery(CATEGORYLIST);
    const [deleteMutation] = useMutation(DELETECATEGORY);

    const onClick = ({name, id}: {name: string, id: number}) => {
        dispatch(setSelect({name, id}));
    }

    const deleteCategory = async({name, id}: {name: string, id: number}) => {
        try{
            if(window.confirm(`${name}를 삭제하시겠습니까?`)){
                const deleteResult = await deleteMutation({
                    variables: {
                        name,
                        categoryId: id
                    }
                })
                if(deleteResult?.data?.deleteCategory?.__typename === "DeleteCategorySuccess"){
                    alert("삭제 완료");
                    window.location.replace(`${routes.writeCategory}`);
                }
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <ModifyCategory 
            handleDeleteCategory={deleteCategory}
            onClick={onClick}
            categoryList={data?.getCategoryList?.data}
        />
    );
}