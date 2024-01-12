import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import getCategory from "@/actions/get-category";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import Filter  from "./components/filter";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });
    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);
    return (
        <div className="bg-white"> 
            <Container>
               <Billboard data={category.billboard} /> 
               <div className="px-4 sm:px-6 lg:px-8 pb-24">
                <div className="lg:grig lg:grid-cols-5 lg:gap-x-8">
                    {/** přidaní mobilního filtru */}
                    <div className="hidden lg:block">
                        <Filter 
                        valueKey="sizeId" 
                        name="Velikosti" 
                        data={sizes}
                        />
                    </div>
                </div>
               </div>
            </Container>
        </div>
    );
};

export default CategoryPage;