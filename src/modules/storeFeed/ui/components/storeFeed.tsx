import Card from "@/frontend/common/components/card/card";
import Container from "@/frontend/common/components/container/container";
import Navbar from "@/frontend/common/components/navbar/navbar";
import PageTitle from "@/frontend/common/components/title/title";
import product1 from "../../../../../public/produto1.png";


const StoreFeed = () => {
  return (
    <div>
      <Navbar/>

      <Container className="py-10 md:py-20">
        <PageTitle>Riscos</PageTitle>
        <div className="w-full sm:w-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 md:py-20 px-4 lg:px-0">
          <Card ImageSource={product1} />
          <Card ImageSource={product1}/>
          <Card ImageSource={product1}/>
        </div>
      </Container>
    </div>
  );
};



export default StoreFeed;
