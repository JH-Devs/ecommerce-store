import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalide= 0;

const HomePage = async () => {
    const billboard = await getBillboard("b7710671-0882-4309-a5a2-d5edd419dd4c")
    return(
       <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
       </Container>
    )
}
export default HomePage;