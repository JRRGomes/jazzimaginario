import Container from "@/frontend/common/components/container/container";
import Navbar from "@/frontend/common/components/navbar/navbar";
import PageTitle from "@/frontend/common/components/title/title";

const PhotographDrawing = () => {
  return (
    <div>
      <Navbar/>
      <Container className="py-10 md:py-20">
        <PageTitle>Risco de Fotografia</PageTitle>
        <div className="w-full sm:w-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 md:py-20 px-4 lg:px-0">
          
        </div>
      </Container>
    </div>
  );
};



export default PhotographDrawing;
