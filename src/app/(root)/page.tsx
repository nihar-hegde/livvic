import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/services";
import { userData } from "@/lib/actions/user.action";
import { User } from "@/lib/types";

const Home = async () => {
  const data: User = await userData();
  return (
    <main className="flex flex-col">
      <Hero />
      <About aboutData={data.user.about} />
      <Services servicesData={data.user.services} />
      <Projects projectData={data.user.projects} />
      <Skills skillData={data.user.skills} />
      <Testimonials tData={data.user.testimonials} />
      <Footer userData={data} />
    </main>
  );
};
export default Home;
